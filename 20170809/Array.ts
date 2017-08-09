/**
 * 定义数组有多种方式
 */

 /**
  * 方式一：
  *  类型[]
  */
let numberArr: number[] = [1,2,3]; 

let unionArr: (number | string)[] = [1,2,"man"];

let list: any[] = ["小明",1, {name: "王明明"}];


/**
 * 方式二
 * Array<elemType>
 */
let fibonacci: Array<number> = [1, 1, 2, 3, 5];


/**
 * 方式三
 * 接口描述数组
 */
interface NumberArray {
    [index: number]: number;
}

let interNumArr: NumberArray = [1,2,3];

interface NumStrArray {
    [index: number]: number | string;
}

let interNumStrArr: NumStrArray = ["a",1,2,3];


/**
 * 类数组 IArguments, NodeList, HTMLCollection
 */

function sum() {
    let args: IArguments = arguments;
}