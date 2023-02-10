import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
  border: 15px solid ${props => props.borderColor};
`

interface ContainerProps {
  bgColor: string
  borderColor?: string
}

interface CircleProps {
  bgColor: string
  borderColor?: string
  text?: string
}

function Circle({ bgColor, borderColor, text = 'default text' }: CircleProps) {
  //   const [counter, setCounter] = useState(1)
  //   setCounter(2)
  //   //! 만약 상태가 두개의 타입을 가지기를 원한다면
  //   const [counter2, setCounter2] = useState<number | string>(0)
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? 'black'}>
      {text}
    </Container>
  )
}

export default Circle

interface PlayerShape {
  name: string
  age: number
}
const sayHello = (playerObj: PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`
sayHello({ name: 'manseon', age: 10 })
