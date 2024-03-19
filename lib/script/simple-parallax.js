const imgs = document.getElementsByClassName('thumbnail')
new simpleParallax(imgs, {
  orientation: 'right',
  scale: 1.5,
})


let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene, {
  relativeInput: true
});