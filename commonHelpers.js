import{i as a,S as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(s){return fetch(`https://pixabay.com/api/?key=44884421-e01d7eda68b827a4ca86e08d6&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function d(s){return s.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:i,downloads:f})=>`<li class="gallery-item">
            <a class="gallery-link" href="${o}">
            <img
            class="gallery-image"
            src="${r}"
            data-source="${o}"
            alt="${n}"
            width="360px"
            />
            </a>
            <div class="info-box">
                <p>Like: <span>${e}</span></p>
                <p>Views: <span>${t}</span></p>
                <p>Comments: <span>${i}</span></p>
                <p>Downloads: <span>${f}</span></p>
            </div>
        </li>`).join("")}const m=document.querySelector(".form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");m.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements.query.value.trim();if(r===""){a.error({title:"",icon:"",message:"Please enter something to search images!",position:"topCenter",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"});return}c.style.opacity=1,p(r).then(o=>{o.hits.length===0?a.error({title:"",icon:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"}):(l.innerHTML="",l.insertAdjacentHTML("beforeend",d(o.hits)),document.querySelectorAll(".gallery-link").forEach(t=>t.addEventListener("click",i=>i.preventDefault())),new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh())}).catch(o=>a.error({title:"",icon:"",message:`${o}`,position:"topCenter",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})).finally(()=>{c.style.opacity=0})});
//# sourceMappingURL=commonHelpers.js.map
