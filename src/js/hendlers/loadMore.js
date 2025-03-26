import fetchImages from '../pixabay-api.js';
import loadMoreBtn from '../services/ButtonService';
import { cardsImg } from '../render-functions.js';
import { photoQueryParams, refs, ACTIVE_CLASS } from '../utils/consts';
import scrollPage from './scrollPage.js';

async function handleLoadMore(event) {
  photoQueryParams.page += 1;
  loadMoreBtn.disable();
  refs.loader.classList.add(ACTIVE_CLASS);

  try {
    const { query, page, perPage } = photoQueryParams;
    const images = await fetchImages(query, page, perPage);
    refs.gallery.insertAdjacentHTML('beforeend', cardsImg(images));

    refs.loader.classList.remove(ACTIVE_CLASS);
    loadMoreBtn.enable();
    scrollPage();

    if (photoQueryParams.page < photoQueryParams.maxPage) {
      loadMoreBtn.enable();
    } else {
      loadMoreBtn.disable();
      refs.notFoundText.textContent =
        "We're sorry, but you've reached the end of search.";
    }
  } catch (error) {
    console.log('Error:', error);
    loadMoreBtn.disable();
  }
}

export default handleLoadMore;
