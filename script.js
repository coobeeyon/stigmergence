const editions = [
  {
    edition: 15,
    seed: 118785,
    image: "img/stigmergence-15.webp",
    zora: "https://zora.co/collect/base:0x584eB68F93bEcf6E463E7F259605c82Ef35c21e3/11",
    params: {
      agents: "500,000",
      populations: "1",
      iterations: "600",
      resolution: "2048 × 2048",
      food: "rings",
    },
  },
  {
    edition: 14,
    seed: 110866,
    image: "img/stigmergence-14.webp",
    zora: "https://zora.co/collect/base:0x584eB68F93bEcf6E463E7F259605c82Ef35c21e3/10",
    params: {
      agents: "300,000",
      populations: "1",
      iterations: "800",
      resolution: "2048 × 2048",
      food: "grid",
    },
  },
  {
    edition: 13,
    seed: 102947,
    image: "img/stigmergence-13.webp",
    zora: "https://zora.co/collect/base:0x584eB68F93bEcf6E463E7F259605c82Ef35c21e3/9",
    params: {
      agents: "350,000",
      populations: "3",
      iterations: "550",
      resolution: "2048 × 2048",
      food: "rings",
    },
  },
  {
    edition: 12,
    seed: 95028,
    image: "img/stigmergence-12.webp",
    zora: "https://zora.co/collect/base:0x584eB68F93bEcf6E463E7F259605c82Ef35c21e3/8",
    params: {
      agents: "400,000",
      populations: "2",
      iterations: "600",
      resolution: "2048 × 2048",
      food: "clusters",
    },
  },
  {
    edition: 11,
    seed: 87109,
    image: "img/stigmergence-11.webp",
    zora: "https://zora.co/collect/base:0x584eB68F93bEcf6E463E7F259605c82Ef35c21e3/7",
    params: {
      agents: "400,000",
      populations: "1",
      iterations: "700",
      resolution: "2048 × 2048",
      food: "gradient",
    },
  },
  {
    edition: 10,
    seed: 79190,
    image: "img/stigmergence-10.webp",
    zora: "https://zora.co/collect/base:0x584eB68F93bEcf6E463E7F259605c82Ef35c21e3/6",
    params: {
      agents: "500,000",
      populations: "1",
      iterations: "600",
      resolution: "2048 × 2048",
      food: "rings",
    },
  },
  {
    edition: 9,
    seed: 71271,
    image: "img/stigmergence-9.webp",
    zora: "https://zora.co/collect/base:0x584eB68F93bEcf6E463E7F259605c82Ef35c21e3/5",
    params: {
      agents: "300,000",
      populations: "1",
      iterations: "800",
      resolution: "2048 × 2048",
      food: "grid",
    },
  },
  {
    edition: 8,
    seed: 63352,
    image: "img/stigmergence-8.webp",
    zora: "https://zora.co/collect/base:0x584eB68F93bEcf6E463E7F259605c82Ef35c21e3/4",
    params: {
      agents: "350,000",
      populations: "3",
      iterations: "550",
      resolution: "2048 × 2048",
      food: "rings",
    },
  },
  {
    edition: 7,
    seed: 55433,
    image: "img/stigmergence-7.webp",
    zora: "https://zora.co/collect/base:0x584eB68F93bEcf6E463E7F259605c82Ef35c21e3/3",
    params: {
      agents: "400,000",
      populations: "2",
      iterations: "600",
      resolution: "2048 × 2048",
      food: "clusters",
    },
  },
  {
    edition: 6,
    seed: 47514,
    image: "img/stigmergence-6.webp",
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
    edition: 5,
    seed: 39595,
    image: "img/stigmergence-5.webp",
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
    edition: 4,
    seed: 31676,
    image: "img/stigmergence-4.webp",
    zora: "https://zora.co/collect/base:0x584eB68F93bEcf6E463E7F259605c82Ef35c21e3/3",
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
    edition: 2,
    seed: 15838,
    image: "img/stigmergence-2.webp",
    zora: "https://zora.co/collect/base:0x584eB68F93bEcf6E463E7F259605c82Ef35c21e3/1",
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
