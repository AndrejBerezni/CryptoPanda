import { ICoinDetailed } from '../compiler/interfaces'
import { CoinListCriteria, Currency } from '../compiler/types'
import standardizeErrorMessage from '../utilities/standardizeAndThrowError'

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

    if (response.status === 429) {
      throw new Error(
        'API calls per minute exceeded - please wait and try again later.'
      )
    }

    const data = await response.json()

    return data
  } catch (err) {
    const message = standardizeErrorMessage(err)
    throw new Error(message) // this function will always be inside another try/catch block, so we are throwing this Error to handled by that block
  }
}

export default fetchCoins
