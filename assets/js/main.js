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

  // Contact form: build a mailto: URL with subject + body and open the user's mail client.
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get("name") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      const phone = (data.get("phone") || "").toString().trim();
      const topic = (data.get("topic") || "General inquiry").toString().trim();
      const message = (data.get("message") || "").toString().trim();

      const subject = `Website inquiry: ${topic}${name ? " — " + name : ""}`;
      const bodyLines = [
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Phone:   ${phone || "(not provided)"}`,
        `Topic:   ${topic}`,
        "",
        "Message:",
        message,
        "",
        "—",
        "Sent from the Tatiya CPA website contact form.",
      ];
      const body = bodyLines.join("\r\n");

      const mailto =
        "mailto:askcpa@tatiyacpa.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      const status = document.getElementById("contact-form-status");
      if (status) status.style.display = "block";

      window.location.href = mailto;
    });
  }
})();
