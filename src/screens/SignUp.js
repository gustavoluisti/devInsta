import React, { Component } from 'react';
import { Text, StyleSheet, ImageBackground , TextInput, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions'

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

    render() {
        return (
            <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
                <Text style={styles.logo}>Rede</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome : "
                    placeholderTextColor="#FFF"
                    underlineColorAndroid="transparent"
                    />

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail : "
                    placeholderTextColor="#FFF"
                    underlineColorAndroid="transparent"
                    />
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha : "
                    placeholderTextColor="#FFF"
                    underlineColorAndroid="transparent"
                    secureTextEntry={true}
                    />
                <TouchableHighlight
                     onPress={()=> {}}
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
        status: state.auth.status
    }
}
const SignUpScreen = connect(mapStateToProps, { checkLogin })(SignUp)
export default SignUpScreen;