import { useContext } from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import { CurrencyContext } from '../../context/CurrencyContext'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function HistoricalPriceLineChart({
  prices,
  coin,
}: {
  prices: [number, number][]
  coin: string
}) {
  const { currency } = useContext(CurrencyContext)

  const data = {
    labels: prices.map((price) => new Date(price[0]).toLocaleDateString()),
    datasets: [
      {
        label: coin,
        data: prices.map((price) => price[1]),
        fill: false,
        borderColor: '#90CAF9',
        tension: 0.3,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Price in ${currency.toUpperCase()} in the last 90 days`,
        color: '#90CAF9',
      },
    },
  }

  return (
    <Line
      data={data}
      options={options}
      className="rounded-md border-secondary border-[1px] bg-black p-1 shadow-md dark:shadow-[0px_0px_4px_#90CAF9]"
    />
  )
}
