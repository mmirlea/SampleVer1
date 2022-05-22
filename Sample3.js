// 변수의 범위
// 1. 자바스크립트는자바와 같은 block scope는 없다.
// 2. function의{} 안에서 변수에 var를 사용하게 되면 function scope가 된다.
// 3. let(es6), const(es6)는 Block Scope를 만든다.

var i = 10;
var f = function () {
    var i = 20;
    j = 100;
    console.log(i);
    i = j - i;
    console.log(i);
}
f();


let g = function(){
    let a = 20;
    const b = 100;
    console.log(a);
    a = b - a;
    console.log(a);
}
console.log('-------------------------------');

console.log(i); //var 전역변수여서 scope가 끝난 후에도 호출됨
console.log(j); // 100이나옴