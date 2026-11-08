
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader,
  hideLoader, } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const form = document.querySelector('.form');
const input = form.elements.namedItem("search-text");


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value.trim();

    if (query === "") {
        return;
    }
    
    clearGallery();
    showLoader();


    getImagesByQuery(query)
    .then(data => {
    const images = data.hits;

    if (images.length === 0) {
      iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
      });
        return;  
    }
      
    createGallery(images);
  })
        
  .catch(() => {
    iziToast.error({
      message: "Could not load images. Please try again.",
    });
  }).finally(hideLoader);
});