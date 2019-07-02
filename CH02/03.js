// 6. for문 객체 비구조화
const people = [{age: 21, name: '다현'}, {age: 22, name: '소희'}]
for(const {age, name} of people) {
  console.log(`age : ${age}, name: ${name}`)
}

// 7. 매개변수 기본값
function printLog(a = 1) {
  console.log({ a });
}
printLog(); // { a: 1 }

