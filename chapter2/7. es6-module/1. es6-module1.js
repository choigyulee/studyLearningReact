// 자바스크립트는 각각의 모듈을 별도의 파일로 저장
// 모듈을 만들고 외부에 익스포트하는 방법 
// 1. 한 모듈에서 여러 자바스크립트 객체를 외부에 노출

export function print (message) { log(message, new Date()) }

export function log (message, timestamp) {
  console.log(`${timestamp, toString()}: ${message}`) }

//export를 통해 다른 모듈에서 활용하도록 이름(함수, 객체, 변수, 상수 등)을 외부에 익스포트
//print 함수, log 함수를 외부에 익스포트
