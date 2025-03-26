import { ACTIVE_CLASS, photoQueryParams, refs } from "../utils/consts.js";
import loadMoreBtn from "../services/ButtonService.js";
import { cardsImg } from "../template/render-functions.js";
import fetchImages from "../api/pixabay-api.js";

async function handleSearch(event) {
  event.preventDefault();
  
  refs.notFoundText.textContent = '';
  refs.gallery.innerHTML = '';

  loadMoreBtn.disable();
  photoQueryParams.page = 1;
  photoQueryParams.maxPage = 1;

  const form = event.currentTarget;
  const userQuery = form.elements.user_query.value.trim();

  refs.loader.classList.add(ACTIVE_CLASS);

  try {
    const images = await fetchImages(userQuery);
    refs.loader.classList.remove(ACTIVE_CLASS);

    if (!images.hits || images.hits.length === 0) {
      refs.notFoundText.innerHTML = `Sorry, there are no images matching your search <span class ="impotent">${userQuery}</span>. Please try again!`;

      return;
    }

    photoQueryParams.query = userQuery;
    photoQueryParams.maxPage = Math.ceil(images.totalHits / photoQueryParams.perPage);

    refs.gallery.innerHTML = cardsImg(images);

    if (photoQueryParams.maxPage > 1) {
      loadMoreBtn.enable();
    }

  } catch (error) {
    refs.loader.classList.remove(ACTIVE_CLASS);
    console.log('Error:', error);
  } finally {
    form.reset();
  }
}

export default handleSearch;
