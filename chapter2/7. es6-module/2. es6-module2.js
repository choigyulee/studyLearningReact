// 2. 모듈당 하나의 자바스크립트 객체를 노출

class Drive {
  constructor(destination, length) {
    this.destination = destination
    this.length = length
  }

  print() {
    console.log(`${this.destination}까지 ${this.length}시간 걸립니다.`)
  }
}

class Expedition extends Drive {
  constructor(destination, length, gear) {
    super(destination, length)
    this.gear = gear
  }

  print() {
    super.print()
    console.log(`당신의 ${this.gear.join("와 당신의 ")}을 가져오십시오.`)
  }
}

const trip2 = new Expedition("대구", 5, ["선글라스", "커피", "여분 옷"])
trip2.print()

const trip3 = new Expedition("대전", 2, ["물", "과자"])
export default trip3

//export default는 오직 하나의 이름만 노출하는 모듈에서 사용
//기본 타입, 객체. 배열, 함수 등 모든 타입의 자바스크립트 이름을 외부에 노출시킬 수 있음

//모듈은 import 명령으로 다른 자바스크립트 파일을 불러와 사용 가능
//export default로 한 이름만 노출한 경우, 노출된 대상을 구조 분해 없이 한 이름으로 부를 수 있음