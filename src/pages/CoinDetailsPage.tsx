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
      <>
        <CoinDetailsHeader coin={coin} />
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <HistoricalPriceLineChart
            prices={results}
            coin={coin?.name ?? 'Price'}
          />
        </div>
      </>
    )
  }

  return (
    <section className="page-padding page-layout justify-center min-h-[40vh]">
      {content}
    </section>
  )
}
