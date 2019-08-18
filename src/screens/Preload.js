import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation'
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions'

class Preload extends Component {
    static navigationOption = {
        title: '',
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {};

        this.verifyStatus = this.verifyStatus.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Carregando...STATUS: {this.props.status}</Text>
            </View>
        )
    }

    verifyStatus () {
        switch (this.props.status) {
            case 1:
                this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Tabs' })
                    ]
                }))
                break;
            case 2:
                this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Login' })
                    ]
                }))
                break;
        }
    }

    componentDidMount() {
        this.props.checkLogin();
    }

    componentDidUpdate() {
        this.verifyStatus();
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
const PreloadScreen = connect(mapStateToProps, { checkLogin })(Preload)
export default PreloadScreen;