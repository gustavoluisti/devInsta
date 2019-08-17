import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions'

class Home extends Component {
    static navigationOption = {
        title: 'Feed',
    }

    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Feed de Fotos</Text>
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
        status: state.auth.status
    }
}
const HomeScreen = connect(mapStateToProps, { checkLogin })(Home)
export default HomeScreen;