import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions'

class Profile extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title:navigation.getParam('name'),
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            name:this.props.navigation.getParam('name')
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Nome: {this.state.name}</Text>
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