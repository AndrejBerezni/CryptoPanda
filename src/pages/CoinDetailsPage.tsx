import HistoricalPriceLineChart from '../components/HistoricalPriceLineChart'
import Spinner from '../components/Spinner'
import useFetchHistoricalData from '../hooks/useFetchHistoricalData'

export default function CoinDetailsPage() {
  const { results, isLoading, error } = useFetchHistoricalData('bitcoin')

  let chartContent

  if (isLoading) {
    chartContent = <Spinner />
  } else if (error) {
    chartContent = <p>{error}</p>
  } else {
    chartContent = <HistoricalPriceLineChart prices={results} coin="Bitcoin" />
  }
  return <section className="page-padding">{chartContent}</section>
}
