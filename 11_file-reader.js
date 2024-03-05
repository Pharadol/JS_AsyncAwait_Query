let file = document.getElementById("file");
let result = document.getElementById("resultFile");
let inputImg = document.getElementById("inputImg");
let resultImg = document.getElementById("resultFileImg");

file.addEventListener("input", (e) => {
  //   console.log(e);
  let file = e.target.files[0];
  if (!file) {
    return;
  }
  let reader = new FileReader();
  reader.onload = (event) => {
    console.log("CALLBACK?", event);
    result.innerText = event.target.result;
  };
  reader.readAsText(file); // call callback above
});

inputImg.addEventListener("input", (e) => {
  let file = e.target.files[0];
  if (!file) {
    return;
  }

  let url = URL.createObjectURL(file); // create a string containing a URL representing the obj given in the parameter (เพราะเดิม toolarge)
  // blot url better than data url
  resultImg.src = url; // easier than line 29-34

  //   let reader = new FileReader();
  //   reader.onload = (event) => {
  //     resultImg.src = event.target.result; //src or call base 64
  //     console.log(event);
  //   };
  //   reader.readAsDataURL(file); //read as some link
});

//**praties use async await */
let file2 = document.getElementById("file2");
let result2 = document.getElementById("resultFile2");

function readText(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = (event) => {
      // event.target.result
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

file.addEventListener("input", async (e) => {
  let file = e.target.files[0];
  if (!file) {
    return;
  }
  result.innerText = await readText(file);
});
