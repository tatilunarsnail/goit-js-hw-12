export function renderImages(array) {
  return array
      .map(({
              webformatURL,
              largeImageURL,
              tags,
              likes,
              views,
              comments,
              downloads
          }) =>
          `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
            <img
            class="gallery-image"
            src="${webformatURL}"
            data-source="${largeImageURL}"
            alt="${tags}"
            width="360px"
            height="152px"
            />
            </a>
            <div class="info-box">
                <p>Like: <span>${likes}</span></p>
                <p>Views: <span>${views}</span></p>
                <p>Comments: <span>${comments}</span></p>
                <p>Downloads: <span>${downloads}</span></p>
            </div>
      </li>`
      )
      .join("");
}
