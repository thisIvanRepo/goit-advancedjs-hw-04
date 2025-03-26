var v=Object.defineProperty;var x=(r,e,s)=>e in r?v(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var f=(r,e,s)=>x(r,typeof e!="symbol"?e+"":e,s);import{a as g,i as p,S as P}from"./assets/vendor-GRlx4-yf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const n={searchForm:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery"),notFoundText:document.querySelector(".js-not-found-text"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more")},d="active",i={query:"",page:1,perPage:15,maxPage:1},u=class u{constructor(e){if(!e)throw new Error("Button element is required to initialize LoadMoreButton.");this.button=e}disable(){this.button.classList.add(u.HIDDEN_CLASS)}enable(){this.button.classList.remove(u.HIDDEN_CLASS)}};f(u,"HIDDEN_CLASS","is-hidden");let m=u;const l=new m(n.loadMoreBtn),y=r=>r.hits.map(({webformatURL:s,largeImageURL:a,tags:t,likes:o,views:c,comments:L,downloads:S})=>`
      <li class="gallery-item">
			    <a class="gallery-link" href="${a}">
				    <img
					    class="gallery-image"
					    src="${s}"
					    alt="${t}"
					  />
			    </a>
          <div class="info">
            <p class="info-item">
              <b>Likes:</b> ${o}
            </p>
            <p class="info-item">
              <b>Views:</b> ${c}
            </p>
            <p class="info-item">
              <b>Comments:</b> ${L}
            </p>
            <p class="info-item">
              <b>Downloads:</b> ${S}
            </p>
          </div>
		    </li>
      `).join("");g.defaults.baseURL="https://pixabay.com/api/";g.defaults.params={key:"49425225-4fab9228e9772b9206d5850f9",image_type:"photo",orientation:"horizontal",safesearch:!0};async function h(r,e=1,s=15){if(!r.trim()){p.error({title:"Error",message:"Please enter a valid search query!"});return}try{const a=await g.get("",{params:{q:r,page:e,per_page:s}}),{hits:t,total:o,totalHits:c}=a.data;return{hits:t,total:o,totalHits:c}}catch(a){p.error({title:"Error",message:`Error: ${a}`})}}async function q(r){r.preventDefault(),n.notFoundText.textContent="",n.gallery.innerHTML="",l.disable(),i.page=1,i.maxPage=1;const e=r.currentTarget,s=e.elements.user_query.value.trim();n.loader.classList.add(d);try{const a=await h(s);if(n.loader.classList.remove(d),!a.hits||a.hits.length===0){n.notFoundText.innerHTML=`Sorry, there are no images matching your search <span class ="impotent">${s}</span>. Please try again!`;return}i.query=s,i.maxPage=Math.ceil(a.totalHits/i.perPage),n.gallery.innerHTML=y(a),i.maxPage>1&&l.enable()}catch(a){n.loader.classList.remove(d),console.log("Error:",a)}finally{e.reset()}}function w(){const r=n.gallery.querySelector(".gallery-item");if(r){const{height:e}=r.getBoundingClientRect();scrollBy({top:e*2,behavior:"smooth"})}}async function E(r){i.page+=1,l.disable(),n.loader.classList.add(d);try{const{query:e,page:s,perPage:a}=i,t=await h(e,s,a);n.gallery.insertAdjacentHTML("beforeend",y(t)),n.loader.classList.remove(d),l.enable(),w(),i.page<i.maxPage?l.enable():(l.disable(),n.notFoundText.textContent="We're sorry, but you've reached the end of search.")}catch(e){console.log("Error:",e),l.disable()}}let b=new P(".gallery-link",{captionsData:"alt",captionDelay:250});n.searchForm.addEventListener("submit",async r=>{await q(r),b.refresh()});l.button.addEventListener("click",async()=>{await E(),b.refresh()});
//# sourceMappingURL=index.js.map
