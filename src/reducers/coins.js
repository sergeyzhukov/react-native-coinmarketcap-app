import Numeral from 'numeral'
import ActionTypes from '../middleware/actionTypes'

const initialState = {
  data: [],
  meta: {
    isLoading: false,
    next: 0,
  },
}

/* eslint import/prefer-default-export: 0 */
export function coins(state = initialState, action) {
  const { type, payload = {} } = action

  switch (type) {
    case ActionTypes.COIN_LISTINGS_LOAD_REQUEST: {
      return {
        data: state.data,
        meta: {
          ...state.meta,
          isLoading: true,
        },
      }
    }
    case ActionTypes.COIN_LISTINGS_LOAD_FAILURE: {
      return {
        data: state.data,
        meta: {
          ...state.meta,
          isLoading: false,
        },
      }
    }
    case ActionTypes.COIN_LISTINGS_LOAD_SUCCESS: {
      const { data } = payload

      const newData = [
        ...state.data,
        ...data.map(coin => ({
          name: coin.name,
          symbol: coin.symbol,
          price: coin.quote?.USD?.price,
          priceHR: Numeral(coin.quote?.USD?.price).format('0,0.00'),
          cmcRank: coin.cmc_rank,
          // eslint-disable-next-line
          volume: coin.quote?.USD?.volume_24h,
          // eslint-disable-next-line
          volumeHR: Numeral(coin.quote?.USD?.volume_24h).format('0,0.00a'),
        })),
      ]

      return {
        data: newData,
        meta: {
          isLoading: false,
          next: newData.length + 1,
        },
      }
    }
    default:
      break
  }

  return state
}
