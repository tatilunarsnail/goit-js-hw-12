import{i as a,S as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function p(o){return fetch(`https://pixabay.com/api/?key=44884421-e01d7eda68b827a4ca86e08d6&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function d(o){return o.map(({webformatURL:t,largeImageURL:n,tags:s,likes:e,views:r,comments:i,downloads:f})=>`<li class="gallery-item">
            <a class="gallery-link" href="${n}">
            <img
            class="gallery-image"
            src="${t}"
            data-source="${n}"
            alt="${s}"
            width="360px"
            />
            </a>
            <div class="info-box">
                <p>Like: <span>${e}</span></p>
                <p>Views: <span>${r}</span></p>
                <p>Comments: <span>${i}</span></p>
                <p>Downloads: <span>${f}</span></p>
            </div>
        </li>`).join("")}const m=document.querySelectorAll(".gallery-link"),y=document.querySelector(".form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");y.addEventListener("submit",o=>{o.preventDefault(),c.style.opacity="1",o.target.elements.query.value!==""&&(p(o.target.elements.query.value).then(t=>{t.hits.length===0?a.error({title:"",icon:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"}):(l.innerHTML="",l.insertAdjacentHTML("beforeend",d(t.hits)),m.forEach(s=>s.addEventListener("click",e=>e.preventDefault())),new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh())}).catch(t=>a.error({title:"",icon:"",message:`${t}`,position:"topCenter",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})),c.style.opacity="0")});
//# sourceMappingURL=commonHelpers.js.map
