var presentation=function(a){'use strict';function b(a){var b=document.createElement("template");return a=a.trim(),b.innerHTML=a,b.content.firstChild}// MASTER FUNCTION TO CREATE PRESETATION
function c(){r=q.element,t(),o(r),s(),m()}// MASTER LOOP TO SETUP PRESENTATION CAROUSEL
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
</div>`),f={timer:6e3,arrows:!0,autoSlide:!0};// let interval = setInterval(() => {
//   goToNextSlide();
// }, options.timer);
let g;// clearInterval(interval);
Element.prototype.insertChildAtIndex=function(a,b){b||(b=0),b>=this.children.length?this.appendChild(a):this.insertBefore(a,this.children[b])};const h=()=>{const a=document.getElementsByClassName("presentation-forward-arrow-container"),b=document.getElementsByClassName("presentation-back-arrow-container");for(let c=0;c<a.length;c++)a[c].addEventListener("click",()=>{i()}),b[c].addEventListener("click",()=>{k()})},i=()=>{g.scrollLeft+=g.clientWidth,g.style.scrollBehavior="auto",setTimeout(()=>{g.appendChild(g.children[0].cloneNode(!0));for(let a=0;a<g.children.length;a++)if(g.children[a]===g.children[0]);j(g),g.removeChild(g.children[0]),g.scrollLeft=0,g.style.scrollBehavior="smooth"},600)},j=a=>{let b=a.children[a.children.length-1];for(let c=0;c<b.children.length;c++)"presentation-forward-arrow-container"===b.children[c].classList[0]&&b.children[c].addEventListener("click",()=>{i()}),"presentation-back-arrow-container"===b.children[c].classList[0]&&b.children[c].addEventListener("click",()=>{k()})},k=()=>{clearInterval(p),0===g.scrollLeft&&(g.prepend(g.children[g.children.length-1]),g.style.scrollBehavior="auto",g.scrollLeft=g.clientWidth,g.style.scrollBehavior="smooth"),g.scrollLeft-=g.clientWidth,p()},l=a=>{f.arrows&&(a.appendChild(d.cloneNode(!0)),a.appendChild(e.cloneNode(!0)))},m=()=>{h()},n=a=>{a.classList.add("container-child")},o=a=>{g=a,p()},p=()=>{setInterval(()=>{i()},f.timer)},q={element:void 0};// FORWARD
let r;const s=()=>{for(let a,b=0;b<r.children.length;b++)a=r.children[b],a.dataset.slide?(n(a),l(a)):r.removeChild(a)},t=()=>{r.classList.add("presentation-js-setup")},u=()=>{const a=document.body.children;for(let b=0;b<a.length;b++)return a[b].hasAttribute("presentation-js")?(q.element=a[b],!0):(console.error("Please provide a container with the attribute: presentation-js"),!1)},v=a=>{if(a)for(const b in a)f[b]&&(typeof a[b]==typeof f[b]?f[b]=a[b]:console.error(`invalid value for ${b}`));console.log("done setting up options",f)};return a.start=function(a){return!!u()&&void(v(a),c())},Object.defineProperty(a,"__esModule",{value:!0}),a}({});
