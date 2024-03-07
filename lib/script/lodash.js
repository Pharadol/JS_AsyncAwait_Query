//**----------------- Array */

let set = _.range(10); // [0,1,2,...,9]
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6, 7];
let c = [6, 9, 8, 7];

console.log(set);
console.log(_.chunk(set, 3));
console.log(_.difference(a, b)); // [1, 2]
console.log(_.difference(b, a)); // [6, 7]
console.log(_.xor(a, b));
console.log(_.xor(b, a));
console.log(_.intersection(a, b));
console.log(_.concat(a, b)); // combine
console.log(_.union(a, b)); // combine except duplicate value
console.log(_.last(a)); // 5
console.log(_.uniq([...a, ...b]));

console.log(c.sort().reverse());
console.log(_.orderBy(c, "desc"));
console.log(_.now());

//**----------------- Collection */
let users = [
  { user: "barney", age: 36, active: true },
  { user: "John", age: 36, active: false },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];

console.log(users.find((obj) => obj.age == 36 && !obj.active)); //exiting
console.log(_.find(users, (obj) => obj.age == 36)); // support callback
console.log(_.find(users, { age: 1, active: true })); // obj condition
console.log(_.filter(users, { active: true }));
console.log(_.countBy(users, (obj) => obj.user.length));
console.log(_.groupBy(users, (obj) => obj.user.length));
console.log(_.sample(users));
console.log(_.sampleSize(users, 2));
console.log(_.shuffle(set));
console.log(_.size(users)); // both count array and obj

function square(n) {
  return n * n;
}
_.map([4, 8], square);
// => [16, 64]
_.map({ a: 4, b: 8 }, square);
// => [16, 64] (iteration order is not guaranteed)

//**----------------- function */
let textarea = document.getElementById("typeToSave");

// let saveFn = _.after(10, (val) => {  // save after type reach 10 character
//   console.log('SAVED : ', val);
// })
// _.before : save until x number

let saveFn = _.debounce((val) => {
  // ._throttle : reverse of _.debounce => do something continue until x time (rounds)
  console.log("SAVED: ", val);
}, 3000); // save after delay type 3s
textarea.addEventListener("input", (e) => {
  saveFn(e.target.value);
});

//_.aonce just run 1 time

//**----------------- Lang */
let object = { a: 1 };
let other = { a: 1 };
_.isEqual(object, other);
// => true
object === other;
// => false

let d = false;
let e = 0;
let f = "";
let g = [];
let h = {};
console.log(_.isEmpty(h) ? "Empty" : "Not Empty");

let l = { hp: 50, mp: 10, status: { poison: false } };
// let j = l
j = _.cloneDeep(l);

j.hp = 45;
// ปกติจะ 45 ทั้งคู่ ซึ่งไม่ควร จึงต้องใช้ _.cloneDeep
console.log(l);
console.log(j);

//**----------------- Object */
(data = {
  id: 1,
  firstname: "Claud",
  lastname: "Wilderman",
  email: "nyah.hauck@yahoo.com",
  phone: "+1396993890079",
  birthday: "2017-05-30",
  gender: "male",
  website: "http://armstrong.org",
  image: "http://placeimg.com/640/480/people",
}),
  console.log(_.pick(data, ["firstname", "lastname", "age"]));
console.log(_.omit(data, ["firstname"]));
