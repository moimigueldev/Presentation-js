var presentation=function(a){'use strict';function b(a){var b=document.createElement("template");return a=a.trim(),b.innerHTML=a,b.content.firstChild}// MASTER FUNCTION TO CREATE PRESETATION
function c(){C=h.element,E(),r(),D(),p(),x()}// MASTER LOOP TO SETUP PRESENTATION CAROUSEL
const d=a=>{var b=document.createElement("template");return a=a.trim(),b.innerHTML=a,b.content.firstChild},e=d(`<div class="presentation-forward-arrow-container">
<svg class="presentation-navigation presentation-forward" fill="currentColor" viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
        clip-rule="evenodd"></path>
</svg>
</div>`),f=d(`<div class="presentation-back-arrow-container">
<svg class="presentation-navigation presentation-back" fill="currentColor" viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
        clip-rule="evenodd"></path>
</svg>
</div>`),g={timer:6e3,arrows:!0,autoSlide:!0,dots:!1},h={element:void 0};let i,j;Element.prototype.insertChildAtIndex=function(a,b){b||(b=0),b>=this.children.length?this.appendChild(a):this.insertBefore(a,this.children[b])};const k=()=>{const a=document.getElementsByClassName("presentation-forward-arrow-container"),b=document.getElementsByClassName("presentation-back-arrow-container");for(let c=0;c<a.length;c++)a[c].addEventListener("click",()=>{l()}),b[c].addEventListener("click",()=>{m()})},l=()=>{clearInterval(i),j.scrollLeft+=j.clientWidth,j.style.scrollBehavior="auto",setTimeout(()=>{j.appendChild(j.children[0].cloneNode(!0)),n(),j.removeChild(j.children[0]),j.scrollLeft=0,j.style.scrollBehavior="smooth"},600),s()},m=()=>{clearInterval(i),0===j.scrollLeft&&(j.prepend(j.children[j.children.length-1]),j.style.scrollBehavior="auto",j.scrollLeft=j.clientWidth,j.style.scrollBehavior="smooth"),j.scrollLeft-=j.clientWidth,s()},n=()=>{let a=j.children[j.children.length-1];for(let b=0;b<a.children.length;b++)"presentation-forward-arrow-container"===a.children[b].classList[0]&&a.children[b].addEventListener("click",()=>{l()}),"presentation-back-arrow-container"===a.children[b].classList[0]&&a.children[b].addEventListener("click",()=>{m()})},o=a=>{g.arrows&&(a.appendChild(e.cloneNode(!0)),a.appendChild(f.cloneNode(!0)))},p=()=>{k()},q=a=>{a.classList.add("container-child")},r=()=>{j=h.element,s()},s=()=>{i=setInterval(()=>{l()},g.timer)},t={element:void 0},u=b(`<div class="presentation-js-dots-navigation-container" presentation-js-dots-container></div>`),v=b(`<svg class="presentation-js-navigation-dot" aria-hidden="true" focusable="false"
data-prefix="fas" data-icon="circle" class=" svg-inline--fa fa-circle fa-w-16" role="img"
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z">
</path>
</svg>`);// FORWARD
let w;const x=()=>!!g.dots&&void(w=h.element,t.element=document.getEle,y(),A(),z(),B()),y=()=>{const a=h.element.children;for(let b=0;b<a.length;b++)if(a[b].hasAttribute("presentation-js-dots-container"))return t.element=a[b]},z=()=>{w.children.length;for(let a=0;a<w.children.length;a++){const b=w.children[a];b.appendChild(u.cloneNode(!0))}},A=()=>{const a=w.children.length;for(let b=0;b<a;b++)u.appendChild(v.cloneNode(!0))},B=()=>{console.log("hello",document.getElementsByClassName("presentation-js-dots-navigation-container"))};let C;const D=()=>{for(let a,b=0;b<C.children.length;b++)a=C.children[b],a.dataset.slide?(q(a),o(a)):"presentation-js-dots-navigation-container"!==a.classList.value&&C.removeChild(a)},E=()=>{C.classList.add("presentation-js-setup")},F=()=>{const a=document.body.children;for(let b=0;b<a.length;b++)return a[b].hasAttribute("presentation-js")?(h.element=a[b],!0):(console.error("Please provide a container with the attribute: presentation-js"),!1)},G=a=>{if(a)for(const b in a)g.hasOwnProperty(b)&&(typeof a[b]==typeof g[b]?g[b]=a[b]:console.error(`invalid value for ${b}`))};return a.start=function(a){return!!F()&&void(G(a),c())},Object.defineProperty(a,"__esModule",{value:!0}),a}({});
