import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const lightbox = new SimpleLightbox(".gallery a");


export function createGallery(images) {
  const markup = images.map(image => {
    const img = document.createElement("img");
    img.src = image.webformatURL;
    img.alt = image.tags;
      
    const link = document.createElement("a");
    link.href = image.largeImageURL;
    link.append(img);

    return `
      <li>
        ${link.outerHTML}
        <p><strong>Likes</strong>${image.likes}</p>
        <p><strong>Views</strong>${image.views}</p>
        <p><strong>Comments</strong>${image.comments}</p>
        <p><strong>Downloads</strong>${image.downloads}</p>
      </li>
    `;
  }).join("");

    gallery.insertAdjacentHTML("beforeend", markup);
    
    lightbox.refresh();
}

export function clearGallery() {
  gallery.replaceChildren();
}

const loader = document.querySelector(".loader");

export function showLoader() {
  loader.classList.add("is-visible");
}

export function hideLoader() {
  loader.classList.remove("is-visible");
}