(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // Set current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mark current nav link
  const links = document.querySelectorAll(".nav a[data-href]");
  const path = window.location.pathname.replace(/index\.html$/, "");
  links.forEach((a) => {
    const href = a.getAttribute("data-href");
    const linkPath = href.replace(/index\.html$/, "");
    if (path === linkPath || path.endsWith(linkPath)) {
      a.setAttribute("aria-current", "page");
    }
  });
})();
