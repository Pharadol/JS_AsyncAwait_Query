// let url = "https://fakerapi.it/api/v1/persons";

//simple call
// fetch(url)
//   .then((res) => res.json())
//   .then(console.log); //.then again because when hover .json() will show <Promise>

// function fetchAsync(url) {
//   return new Promise((resolve, reject) => {   //เขียนแบบนี้ต้อง return newPromise ตลอด แต่ถ้า..
//     fetch(url)
//       .then((res) => res.json())
//       .then(resolve)
//       .catch(reject);
//   });
// }

async function fetchAsync(url) {
  // แบบนี้...
  let res = await fetch(url);
  let data = await res.json();
  return data;
}

async function main() { //test
  // จะสามารถ wrapped ไว้ได้เลย เปืดมาก็ได้ของที่ต้องการเลย..
  let data = await fetchAsync("https://fakerapi.it/api/v1/persons"); //และสามารถเรียก await ซ้ำได้ด้วย
  console.log(data);
}
// main() //test

let getData = document.forms.getData;
let fakerUrl = new URL("https://fakerapi.it/api/v1/persons");
let result = document.getElementById("resultPerson");
// let { getData } = document.forms // same above line

getData.addEventListener("submit", async (e) => {
  e.preventDefault();
  result.innerHTML = "";
  let formData = new FormData(getData); // อีกวิธีในการ get data form
  for (let [key, value] of formData.entries()) {
    fakerUrl.searchParams.set("_" +key, value);
  }
  console.log(fakerUrl.toString());
  let data = await fetchAsync(fakerUrl.toString());
  for (let person of data.data) {
    console.log(`${person.firstname}  ${person.lastname}  [${person.gender}]`);
    // let string = JSON.stringify(person); // obj json => string
    // JSON.parse() // string => obj json
    let li = document.createElement("li");
    li.innerText = `${person.firstname}  ${person.lastname}  [${person.gender}]`;
    result.appendChild(li);
  }
});
