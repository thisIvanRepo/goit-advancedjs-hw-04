import { refs } from '../utils/consts';

function scrollPage() {
  const elementGallery = refs.gallery.querySelector('.gallery-item');

  if (elementGallery) {
    const { height } = elementGallery.getBoundingClientRect();

    scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  }
}

export default scrollPage;
