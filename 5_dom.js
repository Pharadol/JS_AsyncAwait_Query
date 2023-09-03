// mdn global event handelers : document
document.addEventListener("DOMContentLoaded", function () {
  let count = 0;

  let changeButton = document.getElementById("change");
  let clearButton = document.getElementById("clear");

  //   changeButton.onclick = changeMe
  changeButton.addEventListener("click", changeMe);
  clearButton.addEventListener("click", clearMe);

  //* .addEventListener จัดการง่ายกว่า onclick
  function changeMe() {
    let result = document.getElementById("result");
    result.innerText = ++count;
    // result.innerText = "CHANGED!";
  }
  function clearMe() {
    changeButton.removeEventListener("click", changeMe);
  }


  //* blur/focus
  let myInput = document.getElementById("myInput");
    
  myInput.addEventListener("blur", () => {
    myInput.placeholder = "input username";
    console.log("You out!");
  });
  myInput.addEventListener("focus", () => {
    myInput.placeholder = "";
    console.log("You in!");
  });
    
    //* input/change
    myInput.addEventListener('change', () => {
        console.log('changed');
    }) //* difference : input work every times you type but work on you blur and value have changed 
    myInput.addEventListener('input', () => {
        console.log('input');
    })
    myInput.addEventListener('input', () => {
        console.log(this); // มันไปเรียกตัวข้างนอก ไม่ใช่ตัวเองเพราะ () => เป็น anonymoous fn ควรประกาศ fn
    })
    myInput.addEventListener('input', function () {
        console.log(this); // ควรประกาศ fn ถ้าอยากใช้ this
        console.log(this.value);
    })
    myInput.addEventListener('input', (event) => {
        console.log('target : ', event.target.value); //ได้เหมือนกัน แนะนำ เพราะเอา event ไปทำอย่างอื่นได้ต่อ
    })

    //* stopPropagation
    let outside = document.getElementById('outside')
    let inside = document.getElementById('inside')

    outside.addEventListener('click', () => {
        console.log('outside');
    })
    inside.addEventListener('click', (event) => {
      console.log('inside');
      event.stopPropagation() //* event ไม่เกี่ยวข้องกับ parent
    })
});
