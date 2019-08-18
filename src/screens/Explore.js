import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions'

class Explore extends Component {
    static navigationOptions = {
        title: 'Explorar',
    }

    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Explorar</Text>
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
const ExploreScreen = connect(mapStateToProps, { checkLogin })(Explore)
export default ExploreScreen;