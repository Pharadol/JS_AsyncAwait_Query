
//* recursive : เรียก fn วน เรื่อย แต่ระวัง infinite
function pow(x, y) {
    if (y == 1) {
        return x
    }
    return x * pow(x, y - 1)
}

console.log(3 ** 1);
console.log(3 ** 2);
console.log(3 ** 3);

console.log(pow(3, 1));
console.log(pow(3, 2));
console.log(pow(3, 3));

//* chaning
class BitNumber {
    result = 1
    increase() {
        this.result *= 2
        return this
    }
}

let bit = new BitNumber()
bit.increase() //2
bit.increase() //4
bit.increase() //8
bit.increase() //16
bit.increase() //32

console.log(bit.result) //32

let bit2 = new BitNumber()
bit2.increase().increase().increase().increase().increase()
console.log(bit2.result);