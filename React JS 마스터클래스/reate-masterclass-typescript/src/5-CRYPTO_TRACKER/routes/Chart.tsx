import { useQuery } from 'react-query'
import { fetchCoinHistory } from '../api'
import ApexChart from 'react-apexcharts'

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
interface ChartProps {
  coinId: string
}
function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () => fetchCoinHistory(coinId), {
    refetchInterval: 10000,
  })
  let seriesData = data?.map(ele => {
    return { x: new Date(parseInt(ele['time_open']) * 1000), y: [ele.open, ele.high, ele.low, ele.close] }
  })
  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: 'Price',
              data: seriesData ?? [],
            },
          ]}
          options={{
            chart: {
              type: 'candlestick',
              height: 350,
            },
            title: {
              text: 'CandleStick Chart',
              align: 'left',
            },
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      )}
    </div>
  )
}

export default Chart
