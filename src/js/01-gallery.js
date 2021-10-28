// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const photoCardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', photoCardsMarkup);
galleryContainer.addEventListener('click', onPhotoCardsClick);

function createGalleryCardsMarkup(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join('');
}
function onPhotoCardsClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__item')) {
    return;
  }
}

const lightbox = new SimpleLightbox('.gallery .gallery__item', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
