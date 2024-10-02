import { images } from '../data/img-gallery';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// create image box
const imgArray = images.map(img => teplate(img)).join('');

// add image array to HTML
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeEnd', imgArray);

function teplate(img) {
  return `
    <li class="gallery-item">
        <a class="gallery-link" href="${img.original}">
            <img
            class="gallery-image"
            src="${img.preview}"
            data-source="${img.original}"
            alt="${img.description}"
            />
        </a>
    </li>`;
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
