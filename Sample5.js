/* 
자바스크립트의 객체는 function 타입과 object 타입 2가지가 있다.
그런데, 보통 function 타입 객체는 함수라 부른다.
따라서, 자바스크립트 객체라 부르는 것은 object 타입의 객체를 가리킨다.
 */

// 생성 방법1 - new 키워드를 사용하는방법
const o1 = new Object();
o1.name = '몰라';
o1.age = 18;
o1.another = {};
o1.another.name = '나도';
o1.another.age = 28;

//생성 방법2 - literal 사용하는 방법
const o2 = {};
o2.name = '야';
o2.age = 38;

//생성 방법3 - (J)ava(S)cript (O)bject (N)otation : 자바스크립트 객체 표기
const o3 = {
    name: '너도',
    age: 48,
    another: {
        name: '어쩔티비',
        age: 58
    }
}

console.log(o1);
console.log(o1.another);
console.log(o2);
console.log(o3);
console.log(o3.another);

console.log('-------------------------------');

/* xmlHttpRequest 호스트 객체를 사용해서 통신한다.*/
const response = "{'no':1,'name':'저쩔초고속블랜딩믹서기','email':'abc@def.com'}";
const userVo = eval("(" + response + ")");  //eval : string to javascript code
console.log(userVo);