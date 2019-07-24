import React from 'react'
import { Provider } from 'react-redux'
import createStore from './createStore'
import createRootNavigationStack from './navigation/rootStack'

const store = createStore()
const NavStack = createRootNavigationStack()

const App = () => (
  <Provider store={store}>
    <NavStack />
  </Provider>
)

export default App
