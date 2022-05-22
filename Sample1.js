/* 
 [기본타입(primitive type), 유사객체]
 1.number
 2.boolean
 3.string
 4.undefined
 
 [객체: new 생성자 함수를 사용해서 객체를 생성]
 Number(); --> object type의 객체 생성
 Boolean();--> object type의 객체 생성
 String(); --> object type의 객체 생성
 Function()--> function type의 객체 생성
 Object()  --> object type의 객체 생성
 Array()   --> object type의 객체 생성
 
 자바스크립트를 구분하는 또다른 방법
 1. 내장(Built-In, Native) 객체 (자바스크립트 엔진안에 미리 정의되어 있는 객체) -ex) push
      Number, Boolean과 같은 생성자 함수...
      parseInt(), setTimeout. setInterval 와 같은 일반 함수
      window 객체
 2. 호스트 객체
      자바스크립트가 접근하기 위한 브라우저의 객체
      document, location, ....
 3. 사용자 객체
      자바스크립트 코드가 엔진에 의해 실행되면서 생성되는 객체들
 */


let u;
const i = 10;
const b = true;
const s = 'Hello World';

const fn = function (a, b) { return a + b };
const o = {};
const a = [];

console.log(i + ":" + typeof (i));
console.log(b + ":" + typeof (b));
console.log(s + ":" + typeof (s));
console.log(fn + ":" + typeof (fn));
console.log(o + ":" + typeof (o));
console.log(a + ":" + typeof (a));

const i2 = new Number(10);
const b2 = new Boolean(false);
const s2 = new String('Hello World');
const fn2 = new Function('a', 'b', 'return a+b;');
const o2 = new Object();
const a2 = new Array();

console.log(fn2 + ":" + typeof (fn2));
console.log(o2 + ":" + typeof (o2));
console.log(a2 + ":" + typeof (a2));

console.log(i2 + ":" + typeof (i2));
console.log(b2 + ":" + typeof (b2));
console.log(s2 + ":" + typeof (s2));