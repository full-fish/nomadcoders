//! 기본 문법
let a = '1'
a = 'a'

let b = '1'
b = 1

let c: boolean = 2

let arr: number[] = [1, 2, 3]

//! 객체의 키 하나하나 타입 할당 및 선택적 키
const player1: {
  name: string
  age?: number
} = {
  name: 'manseon',
}
const player2: {
  name: string
  age?: number
} = {
  name: 'yury',
}
//! 별칭
type Age = number
type Player = {
  name: string
  age?: Age
}
const player3: Player = {
  name: 'pary',
}

//! 함수의 리턴값 타입정하기 (Player타입을 리턴함)
function playerMaker(name: string): Player {
  return {
    name,
  }
}
const manseon = playerMaker('manseon')
manseon.age = 12
//! 화살표 함수라면
const playerMaker2 = (name: string): Player => ({ name })
