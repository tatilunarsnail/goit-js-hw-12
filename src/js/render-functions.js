const galleryList = document.querySelector(".gallery");
function renderImages(images) {
    const markup = images
    .map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
        return `
            <li class="gallery-item">
            <a class="gallery-link" href="${webformatURL}">
            <img
            class="gallery-image"
            src="${webformatURL}"
            data-source="${largeImageURL}"
            alt="${tags}"
            width="360px"
            height="200px"
            />
            </a>
            <p><b>Likes</b>: ${likes}</p>
            <p><b>Views</b>: ${views}</p>
            <p><b>Comments</b>: ${comments}</p>
            <p><b>Downloads</b>: ${downloads}</p>
            </li>`
      })
      .join("");
    galleryList.insertAdjacentHTML("beforeend", markup);
  }
