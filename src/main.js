import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";

const links = document.querySelectorAll(".gallery-link");
const form = document.querySelector(".form");
const galleryList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    loader.style.opacity = "1";
    if (event.target.elements.query.value === "") {
        return;
    } else {
        fetchImages(event.target.elements.query.value)
        .then((images) => {
            if (images.hits.length === 0) {
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
                galleryList.innerHTML = "";
                galleryList.insertAdjacentHTML("beforeend", renderImages(images.hits));
                links.forEach(link => link.addEventListener("click", event => event.preventDefault()));
                const lightbox = new SimpleLightbox('.gallery a', {
                    captionsData: "alt",
                    captionPosition: "bottom",
                    captionDelay: 250
                });
                lightbox.refresh();
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
        )
        loader.style.opacity = "0";
    }
  });
