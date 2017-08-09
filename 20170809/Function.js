/**
 * 函数的定义
 * 1.函数声明
 * 2.函数表达式
 */
/**
  * 函数声明
  */
function sum(x, y) {
    var args = arguments;
    var sum;
    Array
        .prototype
        .slice
        .apply(args)
        .forEach(function (element) {
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
var selfSum = function (x, y) {
    var args = arguments;
    var sum;
    Array
        .prototype
        .slice
        .apply(args)
        .forEach(function (element) {
        sum += element;
    });
    return sum;
};
/**
 * 接口函数
 * 主要用于定义可选的参数
 * 需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了：
 */
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
buildName("xiong", "hu");
/**
 * 函数参数的默认值
 */
function defaultVlaue(firstName, lastName) {
    if (lastName === void 0) { lastName = "hu"; }
    return firstName + "  " + lastName;
}
;
/**
 * 剩余参数 ...rest
 */
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
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
function selfReverse(x) {
    if (typeof x === "number") {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === "string") {
        return x.split('').reverse().join('');
    }
}
;
function _selfReverse(x) {
    if (typeof x === "number") {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === "string") {
        return x.split('').reverse().join('');
    }
}
;
