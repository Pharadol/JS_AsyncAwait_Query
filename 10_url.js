console.log(location);

let testUrl1 = new URL('http://pc-gaming.xyz/search?cpu=i7&gpu=rtx&ram=8gb')

// console.log(new URL(url));
testUrl1.searchParams.forEach((v, k) => {
    console.log([k, v]); // show params
})

testUrl2 = new URL('https://myweb.com/content')
let query = [
    { key: 'keyword', value: 'javascript' },
    { key: 'section', value: '2'}
]

for (let q of query) {
    testUrl2.searchParams.append(q.key, q.value) //add
}

console.log(testUrl2.toString());

// mini work shop send data through url
let calc = document.getElementById('calc')
let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let result = document.getElementById('resultCalc')
let url = new URL(location.href)

calc.addEventListener('submit', (e) => {
    e.preventDefault()
    url.searchParams.set('n1', n1.value) // set if does't have 
    url.searchParams.set('n2', n2.value)
    location.href = url.toString()
})

if (url.searchParams.has('n1') && url.searchParams.has('n2')) {
    let num1 = url.searchParams.get('n1')
    let num2 = url.searchParams.get('n2')
    n1.value = num1
    n2.value = num2
    result.innerText = +num1 + +num2
}