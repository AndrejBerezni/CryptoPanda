import CoinNameSymbolLogo from './CoinNameSymbolLogo'
import CoinPriceMCapVolume from './CoinPriceMCapVolume'
import { ICoinDetailed } from '../../compiler/interfaces'

export default function CoinDetailsHeader({
  coin,
}: Readonly<{
  coin: ICoinDetailed | null
}>) {
  if (coin) {
    return (
      <section className="w-full flex justify-between mt-4 sm:flex-row flex-col gap-8">
        <CoinNameSymbolLogo
          name={coin.name}
          symbol={coin.symbol}
          image={coin.image}
        />
        <CoinPriceMCapVolume
          price={coin.current_price}
          marketCap={coin.market_cap}
          marketCapRank={coin.market_cap_rank}
          volume={coin.total_volume}
        />
      </section>
    )
  }
}
