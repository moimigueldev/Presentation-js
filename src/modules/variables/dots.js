export const dotsContainer = { element: undefined };

function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

export const dotsNavigationContainer = htmlToElement(
  `<div class="presentation-js-dots-navigation-container" presentation-js-dots-container></div>`
);

export const dotSVG = htmlToElement(`<svg class="presentation-js-navigation-dot" aria-hidden="true" focusable="false"
data-prefix="fas" data-icon="circle" class=" svg-inline--fa fa-circle fa-w-16" role="img"
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z">
</path>
</svg>`);
