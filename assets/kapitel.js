/* Kapitelregister för hela sajten.
 *
 * LÄGG TILL ETT NYTT KAPITEL:
 *   1. Kopiera kapitel/mall.html till t.ex. kapitel/9-fourierserier-forts.html och fyll i innehållet.
 *   2. Ändra motsvarande post nedan: sätt fil: "kapitel/9-fourierserier-forts.html" och status: "klar".
 *   Sidomenyn, startsidans kort och föregående/nästa-länkarna uppdateras av sig själva.
 *
 * Fält:
 *   id      – unikt id, samma som <body data-sida="..."> i kapitelfilen
 *   nr      – kapitelnummer som visas
 *   titel   – rubrik
 *   kort    – en rad om innehållet (visas på startsidan)
 *   pz      – avsnitt i Pinkus–Zafrany
 *   f       – föreläsning(ar)
 *   fil     – sökväg från sajtens rot (null om kapitlet inte är skrivet än)
 *   status  – "klar" eller "kommande"
 *   vikt    – hur tungt momentet väger på tentan enligt tentastatistiken ("hög", "medel", "låg")
 */
window.KAPITEL = [
  { grupp: "Laplacetransformen" },
  { id: "kap1", nr: 1, titel: "Definition och räkneregler", kort: "Definitionen, existens (Prop. 4.1), räknereglerna (4.1)–(4.5) och Sats 4.2 om derivatans transform.", pz: "PZ 4.0–4.2", f: "F1", fil: "kapitel/1-laplace-definition.html", status: "klar", vikt: "medel" },
  { id: "kap2", nr: 2, titel: "ODE med konstanta koefficienter", kort: "Transformera, lös ut Y(s), partialbråksuppdela, invertera. De tre fallen för karakteristiska polynomet.", pz: "PZ 4.3", f: "F2", fil: "kapitel/2-laplace-ode.html", status: "klar", vikt: "hög" },
  { id: "kap3", nr: 3, titel: "Heaviside och Dirac", kort: "Stegfunktionen, t-translation (Sats 4.5), styckvisa högerled och impulser.", pz: "PZ 4.4", f: "F2–F3", fil: "kapitel/3-heaviside-dirac.html", status: "klar", vikt: "hög" },
  { id: "kap4", nr: 4, titel: "Faltning och integralekvationer", kort: "Faltningssatsen (Sats 4.6), integral- och integro-differentialekvationer.", pz: "PZ 4.5", f: "F3", fil: "kapitel/4-faltning.html", status: "klar", vikt: "hög" },
  { id: "kap5", nr: 5, titel: "Laplacetransform för PDE", kort: "Första ordningens PDE: transformera i t, lös en ODE i x, bestäm c(s), invertera.", pz: "Extramaterial (Biggs)", f: "F4", fil: "kapitel/5-laplace-pde.html", status: "klar", vikt: "medel" },

  { grupp: "Fourierserier" },
  { id: "kap6", nr: 6, titel: "Inre produktrum", kort: "Inre produkt, norm, ortonormala mängder och projektion – verktygen bakom Fourierserier.", pz: "PZ 1.1–1.4", f: "F4", fil: "kapitel/6-inre-produktrum.html", status: "klar", vikt: "låg" },
  { id: "kap7", nr: 7, titel: "Fourierserier: beräkning", kort: "Koefficienterna, jämna och udda funktioner (Sats 2.4), komplex form, vad serien konvergerar mot.", pz: "PZ 2.0–2.3", f: "F5", fil: "kapitel/7-fourierserier.html", status: "klar", vikt: "hög" },
  { id: "kap8", nr: 8, titel: "Dirichlets sats", kort: "Bessels olikhet, Riemann–Lebesgues lemma, Dirichletkärnan och hela beviset av Sats 2.6.", pz: "PZ 2.4", f: "F6", fil: "kapitel/8-dirichlets-sats.html", status: "klar", vikt: "hög" },
  { id: "kap9", nr: 9, titel: "Fourierserier: fortsättning", kort: "Resten av teorin för Fourierserier enligt föreläsningsplanen.", pz: "PZ (2.7) 2.8–2.9 (2.10)", f: "F7 (17/11)", fil: null, status: "kommande", vikt: "medel" },

  { grupp: "Partiella differentialekvationer" },
  { id: "kap10", nr: 10, titel: "Separation av variabler", kort: "Värmeledning, vågekvationen och Laplace ekvation (rektangel och polära koordinater).", pz: "PZ 2.11", f: "F8–F10 (19–25/11)", fil: null, status: "kommande", vikt: "hög" },

  { grupp: "Fouriertransformen" },
  { id: "kap11", nr: 11, titel: "Definition och egenskaper", kort: "Fouriertransformen, räkneregler och standardtransformer.", pz: "PZ 3.0–3.3", f: "F11 (30/11)", fil: null, status: "kommande", vikt: "hög" },
  { id: "kap12", nr: 12, titel: "Inverstransform och Plancherel", kort: "Inversionssatsen och Plancherels formel, integraler som räknas med dem.", pz: "PZ 3.4", f: "F12 (2/12)", fil: null, status: "kommande", vikt: "hög" },
  { id: "kap13", nr: 13, titel: "Faltning och PDE", kort: "Faltningsekvationer och PDE på hela linjen med Fouriertransformen.", pz: "PZ 3.5, 3.7", f: "F13 (7/12)", fil: null, status: "kommande", vikt: "hög" }
];

/* Sidor som inte är kapitel */
window.OVRIGA_SIDOR = [
  { id: "start", titel: "Översikt", fil: "index.html" },
  { id: "statistik", titel: "Tentastatistik", fil: "tentastatistik.html" },
  { id: "formler", titel: "Formelsamling", fil: "formelsamling.html" }
];
