// 선언적 프로그래밍은 필요한 것이 어떤 것인지 기술하는 데 초점을 둠

// 1. 명령형 프로그래밍

//어떤 문자열을 URL에서 사용할 수 있게 만드는 작업
//URL에서는 공백을 문자로 사용할 수 없으므로 모두 하이픈(-)으로 대체

var string = "today is his birthday"
var urlFriendly =""

for (var i=0; i<string.length; i++) {
  if (string[i] ==="") {
    urlFriendly += "-"
  } else {
    urlFriendly += string[i]
  }
}

urlFriendly = urlFriendly.toLowerCase()

console.log(urlFriendly)
//문자열의 모든 문자를 루프를 돌면서 공백을 만날 때마다 그 공백을 -로 바꿈
//for루프와 if문을 사용하고 대입 연산자를 사용해 값을 설정


// 2. 선언형 프로그래밍

const string = "today is his birthday"
const urlFriendly = string.replace(/ /g, "-")

console.log(urlFriendly)
//string.replace와 정규식을 사용해 모든 공백을 하이픈으로 변경

// API에서 멤버를 가져온 다음 어떤 일을 해야 하는지 기술할 수도 있음
const loadAndMapMembers = compose(
  combineWith(sessionStorage, "members"),
  save(sessionStorage, "members"),
  scopeMembers(window),
  logMemberInfoToConsole,
  logFieldsToConsole("name.first"),
  countMembersBy("location.state"),
  prepStatesForMapping,
  save(sessionStorage, "map"),
  renderUSMap
); 

getFakeMembers(100).then(loadAndMapMembers);

// 근본적으로 선언적 프로그래밍은 추론하기 쉬운 애플리케이션을 만들어내고
// 애플리케이션에 대한 추론이 쉬우면 그 애플리케이션의 규모를 확장하는 것도 더 쉬움


// 3. 문서 객체 모델(DOM) 만드는 과정

// 명령형 접근 방식
var target = document.getElementById('target')
var wrapper = document.createElement('div')
var headline = document.createElement('hi')

wrapper.id = "welcome"
headline.innerText = "Hello World"

wrapper.appendChild(headline)
target.appendChild(wrapper)

// 리액트 컴포넌트를 사용한 선언현 접근 방식
const {render} = ReactDOM

const Welcome = () => (
  <div id="welcome">
    <h1>Hello World</h1>
  </div>
)

render(
  <Welcome />,
  document.getElementById('target')
)
//Welcome 컴포넌트는 렌더링할 DOM을 기술
//render 함수는 컴포넌트에 있는 지시에 따라 DOM을 만듦
//Welcome 컴포넌트를 ID가 target인 엘리먼트 안에 렌더링하고 싶어하는 의도가 드러남

