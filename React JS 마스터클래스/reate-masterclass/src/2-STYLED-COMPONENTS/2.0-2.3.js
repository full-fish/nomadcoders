import styled from 'styled-components'
const Father = styled.div`
  display: flex;
`
const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`
const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`
const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
`
const Circle = styled(Box)`
  border-radius: 50px;
`
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`

const Input = styled.input`
  background-color: tomato;
`
const InputRequired = styled.input.attrs({ required: true })`
  background-color: tomato;
`
function A() {
  return (
    // <div style={{ display: 'flex' }}>
    //   <div style={{ backgroundColor: 'teal', width: 100, height: 100 }}></div>
    //   <div style={{ backgroundColor: 'tomato', width: 100, height: 100 }}></div>
    // </div>
    //! 1 위랑 아래랑 똑같음
    // <Father>
    // <BoxOne />
    // <BoxTwo />
    // </Father>
    //! 1
    <Father>
      <BoxOne />
      <BoxTwo />
      <Box bgColor="teal" />
      <Box bgColor="tomato" />
      <Circle bgColor="red" />
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn>
      <Input required />
      <Input required />
      <Input required />
      <InputRequired />
      <InputRequired />
      <InputRequired />
    </Father>
  )
}

export default A
