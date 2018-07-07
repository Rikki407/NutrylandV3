import React, { Component } from 'react';
import { Container, Form, Item, Button, Label, Input, Text } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import {
    emailChanged,
    passwordChanged,
    loginWithEmail,
    signinWithFB,
    signinWithGoogle
} from '../../actions';
import Card from '../../components/Card';
class Login extends Component {
    static navigationOptions = {
        header: null
    };
    componentWillReceiveProps(nextProps) {
        if (nextProps.userLoggedIn) {
            this.props.navigation.replace('Home');
        }
    }
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onLoginPress() {
        const { email, password } = this.props;
        this.props.loginWithEmail({ email, password });
    }
    onFBSigninPress() {
        this.props.signinWithFB();
    }
    onGoogleSigninPress() {
        this.props.signinWithGoogle();
    }
    onCreateAccountPress() {
        this.props.navigation.navigate('SignUp');
    }

    render() {
        return (
            <Container style={styles.container}>
                <Image
                    source={require('../../assets/NutryLandLogo.png')}
                    style={{ height: 200, width: 200, alignSelf: 'center' }}
                />
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            autoCorrect={false}
                            onChangeText={this.onEmailChange.bind(this)}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={this.onPasswordChange.bind(this)}
                            secureTextEntry
                        />
                    </Item>
                    <Button
                        style={styles.button}
                        full
                        rounded
                        success
                        onPress={this.onLoginPress.bind(this)}
                    >
                        <Text style={{ color: 'white' }}> Login </Text>
                    </Button>

                    <Text style={styles.textStyle}> Or </Text>

                    <Card
                        onPress={this.onFBSigninPress.bind(this)}
                        source={require('../../../assets/if_facebook_317746.png')}
                    >
                        Sign in with Facebook
                    </Card>

                    <Card
                        onPress={this.onGoogleSigninPress.bind(this)}
                        source={require('../../../assets/icons8-google-50.png')}
                    >
                        Sign in with Google
                    </Card>
                    <Button
                        transparent
                        style={{ alignSelf: 'center', marginTop: 30 }}
                        onPress={this.onCreateAccountPress.bind(this)}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                            }}
                            uppercase={false}
                        > 
                            Sign Up Here
                        </Text>
                    </Button>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const { email, password, userLoggedIn } = state.auth;
    return { email, password, userLoggedIn };
};

export default connect(
    mapStateToProps,
    {
        emailChanged,
        passwordChanged,
        loginWithEmail,
        signinWithFB,
        signinWithGoogle
    }
)(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10
    },
    button: {
        marginTop: 10
    },
    textStyle: {
        fontSize: 22,
        fontWeight: '400',
        alignSelf: 'center',
        marginTop: 10,
        color: '#31373f'
    }
});
