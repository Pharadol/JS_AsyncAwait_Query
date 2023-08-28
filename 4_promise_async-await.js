//* Asynchronous: run พร้อมกัน,  Synchronous :run ตามลำดับ
// js ปกติแล้ว run แบบ  Asynchonous ข้อเสึยคือถ้ามี A, B, C จะนำ A,V มาใช้ใน C ยาก
// useful ของ Async คือ ไม่ต้องรอโหลดทีเดียว ux ดีขึ้น

// Promise = async/sync : task เราทำ async ไว้แล้วนะ ถ้าได้แล้วดรา sync ต่อให้เลย(.then)

//* Promise!!

function setDelayPromise(second) {
  return new Promise((resolve, reject) => {
    // นิยมใช้ resolve, reject ไม่ควรเปลี่ยน
    if (typeof second !== "number") {
      // ตล้าย throw new Error('Not a number)
      return reject(new Error("Promise: Not a number"));
    }
    setTimeout(() => {
      // return 'Success'
      return resolve("Promise: Success" + second);
    }, second * 1000);
  });
}
// setDelay return Promise ใน Promise มี callback : callback มี resolve, reject เกิดตามเงื่อนไขที่กำหนด

let whenSuccess = (string) => {
  console.log("Data?", string);
};

let whenError = (err) => {
  console.log("Error?", err);
};

// setDelay(2).then((string) => {
//     console.log(string);
// })
setDelayPromise(3).then(whenSuccess).catch(whenError);
setDelayPromise(2).then(whenSuccess).catch(whenError);
setDelayPromise(1).then(whenSuccess).catch(whenError);
setDelayPromise("abc").then(whenSuccess).catch(whenError);

//* Callback!!: ทำงานได้เหมือน promise แต่ลำดับไม่ได้
function setDelayCallback(second, success, error) {
  if (typeof second !== "number") {
    return error(new Error("Callback: Not a nubmer"));
  }
  setTimeout(() => {
    return success("Callback: Success" + second);
  }, second * 1000);
}

setDelayCallback(3, whenSuccess, whenError);
setDelayCallback(2, whenSuccess, whenError);
setDelayCallback(1, whenSuccess, whenError);
setDelayCallback("abc", whenSuccess, whenError);

// callback hell : ทำ sync ใน acync คือ ให้ async ทำงานตามลำดับ
// setDelayCallback(
//   3,
//   (str1) => {
//     console.log(str1);
//     setDelayCallback(
//       2,
//       (str2) => {
//         console.log(str2);
//         setDelayCallback(
//           '1',
//           (str3) => {
//             console.log(str3);
//           },
//           whenError
//         );
//       },
//       whenError
//     );
//   },
//   whenError
// );

//* --------------------อยากให้ promise ทำงานแบบตามลำดับ ซึ่งก็คือ Promise, Async/Await ** ง่ายกว่า callback hell เยอะ
// let run = async function () {}
// run = async () => {}
async function run() {
  try {
    console.log("Promise, Async/Await");
    let str1 = await setDelayPromise(3); // await ใช้ได้ต้องมี async
    console.log(str1);
    let str2 = await setDelayPromise(2);
    console.log(str2);
    let str3 = await setDelayPromise("1");
    console.log(str3);
  } catch (error) {
    console.log("Error? ", error);
  }
}
//* Async/Await ใช้กับ Promise ได้เท่านั้น
//* จับ err ได้ัด้วย
run();

//* ลองใช้งานจริง จาก
fetch("https://burh") // async
  .then((response) => {
    response
      .json() // hover .json ดูจะเห็นว่าเป็น Promise จึงต้อง .then อีกรอบหนึ่ง
      .then((data) => {
        console.log(data);
      });
  })
  .catch((err) => {
    // ถ้า then ไม่ catch จะ error: uncough
    console.log("????", err);
  });

//* เป็น
async function queryData() {
  try {
    let response = await fetch("https://fakerapi.it/api/v1/persons");
    let data = await response.json();
    console.log("DATA !!!!!", data);
  } catch (error) {
    console.log("?????", error);
  }
}
queryData();

console.log("----------------------------------------------------test");
//* test what you get?
function isNumber(n) {
  if (typeof n !== "number") {
    throw new Error("Not a number");
  }
}
try {
  isNumber(1);
} catch (err) {
  console.log(err);
}
// change isNumber => callback
function isNumberCallback(n, cb) {
  if (typeof n !== "number") {
    return cb(new Error("isNumCallback: Not a number"));
    }
    return cb()
}

isNumberCallback("1", (err) => {
  console.log(err);
});

// change isNumber => promise
async function isNumberAsync(n) {
    return new Promise((resolve, reject) => {
        if (typeof n !== 'number') {
            return reject('isNumPromise: not a number')
        }
        return resolve('isNumPromise: Number!!')
    })
}

isNumberAsync(1).then(console.log).catch(console.log)

async function runIsNumber() {
    try {
        await isNumberAsync('1')
    } catch (err) {
        console.log(err);
    }
}
runIsNumber()