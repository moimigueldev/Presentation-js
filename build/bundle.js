var presentation=function(a){'use strict';function b(a){var b=document.createElement("template");return a=a.trim(),b.innerHTML=a,b.content.firstChild}function c(){H=h.element,J(),K(),I(),w(),m()}const d=a=>{const b=document.createElement("template");return a=a.trim(),b.innerHTML=a,b.content.firstChild},e=d(`<div class="presentation-forward-arrow-container">
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
</div>`),g={timer:6e3,arrows:!0,autoSlide:!0,dots:!1,dotsSize:"13px",activeDotColor:"white",inactiveDotColor:"gray",arrowSize:"25px",arrowColor:"beige"},h={element:void 0},i={element:void 0},j=b(`<div class="presentation-js-dots-navigation-container" presentation-js-dots-container></div>`),k=b(`<svg class="presentation-js-navigation-dot" aria-hidden="true" focusable="false"
data-prefix="fas" data-icon="circle" class=" svg-inline--fa fa-circle fa-w-16" role="img"
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z">
</path>
</svg>`);let l;const m=()=>!!g.dots&&void(l=h.element,i.element=document.getEle,n(),p(),o(),q(),r()),n=()=>{const a=h.element.children;for(let b=0;b<a.length;b++)if(a[b].hasAttribute("presentation-js-dots-container"))return i.element=a[b]},o=()=>{for(let a=0;a<l.children.length;a++){const b=l.children[a];b.appendChild(j.cloneNode(!0))}},p=()=>{const a=l.children.length;for(let b=0;b<a;b++){const a=k;a.setAttribute("slide",b+1),j.appendChild(a.cloneNode(!0))}},q=()=>{const a=document.getElementsByClassName("presentation-js-dots-navigation-container");for(let b=0;b<a.length;b++){const c=a[b].children,d=b+1;for(let a=0;a<c.length;a++)c[a].style.color=d===a+1?g.activeDotColor:g.inactiveDotColor}},r=()=>{const a=document.getElementsByClassName("presentation-js-navigation-dot");for(let b=0;b<a.length;b++)a[b].style.height=g.dotsSize,a[b].style.height=g.dotsSize,a[b].addEventListener("click",()=>{s(a[b])})},s=a=>{const b=a.getAttribute("slide"),c=`[data-slide*="${b}"]`;console.log("element",c),document.querySelector(c).scrollIntoView(!0)},t=()=>{const a=l.children[l.children.length-1];for(let b=0;b<a.children.length;b++)if(a.children[b].classList.contains("presentation-js-dots-navigation-container")){const c=a.children[b];for(let a=0;a<c.children.length;a++)c.children[a].addEventListener("click",()=>s(c.children[a]))}};let u,v;const w=()=>{v=h.element,!g.autoSlide||D(),x(),E()};Element.prototype.insertChildAtIndex=function(a,b){b||(b=0),b>=this.children.length?this.appendChild(a):this.insertBefore(a,this.children[b])};const x=()=>{const a=document.getElementsByClassName("presentation-forward-arrow-container"),b=document.getElementsByClassName("presentation-back-arrow-container");for(let c=0;c<a.length;c++)a[c].addEventListener("click",()=>{y()}),b[c].addEventListener("click",()=>{z()})},y=a=>{F(),clearInterval(u),v.scrollLeft+=v.clientWidth,v.style.scrollBehavior="auto",setTimeout(()=>{v.appendChild(v.children[0].cloneNode(!0)),A(),v.removeChild(v.children[0]),v.scrollLeft=0,v.style.scrollBehavior="smooth",t()},a?a:600),!g.autoSlide||D()},z=()=>{F(),clearInterval(u),0===v.scrollLeft&&(v.prepend(v.children[v.children.length-1]),v.style.scrollBehavior="auto",v.scrollLeft=v.clientWidth,v.style.scrollBehavior="smooth"),v.scrollLeft-=v.clientWidth,!g.autoSlide||D(),t()},A=()=>{let a=v.children[v.children.length-1];for(let b=0;b<a.children.length;b++)"presentation-forward-arrow-container"===a.children[b].classList[0]&&a.children[b].addEventListener("click",()=>{y()}),"presentation-back-arrow-container"===a.children[b].classList[0]&&a.children[b].addEventListener("click",()=>{z()})},B=a=>{g.arrows&&(a.appendChild(e.cloneNode(!0)),a.appendChild(f.cloneNode(!0)))},C=a=>{a.classList.add("container-child")},D=()=>{u=setInterval(()=>{y()},g.timer)},E=()=>{const a=document.getElementsByClassName("presentation-navigation");for(let b=0;b<a.length;b++)a[b].style.height=g.arrowSize,a[b].style.color=g.arrowColor},F=()=>{v.children.length};let G=!0;window.onkeydown=a=>{a.preventDefault();const b=document.activeElement===h.element;a=a||window.event,b&&"ArrowRight"===a.key&&G&&(y(),G=!1,setTimeout(()=>{G=!0},600)),b&&"ArrowLeft"===a.key&&G&&(z(),G=!1,setTimeout(()=>{G=!0},600))};let H;const I=()=>{for(let a,b=0;b<H.children.length;b++)a=H.children[b],a.dataset.slide?(C(a),B(a)):"presentation-js-dots-navigation-container"!==a.classList.value&&H.removeChild(a)},J=()=>H.classList.add("presentation-js-setup"),K=()=>H.setAttribute("tabindex",1),L=()=>{const a=document.body.children;for(let b=0;b<a.length;b++)return a[b].hasAttribute("presentation-js")?(h.element=a[b],!0):(console.error("Please provide a container with the attribute: presentation-js"),!1)},M=a=>{if(a)for(const b in a)g.hasOwnProperty(b)&&(typeof a[b]==typeof g[b]?g[b]=a[b]:console.error(`invalid value for ${b}`))};return a.start=function(a){return!!L()&&void(M(a),c())},Object.defineProperty(a,"__esModule",{value:!0}),a}({});
