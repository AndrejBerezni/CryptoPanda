import HistoricalPriceLineChart from '../components/HistoricalPriceLineChart'

export default function CoinDetailsPage() {
  return (
    <section className="page-padding">
      <HistoricalPriceLineChart
        prices={[
          [1709208048925, 58096.32746932346],
          [1709211638432, 57864.53754263238],
          [1709215228146, 58073.03807109281],
          [1709218873445, 57960.54525245627],
          [1709222425200, 58072.34709407703],
          [1709226149850, 57551.3069867609],
          [1709229678412, 56472.178971206384],
          [1709233288700, 56060.6007536945],
        ]}
        coin="Bitcoin"
      />
    </section>
  )
}
