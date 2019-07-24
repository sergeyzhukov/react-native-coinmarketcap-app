import { createSelector } from 'reselect'

// eslint-disable-next-line import/prefer-default-export
export const getCoinListings = createSelector(
  state => state.coins,
  coins => coins
)
