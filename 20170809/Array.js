/**
 * 定义数组有多种方式
 */
/**
 * 方式一：
 *  类型[]
 */
var numberArr = [1, 2, 3];
var unionArr = [1, 2, "man"];
var list = ["小明", 1, { name: "王明明" }];
/**
 * 方式二
 * Array<elemType>
 */
var fibonacci = [1, 1, 2, 3, 5];
var interNumArr = [1, 2, 3];
var interNumStrArr = ["a", 1, 2, 3];
/**
 * 类数组 IArguments, NodeList, HTMLCollection
 */
function sum() {
    var args = arguments;
}