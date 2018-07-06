import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Container, Form, Item, Button, Label, Input, Text } from 'native-base';
import { changeFnText, changeLnText } from '../../actions';

class SignUp extends Component {
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
        this.props.registerUser();
    }
    render() {
        return (
            <Container style={styles.container}>
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
                            onChangeText={this.passwordTextChanged.bind(this)}
                        />
                    </Item>
                    <Button
                        success
                        rounded
                        full
                        onPress={this.registerButtonPressed.bind(this)}
                    >
                        <Text>Register</Text>
                    </Button>
                </Form>
            </Container>
        );
    }
}
const mapStateToProps = state => {
    const { email, password, fname, lname } = state.signup;
    return { email, password, fname, lname };
};
export default connect(
    mapStateToProps,
    { changeFnText, changeLnText }
)(SignUp);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10
    }
});
