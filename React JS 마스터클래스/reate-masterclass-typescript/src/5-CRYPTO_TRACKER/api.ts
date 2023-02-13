import axios from 'axios'
const BASE_URL = `https://api.coinpaprika.com/v1`

// export function fetchCoins() {
//   console.log(fetch('https://api.coinpaprika.com/v1/coins').then(response => response.json()))
//   return fetch('https://api.coinpaprika.com/v1/coins').then(response => response.json())
// }

export async function fetchCoins() {
  let data = await axios(`${BASE_URL}/coins`)
  return data.data
}

export async function fetchCoinInfo(coinId: string) {
  let data = await axios(`${BASE_URL}/coins/${coinId}`)
  return data.data
}

export async function fetchCoinTickers(coinId: string) {
  let data = await axios(`${BASE_URL}/tickers/${coinId}`)
  return data.data
}

export function fetchCoinHistory(coinId: string) {
  return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`).then(response => response.json())
}
//te
