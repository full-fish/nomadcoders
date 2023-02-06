import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`
const animation = keyframes`
/* from{
    transform:rotate(0deg);
    border-radius:0px;
}
to{
    transform:rotate(360deg);
    border-radius:100px;
} */
0%{
    transform:rotate(0deg);
    border-radius:0px;
}
50%{
    transform:rotate(360deg);
    border-radius:100px;
}
100%{    transform:rotate(0deg);
    border-radius:0px;}
`
const Emoji = styled.span`
  font-size: 40px;
`

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 1s linear infinite;
  span {
    font-size: 40px;
    &:hover {
      font-size: 70px;
    }
    &:active {
      opacity: 0;
    }
    /* 아래 두개도 똑같다 &는 선택자 바로 위에 있는 태그를 뜻한다 */
    /* :hover {
      font-size: 70px;
    } */
  }
  ${Emoji} {
    &:hover {
      font-size: 70px;
    }
    &:active {
      opacity: 0;
    }
  }
  /* span:hover {
    font-size: 70px;
  } */
`
function B() {
  return (
    <Wrapper>
      <Box>
        {/* span은 styled components안에 있지 않지만 셀렉트 할 수 있음 */}
        <span>Hi</span>
      </Box>
      <Box>
        <Emoji>Hi</Emoji>
      </Box>
    </Wrapper>
  )
}

export default B
