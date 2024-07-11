import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.target.elements.query.value === "") {
        return;
    } else {
        fetchImages(event.target.elements.query.value)
        .then((images) => {
            if (images.hits.length() === 0) {
                iziToast.error({
                    title: '',
                    icon: '',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topCenter',
                    backgroundColor: "#ef4040",
                    titleColor: "#fff",
                    messageColor: "#fff"
                    })
            } else {
                renderImages(images);
            }
        })
        .catch((error) => iziToast.error({
            title: '',
            icon: '',
            message: `${error}`,
            position: 'topCenter',
            backgroundColor: "#ef4040",
            titleColor: "#fff",
            messageColor: "#fff"
            })
        );
    }
  });
