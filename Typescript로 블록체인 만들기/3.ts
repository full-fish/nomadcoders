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

//! 다형성(Polymorphism)
