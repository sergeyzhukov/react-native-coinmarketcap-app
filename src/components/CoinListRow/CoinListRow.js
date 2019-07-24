import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'

export const COIN_ROW_HEIGHT = 64

// FastImage added just for example here, cryptoicons.org sometimes not working
const Row = ({ index, name, price, symbol = '', volume }) => (
  <View style={styles.container}>
    <Text style={styles.index}>{index}</Text>
    <FastImage
      style={styles.dummyImage}
      source={{ uri: `https://cryptoicons.org/api/icon/${symbol.toLowerCase()}/200` }}
      resizeMode={FastImage.resizeMode.contain}
    />
    <View style={styles.dataContainer}>
      <View style={styles.spaceBetween}>
        <Text style={styles.topText}>{name}</Text>
        <Text style={styles.topText}>{price}</Text>
      </View>
      <View style={styles.spaceBetween}>
        <Text style={styles.bottomText}>{symbol}</Text>
        <Text style={styles.bottomText}>Vol {volume}</Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: COIN_ROW_HEIGHT,
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  dataContainer: {
    justifyContent: 'center',
    flex: 1,
    height: 44,
  },
  spaceBetween: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  nameContainer: {
    flex: 1,
  },
  bottomText: {
    color: '#747474',
  },
  index: {
    width: 24,
    color: '#858585',
    fontSize: 12,
  },
  topText: {
    fontSize: 16,
    fontWeight: '500',
  },
  dummyImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
    backgroundColor: '#efefef',
  },
})

export const CoinListRow = React.memo(Row)
