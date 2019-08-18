import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions'

class DevCamera extends Component {
    static navigationOptions = {
        title: 'Camera',
    }

    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Camera</Text>
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
const DevCameraScreen = connect(mapStateToProps, { checkLogin })(DevCamera)
export default DevCameraScreen;