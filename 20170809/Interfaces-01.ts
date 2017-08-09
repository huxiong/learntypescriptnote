/**
 * 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。
 */

 /**
  * 接口
  * 定义了一个Person接口，此类型的对象包含2个属性,且需要完全一致
  */
 interface Person {
     name: string;
     age: number | string;
 }

 let studentA: Person = {
    name: "xiong.hu",
    age: "25"
 };


 /**
  * 可选属性
  * interface可以定义可选属性,表示该属性可以不存在，但是对象中不能有未定义的属性（接口属性数量 >= 对象属性数量）
  */
interface Chinese {
    name: string;
    age: string | number;
    sex?: string;   //可选属性
}

let worker: Chinese = {
    name: "xiong.hu",
    age: 25,
    sex: "male"
};

let singer: Chinese = {
    name: "rachrel",
    age: 18
};

/**
 * 任意属性
 * interface可以拥有任意属性,如下
 * 使用 [propName: string] 定义了任意属性取 any 类型的值。
 * 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性：
 */
interface Human {
    name: string;
    age?: number | string;
    [propName: string]: any;
}

let leaderA: Human = {
    name: "Xi Dada",
    age: 65,
    like: "pingpang"
};

let leaderB: Human = {
    name: "Aobama",
    cords: 88
};

/**
 * 只读属性 readonly
 * 只能在创建的时候被赋值(并且是在给对象赋值时，而不是在给只读属性赋值时)
 */
interface Animate {
    readonly id: number | string;
    type: string;
    age?: number | string;
    [propName: string]: any;
};

let tiger: Animate = {
    id: 1,
    type: "cat",
    age: 3,
    cords: "danger"
};

// tiger.id = 2;