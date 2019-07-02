/**
 *  # Promise의 세 가지상태
 *  1. 대기중(pending)
 *  2. 이행됨(fulfilled)
 *  3. 거부됨(rejected)
*/

// 1. promise
const p1 = Promise.resolve(123);
console.log(p1 !== 123); // true
const p2 = new Promise(resolve => setTimeout(() => resolve(10), 1));
console.log(Promise.resolve(p2) === p2) // true -> Promise.resolve에 프로미스가 입력되면 자신이 반환됨.

// 2. 동일한 역할을 하는 catch. 예외 처리시 then보다 catch가 가독성이 더 좋다.
Promise.reject(1).then(null, err => console.log(err)); // 1
Promise.reject(1).catch(err => console.log(err))       // 1

// 2-2. catch 메서드 이후에도 then사용
Promise.reject(10)
  .then(data => {
  console.log('then1:', data);
  return 20; })
  .catch(err => {
  console.log('catch:', err);
  return 30; })
  .then(data => {
  console.log('then2:', data);
  return 40; })
// catch: 10
// then2: 30

// 3. promise 사용 시 주의할점
// - return 키워드 깜빡하지 않기
// - promise는 불변 객체라는 사실 명심
