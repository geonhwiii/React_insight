const log = console.log;

// 1. const로 정의 해도 객체 내부의 속성값은 수정 가능하다
const bar = { prop1: 'a' };
bar.prop1 = 'b';
bar.prop1 = 'c';
log(bar) // { prop1: 'c' }

const arr = [10, 100, 1000];
arr[0] = 20;
arr.push(30)
log(arr) // [ 20, 100, 1000, 30 ]

// 2. 단축 속성명
const name = 'mike';
const obj = {
  age: 21,
  name,
  getName() { return this.name }
};
log(obj.getName()); // mike