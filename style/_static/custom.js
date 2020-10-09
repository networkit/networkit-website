$(document).ready(function() {
  if ($("#fancy-particles").length) {
    particlesJS.load('fancy-particles', '_static/particles.json', null);
  }
  if ($("#fancy-particles-small").length) {
    particlesJS.load('fancy-particles-small', '_static/particles.json', null);
  }
});