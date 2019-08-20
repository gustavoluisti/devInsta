import React, { Component } from 'react';
import {View, StyleSheet, Text, Image } from 'react-native';

export default class FeedItem extends Component {

    constructor(props) {
        super(props);

        let rawDate = this.props.data.date_posted.split(' ');
        let date = rawDate[0].split('-');
        date = date[2]+'/'+date[1]+'/'+date[0];

        let time = rawDate[1].split(':');
        time = time[0]+':'+time[1];

        this.state = {
            dateFormated:date+''+time
        }
    }

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
                        <Image source={require('../../assets/clock.png')} style={styles.clockIcon} />
                        <Text style={styles.postDate}>{this.state.dateFormated}</Text>
                    </View>
                </View>
                <View style={styles.feedBody}>
                    <Image source={{uri:this.props.data.url}} style={styles.feedImage} />
                </View>
                <View style={styles.feedFooter}>
                    <View style={styles.likeArea}>
                        <Text>{this.props.data.like_count}</Text>
                    </View>
                    <View style={styles.commentArea}>
                        <Text>{this.props.data.comments.length}</Text>
                    </View>
                </View>
                {this.props.data.comments.length > 0 &&
                    <View style={styles.commentContainer}>
                        {this.props.data.comments.map((citem)=> {
                            return (
                                <Text>{citem.name}: {citem.txt}</Text>
                            )
                        })}
                    </View>
                }
                <View style={styles.feedLineEnd}>

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
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    clockIcon:{
        width:15,
        height:15,
        marginRight:5,
    },
    postDate:{
        height:20,
        marginRight:10,
    },
    feedBody:{
        flex: 1,
    },
    feedImage:{
        width:'100%',
        height:300,
    },
    feedFooter:{
        height:60,
        flexDirection: 'row'
    },
    likeArea:{
        width:60,
        height:60,
        backgroundColor: '#CCCCCC',
    },
    commentArea:{
        width:60,
        height:60,
        backgroundColor: '#CCCCCC',
    },
    commentContainer:{
        padding:10,
    },
    feedLineEnd:{
        height:1,
        backgroundColor: '#CCC',
    }
});