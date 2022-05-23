const MyObject = function (name, age) {
    this.name = name;
    this.age = age;
}

MyObject.prototype.school = 'bit'; //추가/변경/확장 prototype
MyObject.prototype.course = 'eonm';
MyObject.prototype.info = function () {
    console.log(this.name + ':' + this.age + ':' + this.course);
}

//MyObject.info(); //객체도 안만들어짐
//info();

//MyObjert 객체 생성1
const o1 = new MyObject('쮼쮼이', 30);
console.log(o1.school + ':' + o1.course);

o1.school = 'multicampus';
console.log(o1.school + ':' + o1.course);

const o2 = new MyObject('꿀꿀돼지', 30);
console.log(o2.school + ':' + o2.course);

//test
console.log(o1.school + ':' + o2.school);

//overriding
o2.info = function () {
    console.log('secret');
}

o2.info();