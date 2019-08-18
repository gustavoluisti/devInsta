import React,{ Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Feed from './Feed';
import Profile from './Profile';

const Home = createStackNavigator({
    Feed:{
        screen:Feed
    },
    Profile:{
        screen:Profile
    }
}, {
    navigationOptions:{
        header:true,
        headerStyle:{
            backgroundColor:'#4da2d8',
        },
        headerTitleStyle:{
            color:'#FFF',
            flex:1,
            textAlign: 'center',
        }
    }
});
export default Home;