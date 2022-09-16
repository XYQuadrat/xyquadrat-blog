const polyringBanner = document.getElementById("polyring-banner");

// Set dark mode
document.getElementById('mode').addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');

    if (polyringBanner != null) {
      polyringBanner.setAttribute("theme", "blog-dark.json");
      polyringBanner.removeAttribute("style");
    }
  } else {
    localStorage.setItem('theme', 'light');

    if (polyringBanner != null) {
      polyringBanner.setAttribute("theme", "blog-light.json");
      polyringBanner.removeAttribute("style");
    }
  }
});

// Enforce local storage setting but also fallback to user-agent preferences
if (localStorage.getItem('theme') === 'dark' ||
  (!localStorage.getItem('theme') && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.body.classList.add('dark');

  if (polyringBanner != null) {
    polyringBanner.setAttribute("theme", "blog-dark.json");
  }
} else {
  if (polyringBanner != null) {
    polyringBanner.setAttribute("theme", "blog-light.json");
  }
}