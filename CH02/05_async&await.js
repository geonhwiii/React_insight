// 1. async await 함수는 promise를 반환한다.
async function getData() {
  return 123;
}
getData().then(data => console.log(data)) // 123
