import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ulEl = document.querySelector(".gallery");

//? making murkup fot ul.gallery
const photoEl = galleryItems
  .map((e) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${e.original}">
    <img
      class="gallery__image"
      src="${e.preview}"
      data-source="${e.original}"
      alt="${e.description}"
    />
  </a>
</li>`;
  })
  .join(" ");
ulEl.innerHTML = photoEl;

//? getting big url after img click
function onImgClick(event) {
  const modal = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}"></img>
    `,
    {
      onShow: () => {
        document.addEventListener("keyup", evBinded);
      },
      onClose: () => {
        document.removeEventListener("keyup", evBinded);
      },
    }
  );
  const evBinded = ev.bind(modal);

  if (event.target.tagName === "IMG") {
    modal.show();
  }
}
function ev(e) {
  if (e.code === "Escape") {
    this.close();
  }
}
ulEl.addEventListener("click", onImgClick);

//? removing default changes on link
const allLinkBigImg = document.querySelectorAll(".gallery__link");
allLinkBigImg.forEach((a) =>
  a.addEventListener("click", (e) => e.preventDefault())
);
