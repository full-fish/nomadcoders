import styled from 'styled-components'

const Title = styled.h1`
  color: ${props => props.theme.textColor};
`

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
`

function C() {
  return (
    <Wrapper>
      <Title>Hi</Title>
    </Wrapper>
  )
}

export default C
