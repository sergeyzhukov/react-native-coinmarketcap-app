import { coins as reducer } from '../../src/reducers'
import ActionTypes from '../../src/middleware/actionTypes'

const INITIAL_STATE = {
  data: [],
  meta: {
    isLoading: false,
    next: 0,
  },
}

const PAYLOAD = {
  data: [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      slug: 'bitcoin',
      quote: {
        USD: { price: 55452, volume_24h: 999933 },
      },
      cmc_rank: 3,
    },
  ],
}

describe('coins reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it('should handle COIN_LISTINGS_LOAD_REQUEST', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: ActionTypes.COIN_LISTINGS_LOAD_REQUEST,
      })
    ).toEqual({
      data: [],
      meta: {
        isLoading: true,
        next: 0,
      },
    })
  })

  it('should handle COIN_LISTINGS_LOAD_FAILURE', () => {
    expect(
      reducer(
        { data: ['test'], meta: { isLoading: true, next: 20 } },
        {
          type: ActionTypes.COIN_LISTINGS_LOAD_FAILURE,
        }
      )
    ).toEqual({
      data: ['test'],
      meta: {
        isLoading: false,
        next: 20,
      },
    })
  })

  it('should handle COIN_LISTINGS_LOAD_SUCCESS', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: ActionTypes.COIN_LISTINGS_LOAD_SUCCESS,
        payload: PAYLOAD,
      })
    ).toEqual({
      data: [
        {
          name: 'Bitcoin',
          symbol: 'BTC',
          price: 55452,
          priceHR: '55,452.00',
          cmcRank: 3,
          volume: 999933,
          volumeHR: '999.93k',
        },
      ],
      meta: {
        isLoading: false,
        next: 2,
      },
    })
  })
})
