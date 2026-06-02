/* =============================================================
   Serenity Wellness — Shared scripts
   Renders the nav, footer, popup deal and data-driven sections.
   (No need to edit this file — edit the files inside /data instead.)
   ============================================================= */

document.addEventListener("DOMContentLoaded", function () {
  renderHeader();
  renderFooter();
  renderDealPopup();
  renderServices();
  renderServicesPreview();
  renderPricing();
  renderProducts();
  fillSiteFields();
});

/* ---------- small helper ---------- */
function safe(value, fallback) {
  return (value === undefined || value === null) ? (fallback || "") : value;
}

/* ---------- Header / Nav ---------- */
function renderHeader() {
  const host = document.getElementById("site-header");
  if (!host || typeof SITE === "undefined") return;

  const page = (location.pathname.split("/").pop() || "index.html");
  const links = [
    { href: "index.html",    label: "Home" },
    { href: "services.html", label: "Treatments" },
    { href: "pricing.html",  label: "Pricing" },
    { href: "products.html", label: "Products" },
    { href: "contact.html",  label: "Contact" },
  ];

  const linkHtml = links.map(function (l) {
    const active = (l.href === page) ? " class=\"active\"" : "";
    return `<li><a href="${l.href}"${active}>${l.label}</a></li>`;
  }).join("");

  host.className = "site-header";
  host.innerHTML = `
    <nav class="nav container">
      <a class="brand" href="index.html">
        <img class="brand__logo" src="images/logo-mark.png" alt="${safe(SITE.legalName, SITE.name)} logo">
        <span class="brand__text">
          <span class="brand__name">${safe(SITE.name)}</span>
          <span class="brand__suffix">${safe(SITE.nameSuffix)}</span>
        </span>
      </a>
      <ul class="nav__links" id="navLinks">
        ${linkHtml}
        <li><a class="btn btn--primary nav__cta" href="contact.html">Book Now</a></li>
      </ul>
      <button class="nav__toggle" id="navToggle" aria-label="Menu">&#9776;</button>
    </nav>`;

  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navLinks");
  if (toggle && menu) {
    toggle.addEventListener("click", function () { menu.classList.toggle("open"); });
  }
}

