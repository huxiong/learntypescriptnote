/**
 * 联合类型（Union Types）： 表示取值可以为多种类型中的一种。
 */
var unionTypes;
unionTypes = 7;
unionTypes = "aaa";
/**
 * 访问联合类型的属性或方法
 * 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
 */
function getString(someting) {
    return someting.toString();
}
/**
 * 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
 */
var testThing;
testThing = "aaa";
console.log(testThing.length);
testThing = 7;
// console.log(testThing.length);
