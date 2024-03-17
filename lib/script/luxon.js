// manage dates and times
const { DateTime, Settings } = luxon;

Settings.defaultLocale = "th";
Settings.defaultOutputCalendar = "iso8601"; // default ค.ศ.

let d1 = DateTime.local(2000, 1, 30);
let d2 = DateTime.now();
let d3 = DateTime.fromMillis(0);
let d4 = DateTime.fromISO("2000-01-30");
let d5 = DateTime.fromFormat("30/1/2000", "d/M/y"); // TokenF

// console.log(luxon.DateTime.local(2000, 1, 30));
console.log(d1);
console.log(d1.day);
console.log(d2);
console.log(d3.year);
console.log(d4);
console.log(d5);

console.log(d2.toFormat("วันที่ d เดือน MMM ปีค.ศ. yy")); // ใช้ Token ของเราเอง

//* compare */
let dt = new Date();
let lu = DateTime.now();

console.log(dt.toLocaleString("th", { dateStyle: "long", timeStyle: "long" }));
console.log(lu.setLocale("th").toLocaleString(DateTime.DATETIME_HUGE));
console.log(lu.setLocale("th").toLocaleString(DateTime.DATETIME_MED));
console.log(lu.toLocaleString(DateTime.TIME_24_WITH_SHORT_OFFSET)); // th from 4 line
console.log(lu.toLocaleString({ ...DateTime.DATE_HUGE, era: "long" }));
console.log(lu.toLocaleString({ ...DateTime.DATE_HUGE }));

//* Math */
let d6 = DateTime.now();
let d7 = DateTime.local(2022, 1, 20);

console.log(d6.plus({ month: 1, day: 1 }).toISODate());
console.log(d6.minus({ month :1, day: 1}).toISODate());
console.log(d6 < d7);
console.log(d6.hasSame(d2, 'year'));
console.log(d6.diff(d7, ['month', 'day', 'year']).toObject());
console.log(d6.diff(d7, ['month','day','year']).toFormat('ห่างกัน M เดือน  d วัน h ชั่วโมง'));
console.log(d6.diffNow('month'));

//* ------------Practies /
let input = document.getElementById('date')
let age = document.getElementById('age')

input.addEventListener('input', (e) => {
  console.log(e.target.value);
  let birth = DateTime.fromISO(e.target.value)
  let now = DateTime.now()
  let d = now.diff(birth, ['year', 'month', 'day']).toObject() // toHuman() //23 ปี 7 เดือน และ7.631 วัน 
  let days = Math.floor(d.days)
  let months = Math.floor(d.months)
  let years = Math.floor(d.years)
  age.innerText = `${years} ปี ${months} เดือน ${days} วัน`
})
