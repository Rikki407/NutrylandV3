import React, { Component } from 'react';
import { Container, Form, Item, Button, Label, Input, Text } from 'native-base';
import { StyleSheet } from 'react-native';
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
    render() {
        return (
            <Container style={styles.container}>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            autoCorrect={false}
                            onChangeText={this.onEmailChange.bind(this)}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password </Label>
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
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                textDecorationLine: 'underline'
                            }}
                        >
                            Dont have an account?
                        </Text>
                    </Button>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const { email, password } = state.auth;
    return { email, password };
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
