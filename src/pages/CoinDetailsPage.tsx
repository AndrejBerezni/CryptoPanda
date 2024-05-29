import { useParams } from 'react-router-dom'

import CoinDetailsHeader from '../components/CoinDetailsHeader'
import HistoricalPriceLineChart from '../components/HistoricalPriceLineChart'
import Spinner from '../components/Spinner'
import useFetchCoinData from '../hooks/useFetchCoinData'

export default function CoinDetailsPage() {
  const { id } = useParams()
  const { coin, results, isLoading, error } = useFetchCoinData(id as string)

  let content

  if (isLoading) {
    content = <Spinner />
  } else if (error) {
    content = <p className="text-center">{error}</p>
  } else {
    content = (
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <HistoricalPriceLineChart prices={results} coin="Bitcoin" />
      </div>
    )
  }
  return (
    <section className="page-padding page-layout">
      <CoinDetailsHeader coin={coin} />
      {content}
    </section>
  )
}
