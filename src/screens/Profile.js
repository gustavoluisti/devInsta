import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions'

class Profile extends Component {
    static navigationOptions = {
        title: 'Perfil',
    }

    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Perfil</Text>
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
const ProfileScreen = connect(mapStateToProps, { checkLogin })(Profile)
export default ProfileScreen;