/* ---------- Footer ---------- */
function renderFooter() {
  const host = document.getElementById("site-footer");
  if (!host || typeof SITE === "undefined") return;

  const s = SITE.socials || {};
  const social = [];
  if (s.facebook)  social.push(`<a href="${s.facebook}"  aria-label="Facebook" target="_blank" rel="noopener">f</a>`);
  if (s.instagram) social.push(`<a href="${s.instagram}" aria-label="Instagram" target="_blank" rel="noopener">ig</a>`);
  if (s.whatsapp)  social.push(`<a href="${s.whatsapp}"  aria-label="WhatsApp" target="_blank" rel="noopener">wa</a>`);

  host.className = "site-footer";
  host.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img class="brand__logo" src="images/logo-mark.png" alt="${safe(SITE.legalName, SITE.name)} logo">
          <span class="brand__name">${safe(SITE.name)}</span>
          <span class="brand__suffix">${safe(SITE.nameSuffix)}</span>
          <p>${safe(SITE.tagline)}</p>
          <div class="footer-social">${social.join("")}</div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Treatments</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="privacy.html">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4>Visit Us</h4>
          <ul class="footer-links">
            <li>${safe(SITE.address)}</li>
            <li><a href="tel:${safe(SITE.phone).replace(/\s/g, "")}">${safe(SITE.phone)}</a></li>
            <li><a href="mailto:${safe(SITE.email)}">${safe(SITE.email)}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; Copyright ${safe(SITE.legalName, SITE.name)} All Rights Reserved.
        ${SITE.abn ? " &middot; ABN " + SITE.abn : ""}
        &middot; <a href="privacy.html" style="opacity:.85;">Privacy Policy</a>
      </div>
    </div>`;
}

/* ---------- Popup Deal (homepage) ---------- */
function renderDealPopup() {
  const host = document.getElementById("deal-popup");
  if (!host) return;
  if (typeof ACTIVE_DEAL === "undefined" || ACTIVE_DEAL === null) return;

  const d = ACTIVE_DEAL;
  host.innerHTML = `
    <div class="popup-overlay" id="popupOverlay">
      <div class="popup">
        <div class="popup__img" style="background-image:url('${safe(d.image)}')"></div>
        <div class="popup__body">
          <button class="popup__close" id="popupClose" aria-label="Close">&times;</button>
          ${d.highlight ? `<div class="popup__highlight">${d.highlight}</div>` : ""}
          <h3>${safe(d.title)}</h3>
          <p>${safe(d.description)}</p>
          ${d.validUntil ? `<span class="popup__valid">${d.validUntil}</span>` : ""}
          <div><a class="btn btn--primary" href="${safe(d.buttonLink, '#')}">${safe(d.buttonText, 'Learn More')}</a></div>
        </div>
      </div>
    </div>`;

  const overlay = document.getElementById("popupOverlay");
  const close = document.getElementById("popupClose");

  setTimeout(function () { overlay.classList.add("open"); }, 900);

  function hide() { overlay.classList.remove("open"); }
  close.addEventListener("click", hide);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) hide(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") hide(); });
}

/* ---------- Services grid ---------- */
function renderServices() {
  const host = document.getElementById("services-grid");
  if (!host || typeof SERVICES === "undefined") return;

  host.innerHTML = SERVICES.map(function (s) {
    const benefits = (s.benefits || []).map(b => `<li>${b}</li>`).join("");
    return `
      <article class="card">
        <div class="card__img"><img src="${safe(s.image)}" alt="${safe(s.name)}" loading="lazy"></div>
        <div class="card__body">
          <h3>${safe(s.name)}</h3>
          <p>${safe(s.description || s.short)}</p>
          ${benefits ? `<ul class="card__list">${benefits}</ul>` : ""}
        </div>
      </article>`;
  }).join("");
}

/* ---------- Services preview (homepage, first 3) ---------- */
function renderServicesPreview() {
  const host = document.getElementById("services-preview");
  if (!host || typeof SERVICES === "undefined") return;
  host.innerHTML = SERVICES.slice(0, 3).map(function (s) {
    return `
      <article class="card">
        <div class="card__img"><img src="${safe(s.image)}" alt="${safe(s.name)}" loading="lazy"></div>
        <div class="card__body">
          <h3>${safe(s.name)}</h3>
          <p>${safe(s.short)}</p>
        </div>
      </article>`;
  }).join("");
}

/* ---------- Pricing table ---------- */
function renderPricing() {
  const host = document.getElementById("pricing-list");
  if (!host || typeof PRICING === "undefined") return;

  host.innerHTML = PRICING.map(function (g) {
    const rows = g.items.map(function (i) {
      return `
        <div class="price-row">
          <span class="price-row__name">${safe(i.name)}</span>
          <span class="price-row__dur">${safe(i.duration)}</span>
          <span class="price-row__dots"></span>
          <span class="price-row__price">${safe(i.price)}</span>
        </div>`;
    }).join("");
    let noteHtml = "";
    if (g.note) {
      const lines = Array.isArray(g.note) ? g.note : [g.note];
      noteHtml = `<p class="price-group__note">${lines.join("<br>")}</p>`;
    }
    return `<div class="price-group"><h3>${safe(g.group)}</h3>${noteHtml}${rows}</div>`;
  }).join("");

  const note = document.getElementById("pricing-note");
  if (note && typeof PRICING_NOTE !== "undefined" && PRICING_NOTE) {
    note.textContent = PRICING_NOTE;
  }
}

/* ---------- Products grid ---------- */
function renderProducts() {
  const host = document.getElementById("products-grid");
  if (!host || typeof PRODUCTS === "undefined") return;

  host.innerHTML = PRODUCTS.map(function (p) {
    return `
      <article class="card">
        <div class="card__img">
          ${p.tag ? `<span class="card__tag">${p.tag}</span>` : ""}
          <img src="${safe(p.image)}" alt="${safe(p.name)}" loading="lazy">
        </div>
        <div class="card__body">
          <h3>${safe(p.name)}</h3>
          <p>${safe(p.description)}</p>
        </div>
      </article>`;
  }).join("");
}

/* ---------- Fill site fields (contact page etc.) ---------- */
function fillSiteFields() {
  if (typeof SITE === "undefined") return;

  setText("field-address", SITE.address);
  setHtml("field-phone", `<a href="tel:${safe(SITE.phone).replace(/\s/g, "")}">${safe(SITE.phone)}</a>`);
  setHtml("field-email", `<a href="mailto:${safe(SITE.email)}">${safe(SITE.email)}</a>`);

  // hours
  const hoursHost = document.getElementById("field-hours");
  if (hoursHost && SITE.hours) {
    hoursHost.innerHTML = SITE.hours.map(function (h) {
      return `<li><span>${safe(h.day)}</span><span>${safe(h.time)}</span></li>`;
    }).join("");
  }

  // map link buttons
  document.querySelectorAll("[data-map-link]").forEach(function (el) {
    if (SITE.mapLink) el.setAttribute("href", SITE.mapLink);
  });

  // embedded map
  const mapHost = document.getElementById("field-map");
  if (mapHost) {
    if (SITE.mapEmbed) {
      mapHost.innerHTML = `<iframe src="${SITE.mapEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map"></iframe>`;
    } else {
      mapHost.style.display = "none";
    }
  }
}

function setText(id, value) { const el = document.getElementById(id); if (el && value) el.textContent = value; }
function setHtml(id, value) { const el = document.getElementById(id); if (el && value) el.innerHTML = value; }
