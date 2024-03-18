let buttonAlert = document.getElementById('alert')

buttonAlert.addEventListener('click', async () => {
  let result = await Swal.fire({
    title: 'Hello!!',
    text: 'You clicked the button!',
    icon: 'success',
    footer: '<a href="">Issue test.</a>',
    showCancelButton: true,
    confirmButtonText: 'ยืนยัน'
  })
  console.log(result);
})

let imgAlert = document.getElementById('img-alert')

imgAlert.addEventListener('click', (e) => {
  let clickedImg = e.target.getAttribute('data-src')
  // console.log(e.target.getAttribute('data-src'));
  Swal.fire({
    imageUrl: clickedImg,
    confirmButtonText: 'close',
    grow: 'fullscreen'
  })
})