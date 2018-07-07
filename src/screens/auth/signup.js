import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Form, Item, Button, Label, Input, Text } from 'native-base';
import {
    changeFnText,
    changeLnText,
    changeEmailText,
    changePasswordText,
    registerUser
} from '../../actions';

class SignUp extends Component {
    static navigationOptions = {
        title: 'Sign Up',
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            textAlign: 'center',
            flex: 0.85
        }
    };
    componentWillReceiveProps(nextProps) {
        if (nextProps.userLoggedIn) {
            this.props.navigation.replace('Home');
        }
    }
    fnTextChanged(text) {
        this.props.changeFnText(text);
    }
    lnTextChanged(text) {
        this.props.changeLnText(text);
    }
    emailTextChanged(text) {
        this.props.changeEmailText(text);
    }
    passwordTextChanged(text) {
        this.props.changePasswordText(text);
    }
    registerButtonPressed() {
        const { email, password, fname, lname } = this.props;
        this.props.registerUser({ email, password, fname, lname });
    }
    render() {
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Image
                    source={require('../../assets/NutryLandLogo.png')}
                    style={{
                        height: 200,
                        width: 200,
                        alignSelf: 'center',
                        flex: 0.24
                    }}
                />
                <View style={styles.view}>
                    <Form>
                        <Item floatingLabel>
                            <Label>First Name</Label>
                            <Input
                                autoCorrect={false}
                                onChangeText={this.fnTextChanged.bind(this)}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Last Name</Label>
                            <Input
                                autoCorrect={false}
                                onChangeText={this.lnTextChanged.bind(this)}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input
                                autoCorrect={false}
                                onChangeText={this.emailTextChanged.bind(this)}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input
                                autoCorrect={false}
                                onChangeText={this.passwordTextChanged.bind(
                                    this
                                )}
                                secureTextEntry
                            />
                        </Item>
                        <Button
                            success
                            full
                            rounded
                            onPress={this.registerButtonPressed.bind(this)}
                            style={{ marginTop: 50 }}
                        >
                            <Text>Register</Text>
                        </Button>
                    </Form>
                </View>
            </Container>
        );
    }
}
const mapStateToProps = state => {
    const { email, password, fname, lname, userLoggedIn } = state.signup;
    return { email, password, fname, lname, userLoggedIn };
};
export default connect(
    mapStateToProps,
    {
        changeFnText,
        changeLnText,
        changeEmailText,
        changePasswordText,
        registerUser
    }
)(SignUp);

const styles = StyleSheet.create({
    view: {
        flex: 0.5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10
    }
});
