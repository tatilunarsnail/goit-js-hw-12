function fetchImages(query) {
    return fetch(`https://pixabay.com/api/?key=44884421-e01d7eda68b827a4ca86e08d6&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
}
