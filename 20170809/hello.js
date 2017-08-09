function sayHello(person) {
    return "hello" + person;
}
;
var user = "xiong.hu";
// let user = [0,1,2];
console.log(sayHello(user));
/**
 * 数据类型
 */
// boolean
var isDone = true;
// number
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法，编译为ES5时，会转换为10进制
var binaryLiteral = 10;
// ES6 中的八进制表示法，编译为ES5时，会转换为10进制
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
// string
var myName = 'xiong.hu';
var myAge = 25;
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
// void
function alertName() {
    alert("Hello");
}
// any
var anyType = "seven";
console.log(anyType.myName);
anyType = 7;
