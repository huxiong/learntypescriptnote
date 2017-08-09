/**
 * 函数的定义
 * 1.函数声明
 * 2.函数表达式
 */

/**
  * 函数声明
  */
function sum(x : number, y : number) : number {
    let args: IArguments = arguments;
    let sum: number;
    Array
        .prototype
        .slice
        .apply(args)
        .forEach(element => {
            sum += element;
        });
    return sum;
}

/**
 * 函数表达式
 */
// var selfSum =  function selfSum(x:number,y:number): number {     let args:
// IArguments = arguments;     let sum:number;
// Array.prototype.slice.apply(args).forEach(element => {         sum +=
// element;     });     return sum; }
let selfSum : (x : number, y : number) => number = function (x : number, y : number) : number {
    let args: IArguments = arguments;
    let sum: number;
    Array
        .prototype
        .slice
        .apply(args)
        .forEach(element => {
            sum += element;
        });
    return sum;
};

/**
 * 接口函数
 * 主要用于定义可选的参数
 * 需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了：
 */
function buildName(firstName : string, lastName?: string) : string {

    if(lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}

buildName("xiong", "hu");

/**
 * 函数参数的默认值
 */
function defaultVlaue(firstName : string, lastName : string = "hu") {
    return firstName + "  " + lastName;
};

/**
 * 剩余参数 ...rest
 */
function push(array : any[], ...items) {
    items
        .forEach(function (item) {
            array.push(item);
        });
}

push([], 1, 2, 3);

/**
 * 重载
 * 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
 */
//非重载实现
function selfReverse(x : number | string) : number | string {
    if(typeof x === "number") {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === "string") {
        return x.split('').reverse().join('');
    }
};


//重载实现
function _selfReverse(x:number):number;
function _selfReverse(x:string):string;
function _selfReverse(x : number | string) : number | string {
    if(typeof x === "number") {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === "string") {
        return x.split('').reverse().join('');
    }
};
