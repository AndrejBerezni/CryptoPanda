import { ICoinDetailed } from '../compiler/interfaces'
import { CoinListCriteria, Currency } from '../compiler/types'
import standardizeAndThrowError from '../utilities/standardizeAndThrowError'

const fetchTopCoins = async (
  currency: Currency,
  criteria: CoinListCriteria,
  page: number
): Promise<ICoinDetailed[] | undefined> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_COINGECKO_BASE_URL}coins/markets?vs_currency=${currency}&order=${criteria}_desc&per_page=10&page=${page}`,
      {
        headers: {
          Authorization: import.meta.env.VITE_COINGECKO_API_KEY,
          'Content-type': 'application/json',
        },
      }
    )

    const coins = await response.json()

    return coins
  } catch (err) {
    standardizeAndThrowError(err)
  }
}

export default fetchTopCoins
