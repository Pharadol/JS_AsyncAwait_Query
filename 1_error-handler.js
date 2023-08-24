// -------------------------------------------Error handler tryCatch
function checkNumber(n) {
  if (typeof n !== "number") {
    throw new Error("Not a number");
  }
  return true;
}

try {
  let a = checkNumber(1);
  let b = checkNumber("1");
  console.log("try"); // above line have err this line not excute
} catch (error) {
  console.log(error.message);
  console.log(error.stack); // for dev
} finally {
  console.log("END"); // ไม่จำเป็ยต้องมีก็ได้ ถ้าเขียนดีแล้ว
}

// --------------------------------------------------Call back
function checkNumberCallback(n, callback) {
    if (typeof n !== 'number') {
        return callback(new Error('Not a Number'))
    }
    callback(null, n)
}
function handler (err, data) {
    err ? console.warn(err) : console.log(data)
}
checkNumberCallback(1, handler)
checkNumberCallback('1', handler)
checkNumberCallback(2, handler)
checkNumberCallback(3, handler)
checkNumberCallback(4, handler)

