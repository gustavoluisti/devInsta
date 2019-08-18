import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createStore, applyMiddleware } from  'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';
import Preload from  './src/screens/Preload';
import Tabs from  './src/screens/Tabs';
import Login from  './src/screens/Login';
import SignUp from './src/screens/SignUp';

console.disableYellowBox = true;

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const AppNavigator = createStackNavigator({
  Preload: {
    screen: Preload
  },
  Tabs:{
    screen:Tabs
  },
  Login:{
    screen:Login,
  },
  SignUp:{
    screen:SignUp
  }
},{
  navigationOptions:{
    header:null
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