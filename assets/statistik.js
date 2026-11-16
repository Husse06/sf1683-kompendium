/* Bygger tabellerna på tentastatistiksidan ur assets/tentor.js. */
(function () {
  "use strict";
  var TY = window.TYPER || [], T = window.TENTOR || [], OV = window.OVNINGSTENTOR || [], KAP = window.KAPITEL || [];
  var SEN = "2023";
  var typ = {};
  TY.forEach(function (t) { if (t.kod) typ[t.kod] = t; });
  var kap = {};
  KAP.forEach(function (k) { if (k.id) kap[k.id] = k; });

  function kapLank(id) {
    var k = kap[id];
    if (!k) return "";
    return (k.status === "klar" && k.fil) ? "<a href='" + k.fil + "'>" + k.nr + ". " + k.titel + "</a>"
                                           : "<span class='liten'>" + k.nr + ". " + k.titel + " (kommer)</span>";
  }
  function kortDatum(d) { return d.slice(2); }

  /* ---------- Frekvenstabell ---------- */
  var tb = document.querySelector("#frekvens tbody");
  var antalSena = T.filter(function (t) { return t.datum >= SEN; }).length;
  TY.forEach(function (ty) {
    var tr = document.createElement("tr");
    if (ty.grupp) {
      tr.className = "grupp";
      tr.innerHTML = "<td colspan='6'>" + ty.grupp + "</td>";
      tb.appendChild(tr);
      return;
    }
    var alla = 0, sena = 0, d1 = 0, d2 = 0, refs = [];
    T.forEach(function (t) {
      var us = t.uppg.filter(function (u) { return !u.ej && u.typ.indexOf(ty.kod) >= 0; });
      if (!us.length) return;
      alla++;
      if (t.datum >= SEN) sena++;
      us.forEach(function (u) { if (u.del === "I") d1++; if (u.del === "II") d2++; });
      refs.push("<span class='tref'" + (t.datum >= SEN ? " style='font-weight:600'" : "") + ">" + kortDatum(t.datum) + ":" +
        us.map(function (u) { return u.nr; }).join("+") + "</span>");
    });
    var bredd = Math.round(70 * sena / antalSena);
    tr.innerHTML =
      "<td>" + (ty.under ? "<span class='liten'>" + ty.namn + "</span>" : "<span class='typ " + ty.omr + "'>" + ty.kod + "</span> " + ty.namn) + "</td>" +
      "<td class='num'>" + alla + "</td>" +
      "<td class='num'><span class='stapel sen' style='width:" + bredd + "px'></span>" + sena + "</td>" +
      "<td class='num'>" + d1 + " / " + d2 + "</td>" +
      "<td class='liten'>" + refs.join(", ") + "</td>" +
      "<td>" + (ty.under ? "" : kapLank(ty.kap)) + "</td>";
    tb.appendChild(tr);
  });

  /* ---------- Poäng per område 2023– ---------- */
  var omrNamn = { L: "Laplacetransformen", F: "Fourierserier (beräkning och konvergensbevis)", I: "Inre produktrum", P: "PDE med separation av variabler", T: "Fouriertransformen" };
  var finns = { L: "Ja, kapitel 1–5", F: "Ja, kapitel 6–8 (kapitel 9 kommer)", I: "Ja, kapitel 6", P: "Nej, kommer (F8–F10)", T: "Nej, kommer (F11–F13)" };
  var p = {}, tot = 0;
  T.filter(function (t) { return t.datum >= SEN; }).forEach(function (t) {
    t.uppg.forEach(function (u) {
      if (u.ej) return;
      var o = [];
      u.typ.forEach(function (c) { var x = typ[c].omr === "I" ? "F" : typ[c].omr; if (o.indexOf(x) < 0) o.push(x); });
      o.forEach(function (x) { p[x] = (p[x] || 0) + 4 / o.length; });
      tot += 4;
    });
  });
  var pb = document.querySelector("#poang tbody");
  ["F", "T", "L", "P"].forEach(function (o) {
    var v = p[o] || 0, andel = Math.round(100 * v / tot);
    var tr = document.createElement("tr");
    tr.innerHTML = "<td>" + omrNamn[o] + "</td><td class='num'>" + v + "</td>" +
      "<td><span class='stapel" + (o === "F" || o === "L" ? " sen" : "") + "' style='width:" + (andel * 3) + "px'></span>" + andel + " %</td><td>" + finns[o] + "</td>";
    pb.appendChild(tr);
  });

  /* ---------- Matris ---------- */
  function rad(t) {
    var tr = document.createElement("tr");
    var celler = t.uppg.map(function (u) {
      var chips = u.ej ? "<span class='typ X'>ingår ej</span>" :
        u.typ.filter(function (c) { return !typ[c].under; }).map(function (c) { return "<span class='typ " + typ[c].omr + "' title='" + typ[c].namn + "'>" + c + "</span>"; }).join("");
      return "<div style='margin:2px 0'><b class='tref'>" + u.nr + (u.del ? " <span class='liten' style='font-weight:400'>(" + u.del + ")</span>" : "") + "</b> " + chips +
        " <span class='liten'" + (u.ej ? " style='opacity:.6'" : "") + ">" + u.text + "</span></div>";
    }).join("");
    tr.innerHTML = "<td class='tref'><b>" + t.datum + "</b></td><td class='liten'>" + t.examinator +
      (t.not ? "<br><span style='font-size:.9em'>" + t.not + "</span>" : "") + "</td><td>" + celler + "</td>";
    return tr;
  }
  var mb = document.querySelector("#matris-tabell tbody");
  T.forEach(function (t) { mb.appendChild(rad(t)); });
  var ob = document.querySelector("#ovn-tabell tbody");
  OV.forEach(function (t) { ob.appendChild(rad(t)); });

  if (window.renderaFormler) window.renderaFormler(document.querySelector("main"));
})();
