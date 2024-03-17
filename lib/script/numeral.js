let a = Number("1,000"); //log => NaN
let b = Number("1000");
let c = numeral('1,000')
let d = numeral('100k')
let e = numeral('100.53')

console.log(a, b); // NaN 1000
console.log(c, d);

let set = [c, d, e]

for (let item of set) {
  console.log(item.format('0,0.00'));
  console.log(item.format('0 a'));
}

//
let inputFile = document.getElementById('inputFile')
let sizeOutput = document.getElementById('size')

inputFile.addEventListener('input', (e) => {
  e.preventDefault()
  let fileSize = numeral(e.target.files[0].size).format('0.00b') // 0.00b or 0.00ib 
  sizeOutput.innerHTML = fileSize
})