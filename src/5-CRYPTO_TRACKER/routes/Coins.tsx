import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import axios from 'axios'
import { fetchCoins } from '../api'
import { Helmet } from 'react-helmet'

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`
const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CoinsList = styled.ul``
const Coin = styled.li`
  background-color: white;
  color: ${props => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px; // a 바깥쪽에 선언했다면 클릭할 수 있는 영역이 좁았음
    transition: color 0.3s ease-in;
    /* display: block; // 글씨 밖도 클릭되게끔 */
  }
  &:hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor};
`
const Loadder = styled.span`
  text-align: center;
  display: block;
`

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`

const Btn = styled.button``
interface ICoin {
  id: string
  name: string
  symbol: string
  rank: number
  is_new: boolean
  is_active: boolean
  type: string
}
function Coins() {
  // const [coins, setCoins] = useState<CoinInterface[]>([])
  // const [loading, setLoading] = useState(true)
  // const getCoins = async () => {
  //   const res = await axios('https://api.coinpaprika.com/v1/coins')
  //   console.log(res)
  //   setCoins(res.data.slice(0, 100))
  //   setLoading(false)
  // }
  // useEffect(() => {
  //   // ;(async () => {
  //   // const response = await fetch('https://api.coinpaprika.com/v1/coins')
  //   // const json = await response.json()
  //   // setCoins(json.slice(0, 100))
  //   // })() // 이런 함수는 바로 실행됨
  //   getCoins()
  // }, [])
  const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins)
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') === undefined ? 'light' : 'dark')
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
    window.localStorage.setItem('theme', theme)
    window.location.reload()
  }

  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Btn onClick={onClick}>Dark or Light</Btn>
      <Header>
        <Title>코인</Title>
      </Header>

      {isLoading ? (
        <Loadder>Loading...</Loadder>
      ) : (
        <CoinsList>
          {/* {coins.map(coin => ( */}
          {data?.slice(0, 100).map(coin => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}></Img>
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  )
}
export default Coins
