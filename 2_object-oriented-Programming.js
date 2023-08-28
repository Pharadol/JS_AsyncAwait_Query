//*-------------------- Contructor แบบเก่า
function Mail({ sender, receiver, message }) {
  // upperCase first letter(PascalCase) ให้รู้ว่าเป็น constructor
  this.sender = sender || "no value";
  this.receiver = receiver || "no value";
  this.message = message || "no value";
  this.send = function () {
    return `From ${this.sender} to ${this.receiver}: ${this.message}`;
  };
}

//* Construct
let mail1 = new Mail({ sender: "A", receiver: "B", message: "Hello!" });
let mail2 = new Mail({ sender: "C", receiver: "D", message: "Goodbay!" });

console.log(mail1.send);
console.log(mail2.send);

//*-------------------- แบบใหม่
class Mail2 {
  version = "1.0.0";
  constructor({ sender, receiver, message }) {
    this.sender = sender || "no value";
    this.receiver = receiver || "no value";
    this.message = message || "no value";
  }
  send() {
    return `From ${this.sender} to ${this.receiver}: ${this.message}`;
  }
  static checkVersion() {
    return "1.0.0";
  }
}
console.log(Mail2.checkVersion()); // static method call ได้เลยไม่ต้อง construct เหมือน mail3,4 ก่อน

// mail3 construct = instance
let mail3 = new Mail2({ sender: "E", receiver: "F", message: "Goodafternoon" });
mail3.version = "1.1.0";
console.log(mail3.send());
console.log(mail3.version);

//mail4 construct = instance
let mail4 = new Mail2({});
mail4.sender = "AA";
console.log(mail4.send());
console.log(mail4.version);

//*-------------------- Example
let date = new Date("2023-01-31");
console.log(date.getDate());
console.log(date.getDay());
console.log(Date.now()); //จะได้เป็น unixtime (milisecond)

//*-------------------- Call แบบแก้ไข Constructor
let date2 = new Date("2023-8-25");
let dayName = ["อา", "จ", "อั", "พ", "พฤ", "ศ", "ส"];
console.log("dayName: ", dayName[date2.getDay()]);

Date.prototype.getDayName = function (lang) {
  let dayNameTh = ["อา", "จ", "อั", "พ", "พฤ", "ศ", "ส"];
  let dayNameEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return lang == "th" ? dayNameTh[this.getDay()] : dayNameEn[this.getDay()]; // use this เพราะเรียก Date ของตัวมันเอง Date
};
console.log(date2.getDayName());
console.log(date2.getDayName("th"));

//* ------------------------------------Getter/Setter
class CustomArray {
  _value = [];
  set value(n) {
    // setter: รับข้อมูลมาแล้วเอาไปทำอะไรดี
    this._value.push(n);
  }
  get value() {
    // getter: value เมื่อถูกเรียก
    return this._value.join("\n");
  }
}
let customArray = new CustomArray();
customArray.value = 1;
customArray.value = 2;
customArray.value = 3;

console.log(customArray.value);
console.log(customArray._value);

//* ------------------------------------Extends
class BaseStatus {
  name = "Player";
  baseClass = "Main";
  hp = 100;
  ap = 10;
  atk = 10;
  died = false;
  chanceSkill = 0;
  constructor(playerName) {
    this.name = playerName;
  }
  attack(target) {
    if (this.ap > 0 && target.hp > 0 && this.hp > 0) {
      target.hp -= this.atk;
      this.passiveSkills(target);
      this.ap--;
    }
    if (target.hp <= 0) {
      target.die();
    }
  }
  passiveSkills(target) {
    console.log(
      `${this.name}[${this.baseClass}] atk ${target.name}[${target.baseClass}]`
    );
    if (target.baseClass == "Tank" && Math.random() < target.chanceSkill) {
      target.hp += this.atk * 0.7;
      console.log(
        `+++ Healing ${target.name}[${target.baseClass}] + ${this.atk * 0.7}HP`
      );
    } else if (
      target.baseClass == "Hunter" &&
      Math.random() < target.chanceSkill
    ) {
      target.hp += this.atk;
      console.log(`MISS!!`);
    }

    if (this.baseClass == "Hunter" && Math.random() < this.chanceSkill) {
      target.hp -= this.atk;
      console.log(
        `***Double Attack!!** ${this.name} attack ${target.name} ${this.atk} damage`
      );
    }
  }
  die() {
    this.died = true;
  }
  outcomeTurnFight(target) {
    console.log(`=> ${target.name} [${target.baseClass}] | HP: ${target.hp}`);
  }
  showStartus() {
    return this.died
      ? `${this.name} [${this.baseClass}] has been died`
      : `${this.name} [${this.baseClass}] | HP: ${this.hp} | AP: ${this.ap} | ATK: ${this.atk}`;
  }
}

class Tank extends BaseStatus {
  // extends : defige new value of the class but canuse methods
  baseClass = "Tank";
  hp = 200;
  ap = 20;
  atk = 15;
  chanceSkill = 0.8;
}
class Hunter extends BaseStatus {
  baseClass = "Hunter";
  hp = 60;
  atk = 70;
  chanceSkill = 0.3;
}

let a = new Hunter("A");
let b = new Tank("B");

function showStat() {
  console.log(a.showStartus());
  console.log(b.showStartus());
}
showStat();

function A_atk_B() {
  a.attack(b);
  showStat();
}
function B_atk_A() {
  b.attack(a);
  showStat();
}

//* ------------------------------------Blinding
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

let food = new Food("cheese", 5);
console.log(food.name);
console.log(food.price);
console.log(food.category);

// class Product {
//   constructor(name, price) {
//     this.name = name
//     this.price = price
//   }
// }

// class Food extends Product {
//   category = 'food'
// }

// class Electornic extends Product {
//   category = 'elctornic'
// }

// let food = new Food('cheese', 30)
// console.log(food.name)
// console.log(food.price)
// console.log(food.category)

let student = {
  name: "John",
  grade: 3.5,
  showInfo() {
    console.log(`${this.name} Grade: ${this.grade}`);
  },
};
setTimeout(student.showInfo, 2000); // not work : การ binding หายไปแล้ว
setTimeout(student.showInfo.bind(student), 2000); // ต้องใช้แบบนี้แทน method สูญเสียตัวเองได้ถ้าส่งcallback ไปโดยได้ .bind ตัวมันเอง

  //functon: eg handle
  //method: showInfo ที่อยู่ภายใต้ student
let handle = student.showInfo.bind(student)

setTimeout(handle, 2000);
