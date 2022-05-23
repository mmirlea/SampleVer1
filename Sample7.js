const o = {
    name:'쥬뇨',
    age:10,
    isFemale :false
}

const f = function(){
    console.log('hello world');
}

const i = 10;
const n = new Number(10);

f();

console.log(o);

console.log('===========객체(Object ) 확장===========');

o.another = {
    name: '밀뤠',
    age: 20
};

console.log(o);

f.another = {
    name: '뉴냐뉴냐',
    age: 30,
    info: function () {
        console.log(this.name + ':' + this.age);
    }
};

console.log(f.another);
f.another.info();

console.log('---------------기본타입은 확장X----------');

i.another = {};
console.log(i.another);

console.log('---------------EX)기본API확장---------');

Date.prototype.format = function () {
    return this.getHours()+'시'+this.getMinutes()+'분';
}
const date = new Date();

console.log(date.format());