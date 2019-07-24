import { createAppContainer, createStackNavigator } from 'react-navigation'
import CoinListScreen from '../screens/CoinListScreen'

const MainNavigationStack = createStackNavigator({
  CoinsList: CoinListScreen,
})

export default () => createAppContainer(MainNavigationStack)
