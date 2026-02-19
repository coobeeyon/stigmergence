const editions = [
  {
    edition: 5,
    seed: 39595,
    image: "img/stigmergence-5.webp",
    zora: "https://zora.co/collect/base:0x584eB68F93bEcf6E463E7F259605c82Ef35c21e3/5",
    params: {
      agents: "350,000",
      populations: "1",
      iterations: "500",
      resolution: "2048 × 2048",
      food: "rings",
    },
  },
  {
    edition: 4,
    seed: 31676,
    image: "img/stigmergence-4.webp",
    zora: "https://zora.co/collect/base:0x584eB68F93bEcf6E463E7F259605c82Ef35c21e3/4",
    params: {
      agents: "350,000",
      populations: "1",
      iterations: "500",
      resolution: "2048 × 2048",
      food: "rings",
    },
  },
  {
    edition: 3,
    seed: 23757,
    image: "img/stigmergence-3.webp",
    zora: "https://zora.co/collect/base:0x584eB68F93bEcf6E463E7F259605c82Ef35c21e3/3",
    params: {
      agents: "300,000",
      populations: "3",
      iterations: "300",
      resolution: "2048 × 2048",
      food: "mixed",
    },
  },
  {
    edition: 2,
    seed: 15838,
    image: "img/stigmergence-2.webp",
    zora: "https://zora.co/collect/base:0x584eB68F93bEcf6E463E7F259605c82Ef35c21e3/2",
    params: {
      agents: "300,000",
      populations: "3",
      iterations: "300",
      resolution: "2048 × 2048",
      food: "mixed",
    },
  },
  {
    edition: 1,
    seed: 7919,
    image: "img/stigmergence-1.webp",
    zora: null,
    params: {
      agents: "300,000",
      populations: "3",
      iterations: "300",
      resolution: "2048 × 2048",
      food: "mixed",
    },
  },
];

function renderGallery() {
  const grid = document.getElementById("gallery");
  if (!grid) return;

  for (const ed of editions) {
    const link = document.createElement(ed.zora ? "a" : "div");
    link.className = "gallery-item";
    if (ed.zora) {
      link.href = ed.zora;
      link.target = "_blank";
      link.rel = "noopener";
    }

    const paramRows = Object.entries(ed.params)
      .map(([k, v]) => `<div class="param"><span class="param-key">${k}</span><span class="param-val">${v}</span></div>`)
      .join("");

    link.innerHTML = `
      <picture>
        <source srcset="${ed.image}" type="image/webp">
        <img src="${ed.image}" alt="stigmergence edition ${ed.edition}" loading="lazy">
      </picture>
      <div class="gallery-meta">
        <span class="gallery-edition">#${ed.edition}</span>
        <span class="gallery-seed">seed ${ed.seed}</span>
      </div>
      <div class="gallery-params">${paramRows}</div>
    `;

    grid.appendChild(link);
  }
}

renderGallery();
