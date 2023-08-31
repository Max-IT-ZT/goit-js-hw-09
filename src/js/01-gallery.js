// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
console.log(galleryItems);

const list = document.querySelector('.gallery');
console.dir(list);
const renderList = arr =>
  arr
    .map(
      item =>
        `<li class="gallery__item"><a class="gallery__link"href="${item.original}"><img class="gallery__image"src="${item.preview}"alt="${item.description}"/></a></li>`
    )
    .join('');
list.insertAdjacentHTML('beforeend', renderList(galleryItems));

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
