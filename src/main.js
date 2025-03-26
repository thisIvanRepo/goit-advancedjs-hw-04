import { refs } from './js/utils/consts';
import handleSearch from './js/hendlers/form';
import loadMoreBtn from './js/services/ButtonService';
import handleLoadMore from './js/hendlers/loadMore';
import SimpleLightbox from 'simplelightbox';

let lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

refs.searchForm.addEventListener('submit', async event => {
  await handleSearch(event);
  lightbox.refresh();
});

loadMoreBtn.button.addEventListener('click', async () => {
  await handleLoadMore();
  lightbox.refresh();
});
