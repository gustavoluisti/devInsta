import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions'
import { getFeed } from '../actions/FeedActions'
import { NavigationActions, StackActions } from 'react-navigation';

class Feed extends Component {
    static navigationOptions = {
        title: 'Feed',
        header:true
    }

    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        this.props.getFeed();
    }

    componentDidUpdate() {
        this.verifyStatus();
    }

    verifyStatus = () => {
        if(this.props.status === 2) {

            this.props.navigation.dispatch(StackActions.reset({
                index:0,
                key:null,
                actions:[
                    NavigationActions.navigate({routeName:'Login'})
                ]
            }))
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Feed de Fotos</Text>
                <Text>{this.props.feed.length}</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const mapStateToProps = (state) => {
    return {
        status: state.auth.status,
        feed:state.feed.feed
    }
}
const FeedScreen = connect(mapStateToProps, { checkLogin, getFeed })(Feed)
export default FeedScreen;