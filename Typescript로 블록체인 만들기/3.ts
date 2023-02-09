import { BotList } from 'aws-sdk/clients/chime'

//! 일반적인 함수 선언
function add(a: number, b: number) {
  return a + b
}
const add2 = (a: number, b: number) => a + b

//! Call Signatures
type Add = (a: number, b: number) => number
type Add2 = {
  (a: number, b: number): number
}
const add3: Add = (a, b) => a + b

//! Overloading : 여러개의 Call Signatures이 있는 함수. 잘못된것
type Add3 = {
  (a: number, b: number): number
  (a: number, b: string): number
}
const add4: Add3 = (a, b) => {
  if (typeof b === 'string') return a
  return a + b
}

//? 일상생활에서의 Overloading 예시 nextJs에서 라우팅시 아래처럼 객체가 올수도 문자열이 올수도 있음
Router.push({
  path: '/home',
  state: 1,
})
Router.push('home')
//? 그래서 이렇게 해줘야함
type Config = {
  path: string
  state: object
}
type Push = {
  (path: string): void
  (config: Config): void
}
const push: Push = config => {
  if (typeof config === 'string') console.log(config)
  else console.log(config.path, config.state)
}

//? 매개변수의 갯수가 다를 때
type Add4 = {
  (a: number, b: number): number
  (a: number, b: number, c: number): number
}
//아마도 c는 number일거다라고 명시
const add5: Add4 = (a, b, c?: number) => {
  if (c) return a + b + c
  return a + b
}

//! 다형성(Polymorphism) : any를 안쓰는 이유는 다형성이 더 안전하기에 [1,true,'a']같은 경우 해당 배열의
//! 첫번째 인자에 toUpperCase()같은거가 다형성의 경우 오류를 잡지만 any는 못잡음
//! generic이란 타입의 placeholder같은거
//! 제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다
//? concrete type : 우리가 일반적으로 봐왔던 number, boolean, any같은 타입
type SuperPrint = {
  (arr: number[]): void
  (arr: boolean[]): void
}
const superPrint: SuperPrint = arr => {
  arr.forEach(i => console.log(i))
}

superPrint([1, 2, 3, 4])
superPrint([true, false, true])
superPrint(['a', 'b']) //? 얘는 작동안함 그렇다면 type선언 부분에 string도 넣어줘야할까?
//? 그러면 작동은 하겠지만 다형성을 이용하는것은 아님
superPrint([1, 2, true, false]) //? 이것또한 작동하지 위와 마찬가지로 type선언부분에
//? (arr:(number|boolean)[]):void를 하면 되긴함

type SuperSuperPrint = {
  <T>(arr: T[]): T
}
//? 위랑 같음
// type SuperSuperPrint=<T>(arr:T[])=>T
const superSuperPrint: SuperSuperPrint = arr => arr[0]

superSuperPrint([1, 2, 3, 4])
superSuperPrint([true, false, true])
superSuperPrint(['a', 'b'])
superSuperPrint([1, 2, true, false])
const h = superSuperPrint([1, true, 'a', 1])
h.toUpperCase()

//? 2개의 generic쓰기
type Two = <T, M>(a: T[], b: M) => T // 첫번째 파라미터로
const two: Two = arr => arr[0]
const i = two([1, 2, 3], 'x')

//? 다른 방법으로 쓰기
function superPrint2<T>(a: T[]) {
  return a[0]
}
//? 확장하기
type Player4<E> = {
  name: string
  extraInfo: E
}
// const nico: Player4<{ favFood: string }> = {
//   name: 'nico',
//   extraInfo: {
//     favFood: 'kimchi',
//   },
// }
//? 위랑 아래랑 같음
type NicoExtra = {
  favFood: string
}
// type NicoPlayer = Player4<{ favFood: string }>
type NicoPlayer = Player4<NicoExtra>
const nico: NicoPlayer = {
  name: 'nico',
  extraInfo: {
    favFood: 'kimchi',
  },
}
//? 타입에 많은정보들이 있는데 하나만 바꾸고싶을때 generic쓰면됨
const lynn: Player4<null> = {
  name: 'lynn',
  extraInfo: null,
}
//? generic 예시들
type J = Array<number>
let j: J = [1, 2, 3, 4]

function printAllNumbers(arr: number[]) {}
// 같은거
function printAllNumbers2(arr: Array<number>) {}

//! 과제
type Last = <T>(arr: T[]) => T
const last: Last = arr => arr[arr.length - 1]
const lastNum = last([1, 2, 3])
console.log(lastNum)

type Prepend = (arr: any[], item: any) => any[]
const prepend: Prepend = (arr, item) => {
  arr.unshift(item)
  return arr
}
const bb = prepend([1, 2, 3], 0)
console.log(bb)
