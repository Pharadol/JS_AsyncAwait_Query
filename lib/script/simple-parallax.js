const imgs = document.getElementsByClassName('thumbnail')
new simpleParallax(imgs, {
  orientation: 'right',
  scale: 1.5,
})
console.log(imgs);