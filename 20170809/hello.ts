function sayHello(person: string) {
    return "hello" + person;
};

let user = "xiong.hu";
// let user = [0,1,2];

console.log(sayHello(user));



/**
 * 数据类型
 */
// boolean
let isDone:boolean = true;

// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法，编译为ES5时，会转换为10进制
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法，编译为ES5时，会转换为10进制
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;


// string
let myName: string = 'xiong.hu';
let myAge: number = 25;
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;


// void
function alertName(): void {
    alert("Hello")
}

// any
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
let anyType: any = "seven";
console.log(anyType.myName);
anyType = 7;