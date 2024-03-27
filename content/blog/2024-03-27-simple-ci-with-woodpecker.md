+++
template = "blog/page.html"
title = "Simple selfhosted CI/CD with Woodpecker"
+++

I've bought a new homeserver last week and have been busy transferring my data and services from my old trusty Raspberry Pi to my new Dell Optiplex 3070.
Previously I had a rather brittle, though very simple Continous Deployment (CD) setup:
[webhook](https://github.com/adnanh/webhook) would listen to incoming webhooks, which were configured to be automatically sent from GitHub when I pushed to a repo.
Then, it would simply run a shell script in response.
This worked reasonably well, but:
- I didn't know if the deployment succeeded unless I ssh'd into the server and checked the logs.
- When a detail about the deployment of a repo changed, I had to manually adjust the script, which was on the server and not the repo.
- The shell scripts had some common overhead like setting up a temporary directory, cloning the repo, etc.

Thus, I decided to migrate to a more sophisticated yet still simple CI/CD solution.
I definitely wanted to host it myself, and it should preferably be open source.
There are a lot of options for CI/CD meeting that criteria: [Jenkins](https://www.jenkins.io/) (the old titan, but can get really messy with the many plugins needed), [Concourse](https://concourse-ci.org/) (cool but development has effectively stopped), [ArgoCD](https://argoproj.github.io/cd/) (designed for Kubernetes, which I didn't intend to use), [GitLab](https://gitlab.com) (also has a ton of other features I don't need), and many more.

After a couple hours of searching and skimming through docs, I finally found a solution I really like: [Woodpecker CI](https://woodpecker-ci.org/).
It is a fork of the 0.8 version of Drone CI which turned half-closed-source afterwards and has since seen regular updates and improvements.
One cool aspect of Woodpecker is how design choices were made that keep the system simple yet do not impair its functionality:
The only authentication option is via OAuth2, i.e. you sign in via your forge (so GitHub, GitLab, Gitea or similar) and they use a SQLite DB for storing build logs and info so you don't have to deal with another Postgres setup.

To install it, you could usually simply use their `docker-compose` file.
However, on my new server I'm using `podman` instead of `docker`.
In principle, `podman` is fully compatible with `docker` and could also run the `docker-compose` file with `podman-compose` - however, the native solution is to use [Quadlets](https://www.redhat.com/sysadmin/quadlet-podman).
These can be thought of as a simpler version of Kubernetes kubelets.
Basically, they allow you to do automatic container management but on a single-node scale without the added complexity of something like Kubernetes which is primarily designed for multi-node usecases.
To use Quadlets, you write one or multiple `*.container` files and a `.pod` file and put them in `/usr/share/containers/systemd`.
When you then run `systemctl daemon-reload`, `podman` automatically generates `systemd` service files that run and supervise the containers / pod.
Afterwards you can interact with the containers / pod like a regular `systemd` service, which feels very natural.

For reference, here are my Quadlet files:
```
# woodpecker-agent.container
[Unit]
Requires=woodpecker-server.service
After=woodpecker-server.service

[Container]
Pod=woodpecker.pod
ContainerName=woodpecker-agent
EnvironmentFile=/usr/share/containers/systemd/woodpecker/.env
Exec=agent
Image=docker.io/woodpeckerci/woodpecker-agent:latest
Volume={CHANGEME_AGENT_DATA_PATH}:/etc/woodpecker
Volume=/run/podman/podman.sock:/var/run/docker.sock

[Service]
Restart=always
```

```
# woodpecker-server.container
[Container]
Pod=woodpecker.pod
ContainerName=woodpecker-server
EnvironmentFile=/usr/share/containers/systemd/woodpecker/.env
Image=docker.io/woodpeckerci/woodpecker-server:latest
Volume={CHANGEME_SERVER_DATA_PATH}:/var/lib/woodpecker

[Service]
Restart=always
```

```
# woodpecker.pod
[Pod]
PodName=woodpecker
PublishPort=8000:8000
```

After installation, I followed [the instructions to set up auth via GitHub](https://woodpecker-ci.org/docs/administration/forges/github).
Then you can already add repositories which should be enabled for CI/CD - Woodpecker automatically creates a webhook for those such that your local server is notified when something happens.
In the respective repos you can finally write your pipeline using a very straightforward YAML syntax.
Everything is nicely containerized, but you can still easily interact with the host system using mounted volumes if you want to.
You can check out an [example workflow from my Polyring repo](https://github.com/XYQuadrat/polyring/blob/master/.woodpecker.yaml).

Overall, this solution has resolved all my original problems:
- I have a web interface that I can access and see the status of all pipeline runs including logs.
- The pipeline definition now lives in the respective repos, which makes much more sense.
- Since the pipelines run in a container and the repo is automatically cloned by Woodpecker already, I don't have any setup overhead more like in the custom shell scripts.

If you're searching for a simple yet powerful enough CI/CD solution, check out [Woodpecker](https://woodpecker-ci.org)!