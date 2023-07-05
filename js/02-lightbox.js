import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ulEl = document.querySelector(".gallery");

//? making markup in ul
const ulMarkup = galleryItems
  .map((e) => {
    return `<li class="gallery__item">
             <a class="gallery__link" href="${e.original}">
                <img class="gallery__image" src="${e.preview}" alt="${e.description}" />
            </a>
          </li>`;
  })
  .join(" ");
ulEl.insertAdjacentHTML("beforeend", ulMarkup);

//? disabling default behavior
ulEl
  .querySelectorAll(".gallery__link")
  .forEach((a) => a.addEventListener("click", (e) => e.preventDefault()));

const gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250
});


