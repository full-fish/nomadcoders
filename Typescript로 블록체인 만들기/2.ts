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

//! readonly js에서 const를 하더라도 배열의 경우 직접 다른 배열을 못넣지만 push나 한 요소에는 다른걸 넣을 수 있다
type Player2 = {
  readonly name: string
  age?: Age
}
const numbers: readonly number[] = [1, 2]
numbers[1] = 2

//! Tuple 각 매개변수 타입 지정
const man: [string, number, boolean] = ['manseon', 13, true]

//! any 타입스크립트에서 나오고 싶을때
const d: any[] = [1, 2, 3]
const e: any = true
d + e

//! unknown : any랑 비슷하지만 unknown이 더 안전 unknown으로 작업 수행하는것은 불법?적인일임
let f: unknown
if (typeof f === 'number') {
  let g = f + 1
}
let h = f.toUpperCase() // 이건 안되지만 아래처럼 하면 됨
if (typeof f === 'string') {
  let h = f.toUpperCase()
}

//! void : return값이 없는 함수를 뜻함

//! never : 함수가 return하지 않을 때 발생 (일부 함수는 값을 반환 x 이는 함수가 예외를
//! throw하거나 프로그램 실행을 종료함을 의미)
function never(name: string | number) {
  if (typeof name === 'string') {
    name // 여기선 string
  } else if (typeof name === 'number') {
    name // 여기선 number
  } else {
    name // 여기선 never
  }
}
