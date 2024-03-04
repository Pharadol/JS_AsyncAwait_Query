// console.log(new Date());
// console.log(new Date('2024-03-30T09:03:03'));
console.log(Date.now()); // get Unix TimeStamp (Time from beginging computer [mili sec])

let d = new Date();

console.log(d);
console.log(d.getDate());
console.log(d.getDay()); // Mon-Sun
console.log(d.getMonth()); //0-11
console.log(d.getFullYear());
console.log(d.getTime()); // Unix timeStamp
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getMilliseconds());

d.setFullYear(2024);
console.log(d.getFullYear());

// format

console.log(d.toLocaleString("th-TH"));
console.log(
  d.toLocaleString("th-TH", {
    dateStyle: "full",
    timeStyle: "short",
    calendar: "iso8601", // ค.ศ.
    timeZone: "Asia/Bangkok",
  })
);
console.log(d.toLocaleString("en-US"));

//** -----------------Practies */
let date1 = document.getElementById("date1");
let date2 = document.getElementById("date2");
let dates = [0, 0];
let result = document.getElementById("distance-time");

let onDateInput = (index) => {
  return (event) => {
    // same line 60
    let date = new Date(event.target.value);
    dates[index] = +date;
    getResult();
  };
};

let getResult = () => {
  if (dates.every((value) => value > 0)) {
    // if (dates[0] > 0 && dates[1] > 0 ) { เหมือนบรรทัดบน
    let diff = dates[0] - dates[1];
    let diffDate = diff / 1000 / 60 / 60 / 24;
    result.innerText = Math.abs(diffDate);
  }
};

date1.addEventListener("input", onDateInput(0));
date2.addEventListener("input", onDateInput(1));

// date1.addEventListener('input', (event) => {
//     // console.log(event.target.value);
//     let date = new Date(event.target.value)
//     dates[index] = +date
// })
//** -----------------TIME */
function tellTime() {
  console.log(new Date());
}

let clock = setInterval(tellTime, 1000)

setTimeout(() => {
  clearInterval(clock)
}, 5000)

//** -----------Test Reaction time [Practies]*/
let testArea = document.getElementById('area-test')
let step = 'ready'
let lefTime
let diffTime
let allStep = [
  {
    state: 'ready',
    text: 'When the orange box turns green, click quickly as you can.<br>Click to start.',
  },
  {
    state: 'start',
    text: 'When the orange box turns green, <br>click quickly as you can.'
  },
  {
    state: 'cheat',
    text: 'Too soon! <br> Click to try again.'
  },
  {
    state: 'click',
    text: 'Click!!'
  }
]
function changeStep(state, diffTime) {
  allStep.map(item => {
    if (item.state == state) {      
      testArea.removeAttribute('class')
      testArea.classList.add(item.state)
      testArea.innerHTML = diffTime ? `Your Score : ${diffTime} ms!! <br> ${item.text}` : item.text
      step = item.state
    }
  })
}

function randomDelay(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function switchToClick() {
  let delay = randomDelay(2000, 5000);
  setTimeout(() => {
    if (step === 'start') {
      changeStep('click')
    }
    lefTime = Date.now()
  }, delay);
}


testArea.addEventListener('click', () => {
  if (step === 'ready') {
    changeStep('start')
    switchToClick()
  } else if (step === 'start') {
    changeStep('cheat')
  } else if (step === 'cheat') {
    changeStep('ready')
  } else if (step === 'click') {
    let hitTime = Date.now()
    diffTime = +hitTime - +lefTime
    changeStep('ready', diffTime)
  }
});