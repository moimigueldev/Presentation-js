var presentation=function(a){'use strict';function b(a){var b=document.createElement("template");return a=a.trim(),b.innerHTML=a,b.content.firstChild}// MASTER FUNCTION TO CREATE PRESETATION
function c(){t=g.element,v(),q(),u(),o(),s()}// MASTER LOOP TO SETUP PRESENTATION CAROUSEL
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
</div>`),f={timer:6e3,arrows:!0,autoSlide:!0,dots:!1},g={element:void 0};let h,i;Element.prototype.insertChildAtIndex=function(a,b){b||(b=0),b>=this.children.length?this.appendChild(a):this.insertBefore(a,this.children[b])};const j=()=>{const a=document.getElementsByClassName("presentation-forward-arrow-container"),b=document.getElementsByClassName("presentation-back-arrow-container");for(let c=0;c<a.length;c++)a[c].addEventListener("click",()=>{k()}),b[c].addEventListener("click",()=>{l()})},k=()=>{clearInterval(h),i.scrollLeft+=i.clientWidth,i.style.scrollBehavior="auto",setTimeout(()=>{i.appendChild(i.children[0].cloneNode(!0)),m(),i.removeChild(i.children[0]),i.scrollLeft=0,i.style.scrollBehavior="smooth"},600),r()},l=()=>{clearInterval(h),0===i.scrollLeft&&(i.prepend(i.children[i.children.length-1]),i.style.scrollBehavior="auto",i.scrollLeft=i.clientWidth,i.style.scrollBehavior="smooth"),i.scrollLeft-=i.clientWidth,r()},m=()=>{let a=i.children[i.children.length-1];for(let b=0;b<a.children.length;b++)"presentation-forward-arrow-container"===a.children[b].classList[0]&&a.children[b].addEventListener("click",()=>{k()}),"presentation-back-arrow-container"===a.children[b].classList[0]&&a.children[b].addEventListener("click",()=>{l()})},n=a=>{f.arrows&&(a.appendChild(d.cloneNode(!0)),a.appendChild(e.cloneNode(!0)))},o=()=>{j()},p=a=>{a.classList.add("container-child")},q=()=>{i=g.element,r()},r=()=>{h=setInterval(()=>{k()},f.timer)},s=()=>{console.log("starting dots navigation",f.dots),f.dots?console.log("true"):console.log("false")};// FORWARD
let t;const u=()=>{for(let a,b=0;b<t.children.length;b++)a=t.children[b],a.dataset.slide?(p(a),n(a)):t.removeChild(a)},v=()=>{t.classList.add("presentation-js-setup")},w=()=>{const a=document.body.children;for(let b=0;b<a.length;b++)return a[b].hasAttribute("presentation-js")?(g.element=a[b],!0):(console.error("Please provide a container with the attribute: presentation-js"),!1)},x=a=>{if(a)for(const b in console.log("config",a),a)console.log("option",b),f[b]&&(typeof a[b]==typeof f[b]?(console.log("options",f[b],b),f[b]=a[b]):console.error(`invalid value for ${b}`))};return a.start=function(a){return!!w()&&void(x(a),c())},Object.defineProperty(a,"__esModule",{value:!0}),a}({});
