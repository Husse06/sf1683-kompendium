/* Klassificering av alla uppgifter på gamla tentor för SF1683 del 2 (TEN2).
 * Tentastatistiksidan räknar allt från den här filen – ändra här så uppdateras tabellerna.
 *
 * ej: true  = uppgiften matchar enligt kurssidan "Gamla tentor" inte dagens kursinnehåll
 *             (eller hör till en annan kurskod) och räknas inte i statistiken.
 * del: "I" = grundläggande del, "II" = avancerad del, "" = tentan saknar uppdelning.
 */
window.TYPER = [
  { grupp: "Laplacetransformen", omr: "L" },
  { kod: "LD", omr: "L", namn: "Beräkna Laplacetransform från definitionen", kap: "kap1" },
  { kod: "LB", omr: "L", namn: "Bevis och teori (räkneregel, existens, exponentiell ordning)", kap: "kap1" },
  { kod: "LO", omr: "L", namn: "Begynnelsevärdesproblem, kontinuerligt högerled", kap: "kap2" },
  { kod: "LI", omr: "L", namn: "Fristående inverstransform / partialbråk", kap: "kap2" },
  { kod: "LH", omr: "L", namn: "Begynnelsevärdesproblem med Heaviside (styckvis högerled)", kap: "kap3" },
  { kod: "LDi", omr: "L", namn: "Begynnelsevärdesproblem med Diracs delta", kap: "kap3" },
  { kod: "LF", omr: "L", namn: "Faltning: integral- eller integro-differentialekvation", kap: "kap4" },
  { kod: "LP", omr: "L", namn: "PDE med Laplacetransformen", kap: "kap5" },

  { grupp: "Inre produktrum och Fourierserier", omr: "F" },
  { kod: "IP", omr: "I", namn: "Inre produkt, ON-bas, bästa approximation (projektion)", kap: "kap6" },
  { kod: "FS", omr: "F", namn: "Beräkna Fourierserie och förklara vad den konvergerar mot", kap: "kap7" },
  { kod: "FJ", omr: "F", namn: "– varav jämn/udda/noll-utvidgning av funktion på [0, π]", kap: "kap7", under: true },
  { kod: "FK", omr: "F", namn: "– varav komplex Fourierserie", kap: "kap7", under: true },
  { kod: "FD", omr: "F", namn: "Bevis av Dirichlets sats / Dirichletkärnan", kap: "kap8" },
  { kod: "IB", omr: "F", namn: "Bevis: ON-system, Bessels olikhet, Riemann–Lebesgues lemma", kap: "kap8" },
  { kod: "FP", omr: "F", namn: "Parseval, seriesummor, egenskaper, ODE via Fourierserie", kap: "kap9" },

  { grupp: "PDE med separation av variabler (kommande kapitel)", omr: "P" },
  { kod: "PV", omr: "P", namn: "Värmeledningsekvationen", kap: "kap10" },
  { kod: "PW", omr: "P", namn: "Vågekvationen", kap: "kap10" },
  { kod: "PL", omr: "P", namn: "Laplace ekvation i rektangel", kap: "kap10" },
  { kod: "PP", omr: "P", namn: "Laplace ekvation i polära koordinater", kap: "kap10" },
  { kod: "PX", omr: "P", namn: "Annan separation av variabler", kap: "kap10" },

  { grupp: "Fouriertransformen (kommande kapitel)", omr: "T" },
  { kod: "TB", omr: "T", namn: "Beräkna transform, inversionssatsen, integral via Plancherel", kap: "kap12" },
  { kod: "TF", omr: "T", namn: "Faltningsekvation", kap: "kap13" },
  { kod: "TD", omr: "T", namn: "ODE eller PDE med Fouriertransformen", kap: "kap13" },
  { kod: "TP", omr: "T", namn: "Bevis (faltningsformeln, Parseval, inversion, skalning)", kap: "kap11" }
];

