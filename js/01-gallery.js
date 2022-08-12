import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const createListItemsGalerry = galleryItems.map(makeItemGallery).join("");

galleryRef.insertAdjacentHTML("beforeend", createListItemsGalerry);

galleryRef.addEventListener("click", onGalleryContainerClick);

function makeItemGallery({ preview, original, description }) {
  return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>
    `;
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const imageEl = evt.target;
  imageEl.src = evt.target.dataset.source;

  const createModalItemGallery = basicLightbox.create(`${imageEl}`);

  createModalItemGallery.show();
}
