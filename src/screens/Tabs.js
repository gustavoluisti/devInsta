import React, {Component } from 'react'
import { createBottomTabNavigator } from 'react-navigation';
import { Image } from 'react-native'
import Home from './Feed';
import Explore from './Explore';
import DevCamera from './DevCamera';
import Profile from './Profile';

const Tabs = createBottomTabNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            tabBarIcon:(opt)=>{
                if(opt.focused) {
                    return(
                        <Image source={require('../assets/home.png')} style={{width:32, height:32}} />
                    );
                } else {
                    return(
                        <Image source={require('../assets/home_off.png')} style={{width:32, height:32}} />
                    );
                }
                
            }
        }
    },
    Explore:{
        screen:Explore,
        navigationOptions:{
            tabBarIcon:(opt)=>{
                if(opt.focused) {
                    return(
                        <Image source={require('../assets/search.png')} style={{width:32, height:32}} />
                    );
                } else {
                    return(
                        <Image source={require('../assets/search_off.png')} style={{width:32, height:32}} />
                    );
                }
                
            }
        }
    },
    DevCamera: {
        screen:DevCamera,
        navigationOptions:{
            tabBarIcon:(opt)=>{
                if(opt.focused) {
                    return(
                        <Image source={require('../assets/camera.png')} style={{width:32, height:32}} />
                    );
                } else {
                    return(
                        <Image source={require('../assets/camera_off.png')} style={{width:32, height:32}} />
                    );
                }
                
            }
        }
    },
    Profile:{
        screen:Profile,
        navigationOptions:{
            tabBarIcon:(opt)=>{
                if(opt.focused) {
                    return(
                        <Image source={require('../assets/profile.png')} style={{width:32, height:32}} />
                    );
                } else {
                    return(
                        <Image source={require('../assets/profile_off.png')} style={{width:32, height:32}} />
                    );
                }
                
            }
        }
    }
},{
    navigationOptions:{
        header:null
    }, tabBarOptions:{
        showLabel:false,
        activeBackgroundColor:'#333333',
        inactiveBackgroundColor:'#CCCCCC',
    }
});

export default Tabs;