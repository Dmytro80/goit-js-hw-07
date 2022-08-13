import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const createListItemsGallery = galleryItems.map(makeItemGallery).join("");

galleryRef.insertAdjacentHTML("beforeend", createListItemsGallery);

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
  const modalImg = evt.target.dataset.source;

  const createModalItemGallery = basicLightbox.create(
    `<img src="${modalImg}">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscPressKey);
      },

      onClose: () => {
        window.removeEventListener("keydown", onEscPressKey);
      },
    }
  );

  createModalItemGallery.show();

  function onEscPressKey(evt) {
    if (evt.code === "Escape") {
      createModalItemGallery.close();
    }
  }
}
