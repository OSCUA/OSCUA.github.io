const languageIcons = {
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  rust: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
};

document.querySelector("#total-apps span").textContent = `Apps: ${apps.length}`;

const tileColors = [
  "#FFEB3B", // Yellow
  "#FFCDD2", // Rose
  "#C8E6C9", // Mint
  "#BBDEFB", // Sky
  "#D1C4E9", // Lavender
  "#FFE0B2", // Apricot
  "#B2DFDB", // Teal
  "#F8BBD0", // Pink
  "#DCEDC8", // Lime
  "#E6EE9C"  // Soft Green
];

const grid = document.getElementById("app-grid");

apps.forEach(app => {
  const tile = document.createElement("div");
  tile.className = "tile";
  tile.onclick = () => window.open(app.url, "_blank");

  // Random background color
  const randomColor = tileColors[Math.floor(Math.random() * tileColors.length)];
  tile.style.backgroundColor = randomColor;

  const icon = document.createElement("img");
  icon.className = "language-icon";
  icon.src = languageIcons[app.language] || "";
  icon.alt = app.language;

  const title = document.createElement("h2");
  title.textContent = app.name;

  const desc = document.createElement("p");
  desc.textContent = app.description;

  tile.appendChild(icon);
  tile.appendChild(title);
  tile.appendChild(desc);
  grid.appendChild(tile);
});

function updateTopLanguagesFromTiles() {
  const icons = document.querySelectorAll(".language-icon");
  const counts = {};

  icons.forEach(icon => {
    const lang = icon.alt;
    counts[lang] = (counts[lang] || 0) + 1;
  });

  const topLanguages = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const container = document.getElementById("top-languages");
  container.innerHTML = ""; // Clear previous content

  topLanguages.forEach(([lang, count]) => {
    const badge = document.createElement("div");
    badge.className = "language-badge";

    const icon = document.createElement("img");
    icon.src = languageIcons[lang] || "";
    icon.alt = lang;

    const label = document.createElement("span");
    label.textContent = `${lang}: ${count}`;

    badge.appendChild(icon);
    badge.appendChild(label);
    container.appendChild(badge);
  });
}

updateTopLanguagesFromTiles(); // update
