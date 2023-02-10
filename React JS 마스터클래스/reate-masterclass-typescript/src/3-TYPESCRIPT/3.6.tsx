import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`
const H1 = styled.h1`
  color: ${props => props.theme.textColor};
`
interface DummyProps {
  text: string
  otherThingHere?: boolean
}
function Dummy({ text, otherThingHere }: DummyProps) {
  return <H1>{text}</H1>
}
function E() {
  return (
    <Container>
      <H1>hihi</H1>
      <Dummy text="4444"></Dummy>
    </Container>
  )
}

export default E
