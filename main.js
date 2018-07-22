function main () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const animation = new Animation(canvas, ctx);
}

window.addEventListener('load', main);
