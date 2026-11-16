# SF1683 del 2 – kompendium inför TEN2

Statisk hemsida (ren HTML, CSS och JavaScript, inget byggsteg) med ett kompendium för
SF1683 Differentialekvationer och transformmetoder, del 2. Publiceras med GitHub Pages
direkt från `main`-grenens rot.

## Innehåll

| Fil | Vad |
|---|---|
| `index.html` | Startsida med översikt |
| `tentastatistik.html` | Uppgiftstyper på gamla tentor, frekvenser och prognos |
| `formelsamling.html` | Formelbladet, Laplacetabellen och det som ska kunnas utantill |
| `kapitel/1-…` till `kapitel/8-…` | Kapitlen för F1–F6 |
| `kapitel/mall.html` | Mall för nya kapitel |
| `assets/kapitel.js` | Kapitelregister: styr sidomeny, startsidans kort och bläddring |
| `assets/tentor.js` | Klassificering av alla tentauppgifter: styr statistiksidans tabeller |
| `assets/site.css`, `assets/site.js`, `assets/statistik.js` | Stil, ram och tabellbygge |

## Lägga till ett kapitel

Kapitel 9–13 (resten av Fourierserierna, separation av variabler, Fouriertransformen)
finns redan i `assets/kapitel.js` med `status: "kommande"`.

1. Kopiera `kapitel/mall.html` till exempelvis `kapitel/9-fourierserier-forts.html`.
2. Sätt `<body data-sida="kap9">` och fyll i de sju avsnitten.
3. I `assets/kapitel.js`: ändra kapitlets post till
   `fil: "kapitel/9-fourierserier-forts.html", status: "klar"`.
4. Uppdatera vid behov `assets/tentor.js` (nya tentor eller ändrade typkoder) och
   formelsamlingens avsnitt ”Kommer senare”.

Sidomenyn, korten på startsidan och föregående/nästa-länkarna uppdateras av sig själva.

## Skriva formler

Formler renderas med KaTeX: `$...$` i löptext och `$$...$$` på egen rad. Skriv `\lt`
och `\gt` i stället för `<` och `>` inne i formler. Färdiga makron:
`\L` (Laplacetransform), `\Li` (invers), `\U` (stegfunktion), `\dd` (dx med mellanrum),
`\ip{f}{g}` (inre produkt), `\norm{f}`, `\R`, `\C`, `\Z`, `\F`.

## Förhandsgranska lokalt

```bash
python3 -m http.server 8000
```

Öppna sedan http://localhost:8000.
