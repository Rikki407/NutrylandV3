import React, { Component } from 'react';
import { Container, Form, Item, Button, Label, Input, Icon } from 'native-base';
import { Text, StyleSheet } from 'react-native';
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
                        <Text style={styles.text}> Login </Text>
                    </Button>
                    <Button style={styles.button} full rounded primary>
                        <Text style={styles.text}> Sign Up </Text>
                    </Button>
                    <Button
                        onPress={this.onFBSigninPress.bind(this)}
                        style={styles.button}
                        full
                        rounded
                        primary
                    >
                        <Icon
                            type="FontAwesome"
                            name="facebook"
                            style={{ fontSize: 30 }}
                        />

                        <Text style={styles.text}> Sign in with Facebook </Text>
                    </Button>

                    <Card onPress={this.onGoogleSigninPress.bind(this)}>
                        <Icon
                            type="FontAwesome"
                            name="google"
                            style={{ fontSize: 30 }}
                        />
                        <Text> Sign in with Google </Text>
                    </Card>
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
    text: {
        color: 'white'
    }
});
