import { useQuery } from 'react-query'
import { fetchCoinHistory } from '../api'
import ApexChart from 'react-apexcharts'
import styled, { createGlobalStyle } from 'styled-components'

interface IHistorical {
  time_open: string
  time_close: string
  open: number
  high: number
  low: number
  close: string
  volume: number
  market_cap: number
}
interface PriceProps {
  coinId: string
}
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`
function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () => fetchCoinHistory(coinId), {
    refetchInterval: 10000,
  })
  let seriesData = data?.map(ele => {
    return { x: new Date(parseInt(ele['time_open']) * 1000), y: [ele.open, ele.high, ele.low, ele.close] }
  })
  let max = 0
  let min = Number.MAX_SAFE_INTEGER
  data?.forEach(ele => {
    if (ele.high > max) max = ele.high
    if (ele.low < min) min = ele.low
  })
  console.log(data)
  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <Overview>
          <OverviewItem>
            <span>역대 최고가</span>
            <span>{max}원</span>
          </OverviewItem>
          <OverviewItem>
            <span>역대 최저가</span>
            <span>{min}원</span>
          </OverviewItem>
        </Overview>
      )}
    </div>
  )
}
export default Price

//
// import { useQuery } from 'react-query'
// import { fetchCoinHistory } from '../api'
// import ApexChart from 'react-apexcharts'

// interface IHistorical {
//   time_open: string
//   time_close: string
//   open: number
//   high: number
//   low: number
//   close: string
//   volume: number
//   market_cap: number
// }
// interface ChartProps {
//   coinId: string
// }
// function Chart({ coinId }: ChartProps) {
//   const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () => fetchCoinHistory(coinId), {
//     refetchInterval: 10000,
//   })
//   return (
//     <div>
//       {isLoading ? (
//         'Loading chart...'
//       ) : (
//         <ApexChart
//           type="line"
//           series={[
//             {
//               name: 'Price',
//               data: data?.map(price => parseFloat(price.close)) ?? [],
//             },
//           ]}
//           options={{
//             theme: {
//               mode: 'dark',
//             },
//             chart: {
//               height: 300,
//               width: 500,
//               toolbar: {
//                 show: false,
//               },
//               background: 'transparent',
//             },
//             grid: { show: false },
//             stroke: {
//               curve: 'smooth',
//               width: 4,
//             },
//             yaxis: {
//               show: false,
//             },
//             xaxis: {
//               axisBorder: { show: false },
//               axisTicks: { show: false },
//               labels: { show: false },
//               type: 'datetime',
//               categories: data?.map(price => price.time_close),
//             },
//             fill: {
//               type: 'gradient',
//               gradient: { gradientToColors: ['#0be881'], stops: [0, 100] },
//             },
//             colors: ['#0fbcf9'],
//             tooltip: {
//               y: {
//                 formatter: value => `$${value.toFixed(2)}`,
//               },
//             },
//           }}
//         />
//       )}
//     </div>
//   )
// }

// export default Chart
