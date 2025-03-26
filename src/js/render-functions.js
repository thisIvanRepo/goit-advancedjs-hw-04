export const cardsImg = data => {
  const images = data.hits;

  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
      <li class="gallery-item">
			    <a class="gallery-link" href="${largeImageURL}">
				    <img
					    class="gallery-image"
					    src="${webformatURL}"
					    alt="${tags}"
					  />
			    </a>
          <div class="info">
            <p class="info-item">
              <b>Likes:</b> ${likes}
            </p>
            <p class="info-item">
              <b>Views:</b> ${views}
            </p>
            <p class="info-item">
              <b>Comments:</b> ${comments}
            </p>
            <p class="info-item">
              <b>Downloads:</b> ${downloads}
            </p>
          </div>
		    </li>
      `;
      }
    )
    .join('');
};
