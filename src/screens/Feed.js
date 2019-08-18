import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions'
import { getFeed } from '../actions/FeedActions'

class Feed extends Component {
    static navigationOptions = {
        title: 'Feed',
        header:true
    }

    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Feed de Fotos</Text>
                <Button title="Aperte aqui" onPress={()=> {
                    this.props.getFeed();
                }} />
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