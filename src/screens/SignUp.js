import React, { Component } from 'react';
import { Text, StyleSheet, ImageBackground , TextInput, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
import { checkLogin, registerNewUser, changeName, changeEmail, changePassword } from '../actions/AuthActions'

class SignUp extends Component {
    static navigationOptions = {
        title: 'SignUp',
        header:null
      };

    constructor(props) {
        super(props)
        this.state = {};

        this.signInAction = this.signInAction.bind(this);
    }

    signInAction = () => {

        this.props.navigation.goBack();
    }

    registerAction = () => {
        this.props.registerNewUser(
            this.props.name,
            this.props.email,
            this.props.password
        );
    }

    componentDidUpdate() {
        this.verifyStatus();
    }

    verifyStatus = () => {
        if(this.props.status === 1) {
            this.props.navigation.dispatch(StackActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({routeName:'Tabs'})
                ]
            }))
        }
    }

    render() {
        return (
            <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
                <Text style={styles.logo}>Rede</Text>
                <TextInput
                    value={this.props.name}
                    onChangeText={this.props.changeName}
                    style={styles.input}
                    placeholder="Digite seu nome : "
                    placeholderTextColor="#FFF"
                    underlineColorAndroid="transparent"
                    />

                <TextInput
                    value={this.props.email}
                    onChangeText={this.props.changeEmail}
                    style={styles.input}
                    placeholder="Digite seu e-mail : "
                    placeholderTextColor="#FFF"
                    underlineColorAndroid="transparent"
                    />
                <TextInput
                    value={this.props.password}
                    onChangeText={this.props.changePassword}
                    style={styles.input}
                    placeholder="Digite sua senha : "
                    placeholderTextColor="#FFF"
                    underlineColorAndroid="transparent"
                    secureTextEntry={true}
                    />
                <TouchableHighlight
                     onPress={this.registerAction}
                     style={styles.actionButton}
                     underlayColor="#307EAF"
                     >
                    <Text style={styles.actionButtonText}>Fazer o Cadastro</Text>
                </TouchableHighlight>

                <TouchableHighlight
                     onPress={this.signInAction}
                     style={styles.signButton}
                     underlayColor="transparent"
                     >
                    <Text style={styles.signButtonText}>Já tem cadastro? Clique aqui</Text>
                </TouchableHighlight>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
    },
    logo:{
        fontSize:50,
        color:'#FFF',
        marginBottom:30,
    },
    input:{
        width:"90%",
        height:50,
        backgroundColor: 'rgba(255, 255,255, 0.15)',
        borderRadius:5,
        color: '#FFF',
        fontSize:18,
        marginBottom: 10
    },
    actionButton:{
        width: '90%',
        height:50,
        backgroundColor: 'transparent',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionButtonText:{
        color: '#FFF',
        fontSize:18,
        fontWeight: 'bold',
    },
    signButton:{
        width: '90%',
        height:50,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    signButtonText:{
        fontSize:16,
        color: '#FFF',
    }
})

const mapStateToProps = (state) => {
    return {
        status: state.auth.status,
        name:state.auth.name,
        email:state.auth.email,
        password:state.auth.password
    }
}
const SignUpScreen = connect(mapStateToProps, { checkLogin, registerNewUser, changeName, changeEmail, changePassword })(SignUp)
export default SignUpScreen;