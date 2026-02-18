const editions = [
  {
    edition: 2,
    seed: 15838,
    image: "img/coobeyon-2.webp",
    zora: "https://zora.co/collect/base:0x584eB68F93bEcf6E463E7F259605c82Ef35c21e3/2",
  },
  {
    edition: 1,
    seed: 7919,
    image: "img/coobeyon-1.webp",
    zora: null,
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

    link.innerHTML = `
      <picture>
        <source srcset="${ed.image}" type="image/webp">
        <img src="${ed.image}" alt="coobeyon edition ${ed.edition}" loading="lazy">
      </picture>
      <div class="gallery-meta">
        <span class="gallery-edition">#${ed.edition}</span>
        <span class="gallery-seed">seed ${ed.seed}</span>
      </div>
    `;

    grid.appendChild(link);
  }
}

renderGallery();
