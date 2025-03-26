const refs = {
  searchForm: document.querySelector('.js-form'),
  gallery: document.querySelector('.js-gallery'),
  notFoundText: document.querySelector('.js-not-found-text'),
  loader: document.querySelector('.js-loader'),
  loadMoreBtn: document.querySelector('.js-load-more'),
};

const ACTIVE_CLASS = 'active';

const photoQueryParams = {
  query: '',
  page: 1,
  perPage: 15,
  maxPage: 1,
};

export { refs, ACTIVE_CLASS, photoQueryParams };
