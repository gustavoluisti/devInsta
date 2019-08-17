import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createStore, applyMiddleware } from  'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';
import Preload from  './src/screens/Preload';
import Home from  './src/screens/Home';
import Login from  './src/screens/Login';

console.disableYellowBox = true;

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const AppNavigator = createStackNavigator({
  Preload: {
    screen: Preload
  },
  Home:{
    screen:Home
  },
  Login:{
    screen:Login,
  }
});

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}



export default App