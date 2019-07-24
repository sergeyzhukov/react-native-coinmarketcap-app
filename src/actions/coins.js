import { RSAA } from 'redux-api-middleware'
import { LIMIT_PER_PAGE, API_KEY } from '@constants/api'
import ActionTypes from '../middleware/actionTypes'

// eslint-disable-next-line import/prefer-default-export
export const loadCoinListings = (start = 1) => ({
  [RSAA]: {
    endpoint: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${LIMIT_PER_PAGE}&start=${start}`,
    headers: { 'X-CMC_PRO_API_KEY': API_KEY },
    method: 'GET',
    types: [
      ActionTypes.COIN_LISTINGS_LOAD_REQUEST,
      ActionTypes.COIN_LISTINGS_LOAD_SUCCESS,
      ActionTypes.COIN_LISTINGS_LOAD_FAILURE,
    ],
  },
})
