const log = console.log;

// 3. 로그 단축 표현 이용
const name = 'jung';
const age = 26;
log({ name, age }); // { name: 'jung', age: 26 }

// 4. Computed property names
function makeOjbect1(k, v) {
  return { [k]: v };
}
log(makeOjbect1('jung', 26)) // { jung: 26 }

// 5. 전개 연산자 속성 병합
const obj1 = {x:1, x: 2, y: 'a'}
const obj2 = { ...obj1, x:3, y: 'b' };
log(obj2) // { x: 3, y: 'b' }
