import React, { Component } from 'react';
import {View, StyleSheet, Text, Image } from 'react-native';

export default class FeedItem extends Component {
    render() {
        return (
            <View style={styles.feedContainer}>
                <View style={styles.feedHeader}>
                    <View style={styles.avatar}>
                        <Image source={{uri:this.props.data.avatar}} style={styles.avatarImg} />
                    </View>
                    <View style={styles.userName}>
                        <Text>{this.props.data.name}</Text>
                    </View>
                    <View style={styles.dateArea}>
                        <View style={styles.postDate}></View>
                    </View>
                </View>
                <View style={styles.feedBody}>
                    <Image source={{uri:this.props.data.url}} style={styles.feedImage} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    feedContainer:{
        width:'100%',
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
        borderRadius:20,
    },
    avatarImg:{
        width:40,
        height:40,
    },
    userName:{
        width:150,
        height:25,
    },
    dateArea:{
        flex:1,
        alignItems: 'flex-end',
    },
    postDate:{
        width:80,
        height:15,
        backgroundColor: '#00FF00',
        marginRight:10,
    },
    feedBody:{
        flex: 1,
        backgroundColor: '#00FF00',
    },
    feedImage:{
        width:'100%',
        height:300,
    }
});