window.TENTOR = [
  { datum: "2026-04-10", examinator: "Mattias Dahl", uppg: [
    { nr: 1, del: "I", typ: ["FS", "FK"], text: "Komplex Fourierserie till x + sin 3x, konvergens" },
    { nr: 2, del: "I", typ: ["LF", "LDi"], text: "f′ − 3∫f(y)e^{2(t−y)}dy = δ(t−4), f(0)=1" },
    { nr: 3, del: "I", typ: ["FP"], text: "2π-periodiska lösningar till u″+u=f via Fourierserie" },
    { nr: 4, del: "II", typ: ["TD"], text: "Fouriertransform för u_tt+2u_t+u=u_xx" },
    { nr: 5, del: "II", typ: ["LB", "LF"], text: "Bevisa faltningsformeln; skriv lösningen till y″+py′+qy=f som faltning" },
    { nr: 6, del: "II", typ: ["FD"], text: "Hela beviset av Dirichlets sats" }
  ]},
  { datum: "2026-01-09", examinator: "Mattias Dahl", uppg: [
    { nr: 1, del: "I", typ: ["FS", "FJ"], text: "sin²(3x) på [0,π]: jämn och udda utvidgning, konvergens" },
    { nr: 2, del: "I", typ: ["LF", "LH"], text: "y″ − 16∫(t−u)y(u)du = U(t−3)" },
    { nr: 3, del: "I", typ: ["PP"], text: "Laplace ekvation på halv cirkelskiva" },
    { nr: 4, del: "II", typ: ["TB"], text: "Fouriertransform av x·e^{iπx} på [−1,1], inversion i punkter" },
    { nr: 5, del: "II", typ: ["TD", "TB"], text: "Laplace ekvation i halvplan, ∫u² dx med Plancherel" },
    { nr: 6, del: "II", typ: ["FD"], text: "Hela beviset av Dirichlets sats" }
  ]},
  { datum: "2025-04-25", examinator: "Mattias Dahl", uppg: [
    { nr: 1, del: "I", typ: ["FS"], text: "Fourierserie till sin(5|x|) + stegfunktion, konvergens" },
    { nr: 2, del: "I", typ: ["PL"], text: "Laplace ekvation i kvadrat, Neumannvillkor" },
    { nr: 3, del: "I", typ: ["LP"], text: "u_x + 2x·u_t = 2xt med Laplacetransform" },
    { nr: 4, del: "II", typ: ["TF"], text: "Modulation och faltning av gausskurvor" },
    { nr: 5, del: "II", typ: ["TB"], text: "Inversionssatsen, triangelfunktion, (1−cos x)/x²" },
    { nr: 6, del: "II", typ: ["IB"], text: "Bevisa Bessels olikhet och Riemann–Lebesgues lemma" }
  ]},
  { datum: "2025-01-10", examinator: "Mattias Dahl", uppg: [
    { nr: 1, del: "I", typ: ["FS", "FJ"], text: "2+cos 2x på (0,π): jämn, udda och noll-utvidgning, konvergens" },
    { nr: 2, del: "I", typ: ["LH", "LDi"], text: "y″+y = δ(t−2π) + cos t för t≥π (resonans)" },
    { nr: 3, del: "I", typ: ["PP"], text: "Laplace ekvation på cirkelskiva" },
    { nr: 4, del: "II", typ: ["TB"], text: "Fouriertransform av avhuggen sinus" },
    { nr: 5, del: "II", typ: ["TD"], text: "Värmeledning på linjen: energi och värmekärna" },
    { nr: 6, del: "II", typ: ["FD"], text: "S_m som integral med Dirichletkärnan; skissera beviset av Dirichlets sats" }
  ]},
  { datum: "2024-04-02", examinator: "Mattias Dahl", uppg: [
    { nr: 1, del: "I", typ: ["FS"], text: "Fourierserie till x + cos 3x + stegfunktion, konvergens" },
    { nr: 2, del: "I", typ: ["LF"], text: "y″ = ∫(t−u)y(u)du, y(0)=0, y′(0)=4" },
    { nr: 3, del: "I", typ: ["TB"], text: "Fouriertransformer och ∫sin²(2x)/x² dx" },
    { nr: 4, del: "II", typ: ["LB"], text: "Bevisa formeln för L[f″]; funktion utan Laplacetransform" },
    { nr: 5, del: "II", typ: ["TD"], text: "Värmeledning på linjen med Fouriertransform" },
    { nr: 6, del: "II", typ: ["IB"], text: "ON-system e^{inx}, Bessels olikhet, Riemann–Lebesgue" }
  ]},
  { datum: "2024-01-12", examinator: "Mattias Dahl", uppg: [
    { nr: 1, del: "I", typ: ["FS", "FJ"], text: "sin 3x på [0,π]: jämn, udda och noll-utvidgning, konvergens" },
    { nr: 2, del: "I", typ: ["LH", "LDi"], text: "y″+9y = δ(t−π) + sin 3t för t≥2π (resonans)" },
    { nr: 3, del: "I", typ: ["PV"], text: "Värmeledning, isolerade ändar, gränsvärde t→∞" },
    { nr: 4, del: "II", typ: ["TD"], text: "2y″+xy′+y=0 med Fouriertransform" },
    { nr: 5, del: "II", typ: ["TB"], text: "Inversionssatsen, e^{−|x|} och 1/(1+x²)" },
    { nr: 6, del: "II", typ: ["FD"], text: "S_m som integral med Dirichletkärnan; skissera beviset av Dirichlets sats" }
  ]},
  { datum: "2023-04-12", examinator: "Mattias Dahl", uppg: [
    { nr: 1, del: "I", typ: ["FS"], text: "Fourierserier till x² och ±x², konvergens" },
    { nr: 2, del: "I", typ: ["LH", "LDi"], text: "y″+4y = δ(t−2π) + cos 2t för t≥π (resonans)" },
    { nr: 3, del: "I", typ: ["TD"], text: "u_x+u_y=f(x) i övre halvplanet med Fouriertransform" },
    { nr: 4, del: "II", typ: ["PP"], text: "Laplace ekvation på cirkelskiva, randvärde |θ|" },
    { nr: 5, del: "II", typ: ["TB"], text: "e^{−c|x|} och integral med Plancherel" },
    { nr: 6, del: "II", typ: ["IB"], text: "ON-system e^{inx}, Bessels olikhet, Riemann–Lebesgue" }
  ]},
  { datum: "2023-01-13", examinator: "Mattias Dahl", uppg: [
    { nr: 1, del: "I", typ: ["LH"], text: "y″+y = e^{−3t} för t≥2, y(0)=1" },
    { nr: 2, del: "I", typ: ["FS"], text: "Fourierserier till styckvis x² och sin²x, konvergens" },
    { nr: 3, del: "I", typ: ["TF"], text: "Faltningsekvation med e^{−|y+1|}" },
    { nr: 4, del: "II", typ: ["PL"], text: "Laplace ekvation i kvadrat" },
    { nr: 5, del: "II", typ: ["TB"], text: "Inversionssatsen, triangelfunktion, (1−cos x)/x²" },
    { nr: 6, del: "II", typ: ["FD"], text: "Formulera Riemann–Lebesgue; S_m som integral med Dirichletkärnan" }
  ]},
  { datum: "2022-04-20", examinator: "Mattias Dahl", not: "Uppgift 6 matchar inte dagens kurs.", uppg: [
    { nr: 1, del: "I", typ: ["LD"], text: "L[t+1] och L[e^{at}] från definitionen" },
    { nr: 2, del: "I", typ: ["FS", "FJ"], text: "sin x på [0,π]: jämn, udda och noll-utvidgning, konvergens" },
    { nr: 3, del: "I", typ: ["PW"], text: "Vågekvationen" },
    { nr: 4, del: "I", typ: ["LF", "LDi"], text: "y′+6y+9∫y = δ(t−2)" },
    { nr: 5, del: "II", typ: ["TP", "TB"], text: "Bevisa Parseval för Fouriertransformen; ∫sin²ω/ω²" },
    { nr: 6, del: "II", typ: [], ej: true, text: "Residykalkyl" }
  ]},
  { datum: "2022-01-14", examinator: "Mattias Dahl", not: "Uppgift 5c och 6 matchar inte dagens kurs.", uppg: [
    { nr: 1, del: "I", typ: ["LD"], text: "L[cos at] och L[sin at] från definitionen" },
    { nr: 2, del: "I", typ: ["TF"], text: "Faltningsekvation med gausskurva" },
    { nr: 3, del: "I", typ: ["PV"], text: "Värmeledning, isolerade ändar, gränsvärde t→∞" },
    { nr: 4, del: "I", typ: ["LH", "LDi"], text: "y″+2y′+y = δ(t−1) + H(t−2)e^{−t}" },
    { nr: 5, del: "II", typ: ["TP"], text: "Bevisa faltningsformeln för Fouriertransformen (5c ingår ej)" },
    { nr: 6, del: "II", typ: [], ej: true, text: "Komplex inversionsformel" }
  ]},
  { datum: "2021-01-13", examinator: "John Andersson", not: "Uppgift 4 och 6bc matchar inte dagens kurs.", uppg: [
    { nr: 1, del: "I", typ: ["LD", "LO"], text: "L[3t²] från definitionen; y″+4y=3t²" },
    { nr: 2, del: "I", typ: ["TF"], text: "Faltningsekvation med Fouriertransform" },
    { nr: 3, del: "I", typ: ["PW"], text: "Vågekvationen på (π, 2π)" },
    { nr: 4, del: "I", typ: [], ej: true, text: "Komplex kurvintegral" },
    { nr: 5, del: "II", typ: ["LP"], text: "Telegrafekvationen med Laplacetransform" },
    { nr: 6, del: "II", typ: ["TP"], text: "Bevisa faltningsformeln för Fouriertransformen (6bc ingår ej)" }
  ]},
  { datum: "2020-04-15", examinator: "John Andersson", not: "Distanstenta med tolv kortare frågor, finns bara som lösningsförslag. Uppgift 6, 7, 8, 11, 12 och SF1629-varianterna matchar inte dagens kurs.", uppg: [
    { nr: 1, del: "", typ: ["FS"], text: "Fourierkoefficienten b₂ för e^{2x} (1 p)" },
    { nr: 2, del: "", typ: ["IP"], text: "Beräkna en inre produkt i L²[−1,1] (1 p)" },
    { nr: 3, del: "", typ: ["LI"], text: "Inverstransform med partialbråk (1 p)" },
    { nr: 4, del: "", typ: ["TF"], text: "Fouriertransform av en faltning (1 p)" },
    { nr: 5, del: "", typ: ["LB"], text: "Vilka räkneregler gäller? (flerval)" },
    { nr: 6, del: "", typ: [], ej: true, text: "Positiva integrationskärnor" },
    { nr: 7, del: "", typ: [], ej: true, text: "Konvergensvillkor (flerval)" },
    { nr: 8, del: "", typ: [], ej: true, text: "Sturm–Liouville" },
    { nr: 9, del: "", typ: ["PV"], text: "Värmeledning, u(x,0)=x cos x" },
    { nr: 10, del: "", typ: ["TF"], text: "Faltningsekvation" },
    { nr: 11, del: "", typ: [], ej: true, text: "Fouriertransform i distributionsmening" },
    { nr: 12, del: "", typ: [], ej: true, text: "Cesàrosummor" }
  ]},
  { datum: "2020-01-13", examinator: "John Andersson", not: "Uppgift 1, 5 och 6 matchar inte dagens kurs.", uppg: [
    { nr: 1, del: "I", typ: [], ej: true, text: "Viktad inre produkt, bästa approximation" },
    { nr: 2, del: "I", typ: ["TB"], text: "Triangelfunktion och ∫(sin x/x)⁴" },
    { nr: 3, del: "I", typ: ["LF"], text: "f + 2∫f(τ)cos(2t−2τ)dτ = 1" },
    { nr: 4, del: "I", typ: ["PV"], text: "Värmeledning med källterm" },
    { nr: 5, del: "II", typ: [], ej: true, text: "Distributioner" },
    { nr: 6, del: "II", typ: [], ej: true, text: "Bandbegränsade funktioner" }
  ]},
  { datum: "2019-04-16", examinator: "ej angiven", not: "Uppgift 3 och 5 matchar inte dagens kurs.", uppg: [
    { nr: 1, del: "I", typ: ["PV"], text: "Värmeledning, u(x,0)=x" },
    { nr: 2, del: "I", typ: ["LH"], text: "u″+2u′+2u = H(x−π)" },
    { nr: 3, del: "I", typ: [], ej: true, text: "Distributionsderivata" },
    { nr: 4, del: "I", typ: ["TD"], text: "u″−4u = δ₀−δ₂ med Fouriertransform" },
    { nr: 5, del: "II", typ: [], ej: true, text: "Egenvärdesproblem" },
    { nr: 6, del: "II", typ: ["TP"], text: "Bevisa inversionsformeln" }
  ]},
  { datum: "2019-01-11", examinator: "ej angiven", not: "Uppgift 5 och 6 matchar inte dagens kurs.", uppg: [
    { nr: 1, del: "I", typ: ["PV"], text: "Värmeledning, blandade randvillkor" },
    { nr: 2, del: "I", typ: ["IP"], text: "Bästa approximation av cos x i span{1, x²}" },
    { nr: 3, del: "I", typ: ["TF"], text: "Faltningsekvation med 1/cosh" },
    { nr: 4, del: "I", typ: ["LD", "LO"], text: "L[cos ax] från definitionen; y″+4y=1" },
    { nr: 5, del: "II", typ: [], ej: true, text: "Fejérkärnan" },
    { nr: 6, del: "II", typ: [], ej: true, text: "Faltningsekvation i Schwartzklassen" }
  ]},
  { datum: "2018-04-04", examinator: "Maria Saprykina", not: "Uppgift 3, 4 och 6c matchar inte dagens kurs.", uppg: [
    { nr: 1, del: "", typ: ["IP"], text: "ON-bas för span{1, x²} och bästa approximation av x³" },
    { nr: 2, del: "", typ: ["LF"], text: "y = 2eˣ + ∫e^{x−t}y(t)dt" },
    { nr: 3, del: "", typ: [], ej: true, text: "Sturm–Liouville" },
    { nr: 4, del: "", typ: [], ej: true, text: "Distributionsderivata" },
    { nr: 5, del: "", typ: ["TB"], text: "Fouriertransform av avhuggen cosinus, integral" },
    { nr: 6, del: "", typ: ["FP"], text: "cₙ(f′), differentialekvation via Fourierserie (6c ingår ej)" }
  ]},
  { datum: "2018-01-08", examinator: "Maria Saprykina", not: "Uppgift 6 matchar inte dagens kurs.", uppg: [
    { nr: 1, del: "", typ: ["PX"], text: "u_x = u_y + u med separation av variabler" },
    { nr: 2, del: "", typ: ["LB", "LH"], text: "Visa t-translationsregeln; y″+9y = sin t på [0,2π)" },
    { nr: 3, del: "", typ: ["FS", "FP"], text: "Sinusserie: värden i punkter (Dirichlets sats); visa c₂ₖ₊₁=0" },
    { nr: 4, del: "", typ: ["TP", "TF"], text: "Visa skalningsregeln; faltningsekvation" },
    { nr: 5, del: "", typ: ["FP"], text: "Fullständig ON-mängd, Parsevals formel" },
    { nr: 6, del: "", typ: [], ej: true, text: "Distributioner" }
  ]}
];

