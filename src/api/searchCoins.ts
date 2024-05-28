import { ICoinBasicInfo } from '../compiler/interfaces'
import standardizeAndThrowError from '../utilities/standardizeAndThrowError'

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

    const data = await response.json()

    return data.coins
  } catch (err) {
    standardizeAndThrowError(err)
  }
}

export default searchCoins
