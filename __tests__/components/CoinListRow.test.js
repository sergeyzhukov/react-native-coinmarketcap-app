import React from 'react'
import renderer from 'react-test-renderer'
import { CoinListRow } from '../../src/components/CoinListRow'

const DATA = {
  index: 22,
  symbol: 'BTC',
  name: 'Bitcoin',
  price: '333.22',
  volume: '333k',
}

test('renders correctly empty component', () => {
  const component = <CoinListRow />
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders with data', () => {
  const component = <CoinListRow {...DATA} />
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})
