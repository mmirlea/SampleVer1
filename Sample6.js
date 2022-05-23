/* 
생성자 함수로 다수의 객체 생성하기
 */

// 일반함수(관례 소문자로 시작)
const myFunction = function () {
    console.log('일반함수');
}


/**
 * 생성자 함수(관례 대문자로 시작)
 * @param {string} name 이름
 * @param {number} age 나이
 */
const myObject = function (name, age) {
    this.name = name;
    this.age = age;
}

myObject('1111','aasdqd')

const o4 = new myObject('먹는', '05');
const o5 = new myObject('샘물', 23);

console.log(myFunction);

console.log(o4);
console.log(o5);