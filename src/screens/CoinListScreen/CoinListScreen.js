import React, { Component } from 'react'
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { CoinListRow, COIN_ROW_HEIGHT } from '@components/CoinListRow'
import { LIMIT_PER_PAGE } from '@constants/api'
import { loadCoinListings } from '@actions'
import { getCoinListings } from '@selectors'

class CoinListScreen extends Component {
  componentDidMount() {
    this.props.loadCoinListings()
  }

  keyExtractor = item => `${item.cmcRank} ${item.symbol}`

  getItemLayout = (dataa, index) => ({
    length: COIN_ROW_HEIGHT + StyleSheet.hairlineWidth,
    offset: (COIN_ROW_HEIGHT + StyleSheet.hairlineWidth) * index,
    index,
  })

  handleEndReached = () => {
    const { coins } = this.props

    if (
      coins.meta.isLoading ||
      coins.data.length === 0 ||
      coins.data.length % LIMIT_PER_PAGE !== 0
    ) {
      return
    }

    this.props.loadCoinListings(coins.meta.next)
  }

  renderItem = ({ item }) => (
    <CoinListRow
      index={item.cmcRank}
      symbol={item.symbol}
      name={item.name}
      price={item.priceHR}
      volume={item.volumeHR}
    />
  )

  renderSeparator = () => <View style={styles.separator} />

  renderFooter = () => {
    const { coins } = this.props
    if (!coins.meta?.isLoading) {
      return null
    }
    return <ActivityIndicator animating size="large" />
  }

  render() {
    const { coins } = this.props

    return (
      <FlatList
        data={coins.data}
        renderItem={this.renderItem}
        onEndReached={this.handleEndReached}
        onEndReachedThreshold={0.1}
        keyExtractor={this.keyExtractor}
        getItemLayout={this.getItemLayout}
        ItemSeparatorComponent={this.renderSeparator}
        ListFooterComponent={this.renderFooter}
      />
    )
  }
}

CoinListScreen.navigationOptions = {
  title: 'CoinMarketCap',
}

const styles = StyleSheet.create({
  separator: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#eeeeee',
  },
})

const mapStateToProps = createStructuredSelector({ coins: getCoinListings })
const mapDispatchToProps = { loadCoinListings }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinListScreen)
