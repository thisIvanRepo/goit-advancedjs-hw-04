const refs = {
  //примусово говорим про те що тут 100% буде елемент 
  searchForm: document.querySelector('.js-form')as HTMLElement,
  gallery: document.querySelector('.js-gallery')as HTMLElement,
  notFoundText: document.querySelector('.js-not-found-text')as HTMLElement,
  loader: document.querySelector('.js-loader')as HTMLElement,
  loadMoreBtn: document.querySelector('.js-load-more')as HTMLElement,
};

const ACTIVE_CLASS = 'active';

const photoQueryParams:Record<string,string | number> = {
  query: '',
  page: 1,
  perPage: 15,
  maxPage: 1,
};

export { refs, ACTIVE_CLASS, photoQueryParams };
