import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";

const form = document.querySelector(".form");
const galleryList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const fetchImagesBtn = document.querySelector(".fetch-more-btn");

let searchValue = '';
let totalHits = 0;
let loadedHits = 0;

fetchImagesBtn.style.display = "none";

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    searchValue = event.target.elements.query.value.trim();
    if (searchValue === "") {
        iziToast.error({
            title: '',
            icon: '',
            message: 'Please enter something to search images!',
            position: 'topCenter',
            backgroundColor: "#ef4040",
            titleColor: "#fff",
            messageColor: "#fff"
        });
        return;
    }
    loader.style.display = "inline-block";
    fetchImagesBtn.style.display = "none";
    totalHits = 0;
    loadedHits = 0;
    try {
        const images = await fetchImages(searchValue);
        totalHits = images.totalHits;
        loadedHits = images.hits.length;
        galleryList.innerHTML = "";
        if (images.hits.length === 0) {
            iziToast.error({
                title: '',
                icon: '',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topCenter',
                backgroundColor: "#ef4040",
                titleColor: "#fff",
                messageColor: "#fff"
            });
        } else {
            galleryList.insertAdjacentHTML("beforeend", renderImages(images.hits));
            const links = document.querySelectorAll(".gallery-link");
            links.forEach(link => link.addEventListener("click", event => event.preventDefault()));
            const lightbox = new SimpleLightbox('.gallery a', {
                captionsData: "alt",
                captionPosition: "bottom",
                captionDelay: 250
            });
            lightbox.refresh();
            if (loadedHits < totalHits) {
                fetchImagesBtn.style.display = "block";
            }
        }
    } catch (error) {
        iziToast.error({
            title: '',
            icon: '',
            message: `${error}`,
            position: 'topCenter',
            backgroundColor: "#ef4040",
            titleColor: "#fff",
            messageColor: "#fff"
        });
    } finally {
        loader.style.display = "none";
    }
});

fetchImagesBtn.addEventListener("click", async () => {
    loader.style.display = "inline-block";
    try {
        const images = await fetchImages(searchValue);
        loadedHits += images.hits.length;
        galleryList.insertAdjacentHTML("beforeend", renderImages(images.hits));
        const links = document.querySelectorAll(".gallery-link");
        links.forEach(link => link.addEventListener("click", event => event.preventDefault()));

        const lightbox = new SimpleLightbox('.gallery a', {
            captionsData: "alt",
            captionPosition: "bottom",
            captionDelay: 250
        });
        lightbox.refresh();

        const { height: cardHeight } = document.querySelector('.gallery-item').getBoundingClientRect();
        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth'
        });

        if (loadedHits >= totalHits) {
            fetchImagesBtn.style.display = "none";
            iziToast.info({
                title: '',
                icon: '',
                message: "We're sorry, but you have reached the end of search results.",
                position: 'topCenter',
                backgroundColor: "#ef4040",
                titleColor: "#fff",
                messageColor: "#fff"
            });
        }
    } catch (error) {
        iziToast.error({
            title: '',
            icon: '',
            message: `${error}`,
            position: 'topCenter',
            backgroundColor: "#ef4040",
            titleColor: "#fff",
            messageColor: "#fff"
        });
    } finally {
        loader.style.display = "none";
    }
});
