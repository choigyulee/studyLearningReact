// 함수형 프로그래밍에서는 데이터가 변할 수 없음
// 애플리케이션에서 불변성 데이터가 작동하는 방식:
// 원본 데이터 구조 변경하는 대신, 데이터 구조의 복사본 생성 후 일부 변경

// 1. 데이터를 변경한다는 것

// 벽의 색을 표현하는 객체
let color_wall = {
  title: "벽지",
  color: "#ECE6CC",
  rating: 0
}

// 색에 평점 매기는 함수
function rateColor(color, rating) {
  color.rating = rating
  return color
}

console.log(rateColor(color_wall, 5).rating) //5
console.log(color_wall.rating) //5
// 자바스크립트에서 함수의 인자는 실제 데이터에 대한 참조
// rateColor 함수 안에서 color의 rating을 변경하면 원본 color_wall 객체의 rating도 바뀜

// rateColor 수정해서 원본에 변경 가하지 않고 색에 평점 부여하기
var rateColor = function(color, rating){
  return Object.assign({}, color, {rating:rating})
}

console.log(rateColor(color_wall, 5).rating) //5
console.log(color_wall.rating) //0
// Object.assign은 빈 객체를 받고, color 객체를 그 빈 객체에 복사
// 복사본에 있는 rating 프로퍼티의 값을 rating 파라미터의 값으로 변경

//ES6 화살표 함수, ES7의 객체 스프레드 연산자 활용
//rateColor 함수는 스프레드 연산자를 사용하여 원본 color를 새로운 객체 안에 복사한 후 rating 프로퍼티 덮어씀
const rateColor = (color, rating) => ({
  ...color,
  rating
})


// 색 이름으로 이루어진 배열
let colorArray = [
  { title: "ivory"},
  { title: "wall"},
  { title: "skyblue"}
] 

// 배열에 Array.push 사용해 색 추가하는 함수 작성
var addColor = function (title, colors) {
  colors.push({title: title})
  return colors;
}

console.log(addColor("green", colorArray).length); //4
console.log(colorArray.length); //4
// 다만 Array.push는 불변성 함수가 아님
// addColor 함수는 원본 배열에 새로운 원소 추가

// 따라서 Array.concat를 사용해서 원본 배열 유지
const addColor = (title, array) => array.concat({title})

console.log(addColor("green", colorArray).length) //4
console.log(colorArray.length) //3

// ES6의 배열 스프레드 연산자 사용해 배열 복사
const addColor = (title, list) => [...list, {title}]
// 원본 리스트의 원소를 새로운 배열에 복사
// title 파라미터로 받은 값을 title 프로퍼티로 하는 객체를 새 배열 뒤에 추가
// 인자로 받은 list를 변경하지 않기 떄문에 list의 원본인 colorArray의 불변성 유지
