/* SF1683 del 2 – kompendium. Bygger ram (topprad, sidomeny, bläddring), renderar formler
 * och sparar avbockade uppgifter i webbläsaren. Inget byggsteg behövs. */
(function () {
  "use strict";
  var rot = document.body.getAttribute("data-rot") || "";
  var sida = document.body.getAttribute("data-sida") || "";
  var KAP = window.KAPITEL || [];
  var OVR = window.OVRIGA_SIDOR || [];

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (html != null) e.innerHTML = html;
    return e;
  }

  /* ---------- Tema ---------- */
  var sparatTema = null;
  try { sparatTema = localStorage.getItem("sf1683-tema"); } catch (e) {}
  if (sparatTema) document.documentElement.setAttribute("data-tema", sparatTema);

  function arMorkt() {
    var t = document.documentElement.getAttribute("data-tema");
    if (t) return t === "mork";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  /* ---------- Topprad ---------- */
  var topp = el("header", { "class": "topp" });
  var menyknapp = el("button", { "class": "knapp", id: "menyknapp", "aria-label": "Visa meny" }, "☰");
  topp.appendChild(menyknapp);
  topp.appendChild(el("a", { "class": "logga", href: rot + "index.html" }, "SF1683 <span>del 2 · kompendium</span>"));
  topp.appendChild(el("span", { "class": "fyll" }));
  OVR.forEach(function (s) {
    topp.appendChild(el("a", { "class": "snabb" + (s.id === sida ? " aktiv" : ""), href: rot + s.fil }, s.titel));
  });
  var temaknapp = el("button", { "class": "knapp", "aria-label": "Byt mellan ljust och mörkt läge" }, arMorkt() ? "☀" : "☾");
  temaknapp.addEventListener("click", function () {
    var nytt = arMorkt() ? "ljus" : "mork";
    document.documentElement.setAttribute("data-tema", nytt);
    try { localStorage.setItem("sf1683-tema", nytt); } catch (e) {}
    temaknapp.textContent = nytt === "mork" ? "☀" : "☾";
  });
  topp.appendChild(temaknapp);

  /* ---------- Sidomeny ---------- */
  var meny = el("nav", { "class": "sidomeny", "aria-label": "Innehåll" });
  meny.appendChild(el("h4", null, "Kompendiet"));
  OVR.forEach(function (s) {
    meny.appendChild(el("a", { href: rot + s.fil, "class": s.id === sida ? "aktiv" : "" }, "<span class='nr'>·</span><span>" + s.titel + "</span>"));
  });
  KAP.forEach(function (k) {
    if (k.grupp) { meny.appendChild(el("h4", null, k.grupp)); return; }
    if (k.status === "klar" && k.fil) {
      meny.appendChild(el("a", { href: rot + k.fil, "class": k.id === sida ? "aktiv" : "" },
        "<span class='nr'>" + k.nr + "</span><span>" + k.titel + "</span>"));
    } else {
      meny.appendChild(el("div", { "class": "kommande", title: "Skrivs när föreläsningsanteckningarna finns" },
        "<span class='nr'>" + k.nr + "</span><span>" + k.titel + "<small>kommer · " + k.f + "</small></span>"));
    }
  });

  document.body.insertBefore(meny, document.body.firstChild);
  document.body.insertBefore(topp, document.body.firstChild);
  menyknapp.addEventListener("click", function () { document.body.classList.toggle("meny-oppen"); });
  meny.addEventListener("click", function (e) { if (e.target.closest("a")) document.body.classList.remove("meny-oppen"); });
  document.addEventListener("click", function (e) {
    if (document.body.classList.contains("meny-oppen") && !e.target.closest(".sidomeny") && !e.target.closest("#menyknapp")) {
      document.body.classList.remove("meny-oppen");
    }
  });

  /* ---------- Innehållsförteckning + bläddring på kapitelsidor ---------- */
  var inre = document.querySelector("main > .inre");
  var klara = KAP.filter(function (k) { return !k.grupp && k.status === "klar" && k.fil; });
  var idx = klara.map(function (k) { return k.id; }).indexOf(sida);

  if (inre && document.body.hasAttribute("data-toc")) {
    var h2s = inre.querySelectorAll("h2[id]");
    if (h2s.length > 2) {
      var toc = el("nav", { "class": "toc" }, "<strong>På den här sidan</strong>");
      var ol = el("ol");
      Array.prototype.forEach.call(h2s, function (h) {
        var text = h.getAttribute("data-kort") || h.textContent.replace(/^\s*\d+\s*/, "");
        ol.appendChild(el("li", null, "<a href='#" + h.id + "'>" + text + "</a>"));
      });
      toc.appendChild(ol);
      var ankare = inre.querySelector(".meta") || inre.querySelector("h1");
      ankare.parentNode.insertBefore(toc, ankare.nextSibling);
    }
  }

  if (inre && idx >= 0) {
    var bl = el("nav", { "class": "bladdra" });
    var fore = klara[idx - 1], nasta = klara[idx + 1];
    bl.appendChild(fore
      ? el("a", { href: rot + fore.fil }, "<small>← Föregående</small>" + fore.nr + ". " + fore.titel)
      : el("a", { href: rot + "index.html" }, "<small>← Tillbaka</small>Översikt"));
    bl.appendChild(nasta
      ? el("a", { href: rot + nasta.fil, style: "text-align:right" }, "<small>Nästa →</small>" + nasta.nr + ". " + nasta.titel)
      : el("a", { href: rot + "tentastatistik.html", style: "text-align:right" }, "<small>Vidare →</small>Tentastatistik"));
    inre.appendChild(bl);
  }

  /* ---------- Startsidans kapitelkort ---------- */
  var kortplats = document.getElementById("kapitelkort");
  if (kortplats) {
    var viktKlass = { "hög": "het", "medel": "", "låg": "gra" };
    var rutnat = null;
    KAP.forEach(function (k) {
      if (k.grupp) {
        kortplats.appendChild(el("h3", null, k.grupp));
        rutnat = el("div", { "class": "kort-rutnat" });
        kortplats.appendChild(rutnat);
        return;
      }
      var klar = k.status === "klar" && k.fil;
      var kort = el(klar ? "a" : "div", klar ? { "class": "kort", href: rot + k.fil } : { "class": "kort kommande" });
      kort.innerHTML =
        "<div class='knr'>Kapitel " + k.nr + " · " + k.f + "</div>" +
        "<h3>" + k.titel + "</h3><p>" + k.kort + "</p>" +
        "<div class='fot'><span class='chip gra'>" + k.pz + "</span>" +
        "<span class='chip " + (viktKlass[k.vikt] || "") + "'>tentavikt: " + k.vikt + "</span>" +
        (klar ? "" : "<span class='chip gra'>kommer</span>") + "</div>";
      rutnat.appendChild(kort);
    });
  }

  /* ---------- Avbockning av rekommenderade uppgifter ---------- */
  var gjorda = {};
  try { gjorda = JSON.parse(localStorage.getItem("sf1683-gjorda") || "{}"); } catch (e) {}
  Array.prototype.forEach.call(document.querySelectorAll("ul.rek > li[data-uppg]"), function (li) {
    var nyckel = li.getAttribute("data-uppg");
    var box = el("input", { type: "checkbox", "aria-label": "Markera som gjord" });
    box.checked = !!gjorda[nyckel];
    if (box.checked) li.classList.add("klar");
    box.addEventListener("change", function () {
      if (box.checked) gjorda[nyckel] = 1; else delete gjorda[nyckel];
      li.classList.toggle("klar", box.checked);
      try { localStorage.setItem("sf1683-gjorda", JSON.stringify(gjorda)); } catch (e) {}
    });
    li.insertBefore(box, li.firstChild);
  });

  /* ---------- Formler (KaTeX) ---------- */
  window.renderaFormler = function (rotEl) {
    if (!window.renderMathInElement) return;
    window.renderMathInElement(rotEl || document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "$", right: "$", display: false }
      ],
      macros: {
        "\\L": "\\mathcal{L}",
        "\\Li": "\\mathcal{L}^{-1}",
        "\\U": "\\mathcal{U}",
        "\\dd": "\\,\\mathrm{d}",
        "\\R": "\\mathbb{R}",
        "\\C": "\\mathbb{C}",
        "\\Z": "\\mathbb{Z}",
        "\\ip": "\\langle #1,\\, #2\\rangle",
        "\\norm": "\\lVert #1\\rVert",
        "\\F": "\\mathcal{F}"
      },
      throwOnError: false
    });
  };
  window.renderaFormler();

  /* Öppna rätt lösning om man länkar direkt till den (#id på ett exempel) */
  if (location.hash) {
    var mal = document.querySelector(location.hash);
    if (mal && mal.tagName === "DETAILS") mal.open = true;
  }
})();
