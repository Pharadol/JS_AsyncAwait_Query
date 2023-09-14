document.addEventListener("DOMContentLoaded", () => {
  let dataSet = document.getElementById("data-set");
  console.log(dataSet.dataset);

//   let exLink = document.getElementById("example-link");
//   let wikiLinkj = document.getElementById("wiki-link");
  let iframe = document.getElementById("iframe-area");

//   exLink.addEventListener("click", (event) => {
//     callIframe(event.target.dataset.href);
//     console.log(event.target.dataset.href);
//   });

//   wikiLinkj.addEventListener("click", (event) => {
//     callIframe(event.target.dataset.href);
//     console.log(event.target.dataset.href);
//   });
  
  function callIframe(link) {
    iframe.setAttribute("src", link);
  }

  let a = document.querySelectorAll("a[data-href]");

  for (let el of a) {
    el.addEventListener("click", (event) => {
      callIframe(event.target.dataset.href);
      console.log(event.target.dataset.href);
    });
  }
});
