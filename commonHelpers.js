import{a as k,i as a,S as m}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const L="44884421-e01d7eda68b827a4ca86e08d6",v="https://pixabay.com/api/";let u=1,g="";async function h(r){g!==r&&(u=1,g=r);try{const t=await k.get(v,{params:{key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:u,per_page:15}});return u+=1,t.data}catch(t){throw new Error(t.response.status)}}function b(r){return r.map(({webformatURL:t,largeImageURL:n,tags:s,likes:e,views:o,comments:i,downloads:C})=>`<li class="gallery-item">
              <a class="gallery-link" href="${n}">
              <img
              class="gallery-image"
              src="${t}"
              data-source="${n}"
              alt="${s}"
              />
              </a>
              <div class="info-box">
                  <p>Like: <span>${e}</span></p>
                  <p>Views: <span>${o}</span></p>
                  <p>Comments: <span>${i}</span></p>
                  <p>Downloads: <span>${C}</span></p>
              </div>
        </li>`).join("")}const w=document.querySelector(".form"),y=document.querySelector(".gallery"),d=document.querySelector(".loader"),c=document.querySelector(".fetch-more-btn");let f="",p=0,l=0;c.style.display="none";w.addEventListener("submit",async r=>{if(r.preventDefault(),f=r.target.elements.query.value.trim(),f===""){a.error({title:"",icon:"",message:"Please enter something to search images!",position:"topCenter",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"});return}d.style.display="inline-block",c.style.display="none",p=0,l=0;try{const t=await h(f);p=t.totalHits,l=t.hits.length,y.innerHTML="",t.hits.length===0?a.error({title:"",icon:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"}):(y.insertAdjacentHTML("beforeend",b(t.hits)),document.querySelectorAll(".gallery-link").forEach(e=>e.addEventListener("click",o=>o.preventDefault())),new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh(),l<p&&(c.style.display="block"))}catch(t){a.error({title:"",icon:"",message:`${t}`,position:"topCenter",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})}finally{d.style.display="none"}});c.addEventListener("click",async()=>{d.style.display="inline-block";try{const r=await h(f);if(l+=r.hits.length,l>=p)c.style.display="none",a.info({title:"",icon:"",message:"We're sorry, but you have reached the end of search results.",position:"topCenter",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"});else{y.insertAdjacentHTML("beforeend",b(r.hits)),document.querySelectorAll(".gallery-link").forEach(e=>e.addEventListener("click",o=>o.preventDefault())),new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh();const{height:s}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}}catch(r){a.error({title:"",icon:"",message:`${r}`,position:"topCenter",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})}finally{d.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
