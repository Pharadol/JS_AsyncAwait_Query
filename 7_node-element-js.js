document.addEventListener("DOMContentLoaded", () => {
  let outside = document.getElementById("outside_2");

  outside.addEventListener("click", () => {
    console.log("outside");
    let div = document.createElement("div");
    div.classList.add("inside");
    div.style.backgroundColor = "red";
    div.style.width = "20px";
    div.style.height = "20px";
    //   outside.append(div);
    outside.prepend(div);
  });

  outside.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    let div = outside.querySelector("div.inside:last-child");
    if (div) {
      div.remove();
    }
  });
});
 

