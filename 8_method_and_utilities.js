//** ----------------------------------------- number
let a = 10; // a = instance of number
let b = "string"; // b = instance of string
let c = 5.3242343;
let d = 3214341545;

let result1 = +a;
let result2 = +b;
let result3 = 10 / 0;

console.log(Number.isNaN(result1));
console.log(Number.isNaN(result2));
console.log(Number.isFinite(result3));
console.log(+c.toFixed(2));

console.log(
  d.toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
  })
);
console.log(d.toLocaleString("th-TH-u-nu-thai"));

//* workshop currency exchange
document.addEventListener("DOMContentLoaded", () => {
  let exchangeRate = 0;
  let exchangeCurrency = document.getElementById("exchangeCurrency");
  let exchangeResult = document.getElementById("exchangeResult");

  async function getCurrency() {
    let res = await fetch("https://api.frankfurter.app/latest?from=USD&to=THB");
    let data = await res.json();
    exchangeRate = data.rates.THB;
    console.log(data);
  }


  exchangeCurrency.addEventListener("input", (event) => {
    let value = +event.target.value;
      let output;
      if (value > 0 && !Number.isNaN(value)) {
          let lang = 'th-TH'
          let defaultOptions = {
              style: 'currency',
              currencyDisplay: 'name'
          }
          let baht = value * exchangeRate
          let usd = value.toLocaleString(lang, {
              ...defaultOptions,
              currency: 'USD',
          })
          let thb = baht.toLocaleString(lang, {
              ...defaultOptions,
              currency: 'THB'
          })
          output = `${usd} = ${thb}`
      } else {
          output = 'Please fill any number'
      }
    exchangeResult.innerText = output;
  });
    
  getCurrency();


//** ----------------------------------------- string
  let str1 = 'sdafdf '
  let str2 = 'Lorem ipsum dolor sit amet. Lorem'
  let str3 = 'https://www.rrrr.org/'
  let str4 = 'name=John&age=18&grade=3.5'

  console.log(str1.charAt(3));
  console.log(str1[3]);
  console.log(str1.toLowerCase());
  console.log(str2.toUpperCase());

  console.log(str2.includes('ipsum'));
  console.log(str3.startsWith('https'));
  console.log(str3.endsWith('com'));
  console.log(str3.indexOf('www'));

  console.log(str2.slice(6, 11));

  console.log(str2.replace('Lorem', 'LOREM')); // only replace first detect
  console.log(str2.replace(/Lorem/g, 'LOREM')); // replace all

  let ids = [1, 2, 305, 20964] // eg student ID 
  for (let id of ids) {
    console.log((String(id).padStart(5, 0))); // (length, replace) padStart เติมด้านหน้า
    // console.log((String(id).padEnd(5, 0))); //  padEnd เติมด้านหลัง
  }
  console.log(str2.slice(6, 11)); // => ipsum
  console.log(str2.slice(-11, -7)); // => amet
  console.log(str1.trim()); // delete font and back space
  console.log(str1.repeat(3));
  for (let q of str4.split('&')) { // split text to array
    console.log(q.split('='));
  }



//** -----------------Regular Expression */
// https://regexr.com/


//** -----------------Array */


//** -----------------Object */
  let a = { name: 'Sam', age: '24' }
  let b = { name: 'Bob', age: '42' }
  
  console.log({ a, b });
  console.log({ ...a, ...b }); // combine
  console.log(Object.assign(a, b)); // combine

  console.log(Object.keys(a)); // output array formm
  console.log(Object.values(a)); // output array formm
  console.log(Object.entries(a)); // obj => array

  for (let key in a) {
    console.log(`${key} = ${a[key]}`);
  }
  for (let [key, value] of Object.entries(a)) {
    console.log(`${key}=${value}`);
  }

  let c = [['a', 1], ['b', 2], ['c', 3]]
  console.log(Object.fromEntries(c)); // array to obj


  //------ task
  let fruits = [
    {name: 'Apple', grade: 'A', price: 15},
    {name: 'Oragnge', price: 20},
    {name: 'Banana', grade: 'A', price: 25},
    {name: 'Melon', price: 30},
  ]
  // fruits.map() => return Object.assign(...a, { grade: 'A' })
  let output = fruits.map((value) => {
    return Object.assign(value, { grade: 'A'})
  })
  console.log(output);
  console.log(output.map(value => value.name));




  //** -----------------Math */
  console.log(22 / 7);
  console.log(Math.PI);

  let dataNum = [1,4,6,9]
  console.log(Math.max(...dataNum));

  let d = 10
  let e = -10
  let f = -3.783
  
  console.log(Math.abs(d)); // transfrom to positive number
  console.log(Math.abs(e));

  console.log(Math.PI.toFixed(2));
  console.log(Math.floor(f)); // up
  console.log(Math.ceil(f));  // down
  console.log(Math.trunc(f));  // same

  function random(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min+1)) +min
  }
  console.log(random(1, 10));

  //----- mini work shop lottery
  let p = document.getElementById('lottery')
  let maxRandom = 1000
  let lotteries = []
  let repeat = 3

  // random lottery 6 digit with no repeat
  for (let c = 0; c < maxRandom; c++) {
    let lottery
    // do while loop = first do 1 time => while(condition)
    do {
      lottery = String(random(0, 999999)).padStart(6, '0')
    } while (lotteries.includes(lottery))
    lotteries.push(lottery)
  }

  // check repeat
  for (let item of lotteries) {
    let originIndex = lotteries.indexOf(item)
    // let g = [1, 2, 3, 3, 4, 5]
    // console.log(g.includes(3, 1)); //, 1 means skin position index at 0 find 1...
    if (lotteries.includes(item, originIndex + 1)) {
      console.log('repeat : ', item);
      repeat++
    }
  }

  console.log('Repeat lottery : ', repeat);
  p.innerText = lotteries.sort().join(', ')
});




