import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import fetchCoins from '../api/fetchCoins'
import { ICoinDetailed } from '../compiler/interfaces'
import { CoinListCriteria, Currency } from '../compiler/types'

export default function TopCoinsPage() {
  const [criteria, setCriteria] = useState<CoinListCriteria>('market_cap')
  const [searchParams, setSearchParams] = useSearchParams()
  const [coins, setCoins] = useState<ICoinDetailed[]>([])

  useEffect(() => {
    const fetchCoinsList = async () => {
      try {
        const page = Number(searchParams.get('page')) ?? 1
        const currency =
          (sessionStorage.getItem('currency') as Currency) ?? 'eur'

        const topCoins = await fetchCoins(currency, criteria, page)
        if (topCoins) {
          setCoins(topCoins)
        }
      } catch (err) {
        console.log(err) //update later
      }
    }

    fetchCoinsList() //initial fetch on render

    //setup to update every two minutes:
    const fetchInterval = setInterval(fetchCoins, 2 * 60 * 1000)

    return () => clearInterval(fetchInterval) // clean up
  }, [criteria, searchParams])

  return (
    <section className="page-padding flex flex-col items-center">
      <ul>
        {coins.map((coin) => (
          <p>{coin.name}</p>
        ))}
      </ul>
    </section>
  )
}
