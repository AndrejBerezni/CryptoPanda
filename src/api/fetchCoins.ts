import { ICoinDetailed } from '../compiler/interfaces'
import { CoinListCriteria, Currency } from '../compiler/types'
import standardizeAndThrowError from '../utilities/standardizeAndThrowError'

const fetchCoins = async (
  currency: Currency,
  criteria: CoinListCriteria,
  page: number,
  coins?: string
): Promise<ICoinDetailed[] | undefined> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_COINGECKO_BASE_URL}coins/markets?vs_currency=${currency}&order=${criteria}_desc&per_page=10&page=${page}&ids=${coins ? coins : ''}`,
      {
        headers: {
          Authorization: import.meta.env.VITE_COINGECKO_API_KEY,
          'Content-type': 'application/json',
        },
      }
    )

    const data = await response.json()

    return data
  } catch (err) {
    standardizeAndThrowError(err)
  }
}

export default fetchCoins
