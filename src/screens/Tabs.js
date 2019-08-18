import React, {Component } from 'react'
import { createBottomTabNavigator } from 'react-navigation';

import Home from './Home';
import Explore from './Explore';
import DevCamera from './DevCamera';
import Profile from './Profile';

const Tabs = createBottomTabNavigator({
    Home:{
        screen:Home
    },
    Explore:{
        screen:Explore
    },
    DevCamera: {
        screen:DevCamera
    },
    Profile:{
        screen:Profile
    }
});

export default Tabs;