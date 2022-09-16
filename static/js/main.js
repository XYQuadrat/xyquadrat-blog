const polyringBanner = document.getElementById("polyring-banner");

// Set dark mode
document.getElementById('mode').addEventListener('click', () => {
  var theme = document.body.classList.toggle('dark') ? 'dark' : 'light';

  localStorage.setItem('theme', theme);

  if (polyringBanner != null) {
    polyringBanner.setAttribute("theme", `https://xyquadrat.ch/blog-${theme}.json`);
  }
});

// Enforce local storage setting but also fallback to user-agent preferences
if (localStorage.getItem('theme') === 'dark' ||
  (!localStorage.getItem('theme') && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.body.classList.add('dark');

  if (polyringBanner != null) {
    polyringBanner.setAttribute("theme", "https://xyquadrat.ch/blog-dark.json");
  }
} else {
  if (polyringBanner != null) {
    polyringBanner.setAttribute("theme", "https://xyquadrat.ch/blog-light.json");
  }
}