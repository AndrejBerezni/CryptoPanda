import { ICoinBasicInfo } from '../compiler/interfaces'
import standardizeErrorMessage from '../utilities/standardizeAndThrowError'

const searchCoins = async (
  searchTerm: string
): Promise<ICoinBasicInfo[] | undefined> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_COINGECKO_BASE_URL}search?query=${searchTerm}`,
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

    return data.coins
  } catch (err) {
    const message = standardizeErrorMessage(err)
    throw new Error(message) // this function will always be inside another try/catch block, so we are throwing this Error to handled by that block
  }
}

export default searchCoins
