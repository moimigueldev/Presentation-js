var presentation=function(a){'use strict';function b(a){var b=document.createElement("template");return a=a.trim(),b.innerHTML=a,b.content.firstChild}// MASTER FUNCTION TO CREATE PRESETATION
function c(){r=q.element,console.log("this is the container",r),t(),p(r),s(),n()}// MASTER LOOP TO SETUP PRESENTATION CAROUSEL
const d=b(`<div class="presentation-forward-arrow-container">
<svg class="presentation-navigation presentation-forward" fill="currentColor" viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
        clip-rule="evenodd"></path>
</svg>
</div>`),e=b(`<div class="presentation-back-arrow-container">
<svg class="presentation-navigation presentation-back" fill="currentColor" viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
        clip-rule="evenodd"></path>
</svg>
</div>`),f={timer:6e3,arrows:!0,autoSlide:!0};let g=setInterval(()=>{j()},f.timer);clearInterval(g);let h;Element.prototype.insertChildAtIndex=function(a,b){b||(b=0),b>=this.children.length?this.appendChild(a):this.insertBefore(a,this.children[b])};const i=()=>{const a=document.getElementsByClassName("presentation-forward-arrow-container"),b=document.getElementsByClassName("presentation-back-arrow-container");for(let c=0;c<a.length;c++)a[c].addEventListener("click",()=>{j()}),b[c].addEventListener("click",()=>{l()})},j=()=>{h.scrollLeft+=h.clientWidth,h.style.scrollBehavior="auto",setTimeout(()=>{h.appendChild(h.children[0].cloneNode(!0));for(let a=0;a<h.children.length;a++)if(h.children[a]===h.children[0]);k(h),h.removeChild(h.children[0]),h.scrollLeft=0,h.style.scrollBehavior="smooth"},600)},k=a=>{let b=a.children[a.children.length-1];for(let c=0;c<b.children.length;c++)"presentation-forward-arrow-container"===b.children[c].classList[0]&&b.children[c].addEventListener("click",()=>{j()}),"presentation-back-arrow-container"===b.children[c].classList[0]&&b.children[c].addEventListener("click",()=>{l()})},l=()=>{0===h.scrollLeft&&(h.prepend(h.children[h.children.length-1]),h.style.scrollBehavior="auto",h.scrollLeft=h.clientWidth,h.style.scrollBehavior="smooth"),h.scrollLeft-=h.clientWidth},m=a=>{f.arrows&&(a.appendChild(d.cloneNode(!0)),a.appendChild(e.cloneNode(!0)))},n=()=>{i()},o=a=>{a.classList.add("container-child")},p=a=>{h=a},q={element:void 0};// FORWARD
let r;const s=()=>{for(let a,b=0;b<r.children.length;b++)a=r.children[b],a.dataset.slide?(o(a),m(a)):r.removeChild(a)},t=()=>{r.classList.add("presentation-js-setup")},u=()=>{const a=document.body.children;for(let b=0;b<a.length;b++)return a[b].hasAttribute("presentation-js")?(q.element=a[b],!0):(console.error("Please provide a container with the attribute: presentation-js"),!1)},v=a=>{if(a)for(const b in a)f[b]&&(typeof a[b]==typeof f[b]?f[b]=a[b]:console.error(`invalid value for ${b}`))};return a.start=function(a){return!!u()&&void(v(a),c())},Object.defineProperty(a,"__esModule",{value:!0}),a}({});