/* Övningstentor HT22 – redovisas separat och räknas inte in i frekvenserna. */
window.OVNINGSTENTOR = [
  { datum: "Övningstentamen 1", examinator: "HT22", uppg: [
    { nr: 1, del: "I", typ: ["LDi"], text: "y″+2y′+y = δ(t−1), y(0)=1" },
    { nr: 2, del: "I", typ: ["TD"], text: "y″−4y = −6e^{−|x|} med Fouriertransform" },
    { nr: 3, del: "I", typ: ["PV"], text: "Värmeledning, isolerade ändar, u(x,0)=x" },
    { nr: 4, del: "II", typ: ["FS", "FP"], text: "Fourierserie till x², summorna Σ1/n² och Σ(−1)ⁿ⁺¹/n²" },
    { nr: 5, del: "II", typ: ["LB"], text: "Lösningen är av exponentiell typ om högerledet är det" },
    { nr: 6, del: "II", typ: ["TP", "TF"], text: "Bevisa faltningssatsen; faltningsekvation med gausskurvor" }
  ]},
  { datum: "Övningstentamen 2", examinator: "HT22", uppg: [
    { nr: 1, del: "I", typ: ["TB"], text: "Fouriertransform av udda exponentialfunktion" },
    { nr: 2, del: "I", typ: ["FS", "FJ"], text: "cos x på [0,π]: jämn, udda och noll-utvidgning, konvergens" },
    { nr: 3, del: "I", typ: ["LF"], text: "∫e^{−y}cos y·f(t−y)dy = t²e^{−t}" },
    { nr: 4, del: "II", typ: ["LB"], text: "Existens av Laplacetransformen; bevisa formeln för L[f′]" },
    { nr: 5, del: "II", typ: ["PP"], text: "Laplace ekvation på cirkelskiva, randvärde |x|" },
    { nr: 6, del: "II", typ: ["TB"], text: "Plancherel och ∫((sin ω − ω cos ω)/ω³)² dω" }
  ]}
];
