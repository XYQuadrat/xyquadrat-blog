// Set darkmode
document.getElementById('mode').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')) {
      localStorage.setItem('theme',  'dark');
      document.getElementById("polyring-banner").setAttribute("theme", "dark");
    } else {
      localStorage.setItem('theme',  'light');
      document.getElementById("polyring-banner").removeAttribute("theme");
      document.getElementById("polyring-banner").removeAttribute("style");
    }
});
  
// enforce local storage setting but also fallback to user-agent preferences
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.body.classList.add('dark');
  var polyringBanner = document.getElementById("polyring-banner");
  
  if(polyringBanner != null){
    polyringBanner.setAttribute("theme", "dark");
  }
}
