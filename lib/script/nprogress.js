NProgress.configure({ showSpinner: true });

// NProgress.start();
// setTimeout(() => {
//   NProgress.done();
// }, 3000);

let button = document.getElementById("load-data");
let texterea = document.getElementById("area-data");

button.addEventListener("click", async (e) => {
  NProgress.start();
  try {
    let response = await fetch("https://reqres.in/api/users/2?delay=2");
    let text = await response.text();
    texterea.innerText = text;
  } catch (error) {
    texterea.innerText = error
  }
  NProgress.done();
});
