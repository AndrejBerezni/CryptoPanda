import { Currency } from '../compiler/types'
import standardizeErrorMessage from '../utilities/standardizeAndThrowError'

const fetchCoinHistoricalData = async (
  coinId: string,
  currency: Currency
): Promise<number[][] | undefined> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_COINGECKO_BASE_URL}coins/${coinId}/market_chart?vs_currency=${currency}&days=90&interval=daily&precision=2`,
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

    return data.prices
  } catch (err) {
    const message = standardizeErrorMessage(err)
    throw new Error(message) // this function will always be inside another try/catch block, so we are throwing this Error to handled by that block
  }
}

export default fetchCoinHistoricalData
