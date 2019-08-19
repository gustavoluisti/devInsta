import React, { Component } from 'react';
import {View, StyleSheet, Text } from 'react-native';

export default class FeedItemFake extends Component {
    render() {
        return (
            <View style={styles.feedContainer}>
                <View style={styles.feedHeader}>
                    <View style={styles.avatar}></View>
                    <View style={styles.userName}></View>
                    <View style={styles.dateArea}>
                        <View style={styles.postDate}></View>
                    </View>
                </View>
                <View style={styles.feedBody}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    feedContainer:{
        width:'100%',
        height:300,
    },
    feedHeader:{
        height:70,
        flexDirection:'row',
        alignItems:'center',
    },
    avatar:{
        width:40,
        height:40,
        marginLeft:10,
        marginRight:15,
        backgroundColor: '#DDD',
        borderRadius:20,
    },
    userName:{
        width:150,
        height:15,
        backgroundColor: '#DDD',
    },
    dateArea:{
        flex:1,
        alignItems: 'flex-end',
    },
    postDate:{
        width:80,
        height:15,
        backgroundColor: '#DDD',
        marginRight:10,
    },
    feedBody:{
        flex: 1,
        backgroundColor: '#DDD',
    }
});