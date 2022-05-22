let myLet;
const myConst = null;

console.log(myLet + ":" + myConst);
console.log(typeof (myLet) + ":" + typeof (myConst));

console.log(myLet == myConst);
console.log(myLet === myConst);


console.log("============================");

console.log(1 == "1"); //false ->true : 값만 비교
console.log(true == 1);//false ->true : true(1)/false(0)
console.log('abc' == new String('abc')); //true

console.log(true + 10); //true10 ->11 : true(1)+10 = 0011
console.log('abc' + new String('abc')); //abcabc
console.log(1 + "1"); //11

console.log("2" === 2); //false
console.log(true === 1);//false
console.log('abc' === new String('abc'));//true ->false: 'abc' : String/ new String : Object