export function build(id) {
  const container = document.getElementById(id);
  loopChildNodes(container);
}

function loopChildNodes(container) {
  console.log('checking for kids', container.childNodes);
  container.childNodes.forEach((x) => {
    if (x.dataset !== undefined) {
      if (x.dataset.slide) {
        console.log('x', x.classList);
        x.classList.add('container-child');
      }
    }
  });
}
