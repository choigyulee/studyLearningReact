// 함수형 자바스크립트에서는 코드를 여러 함수를 모아둔 것으로 생각

// 1. 변수에 함수 넣기

var log = function (message) {
  console.log(message)
}

// const log = message => console.log(message)

log("자바스크립트 안에서는 함수를 변수에 넣을 수 있음") //자바스크립트 안에서는 함수를 변수에 넣을 수 있음


// 2. 객체에 함수 넣기

const obj = {
  message: "함수를 객체에 추가할 수 있음",
  log(message) {
    console.log(message)
  }
}

obj.log(obj.message) //함수를 객체에 추가할 수 있음


// 3. 배열에 함수 넣기

const message = [
  "함수를 배열에 넣을 수도 있음",
  message => console.log(message),
  "일반적인 값과 마찬가지임",
  message => console.log(message)
]

message[1](message[0]) //함수를 배열에 넣을 수도 있음
message[3](message[2]) //일반적인 값과 마찬가지임


// 고차 함수: 함수를 인자로 반거나 함수를 반환하는 함수

// 4. 함수를 다른 함수의 인자로 넘기기

const insideFn = logger =>
  logger("함수를 다른 함수에 인자로 넘길 수 있음");

insideFn(message => console.log(message)) //함수를 다른 함수에 인자로 넘길 수 있음


// 5. 함수가 함수를 반환하기

var createScream = function(logger) {
  return function(message) {
    logger(message.toUpperCase()+"!!!")
  }
}

// const createScream = logger => message =>
//  logger(message.toUpperCase()+"!!!")

const scream = createScream(message => console.log(message))

scream("함수가 함수를 반환할 수 있음") //함수가 함수를 반환할 수 있음!!!
scream("createScream은 함수를 반환") //CREATESCREAM은 함수를 반환!!!
scream("scream은 createScream이 반환한 함수를 가리킴") //SCREAM은 CREATESCREAM이 반환한 함수를 가리킴!!!