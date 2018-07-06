import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Form, Item, Button, Label, Input, Text } from 'native-base';

class SignUp extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Form>
                    <Item>
                        <Label>First Name</Label>
                        <Input
                            autoCorrect={false}
                            onChangeText={this.props.fnTextChanged.bind(this)}
                        />
                    </Item>
                    <Item>
                        <Label>Last Name</Label>
                        <Input 
                            autoCorrect={false}
                            onChangeText={this.props.lnTextChanged.bind(this)}
                        />
                    </Item>
                </Form>
            </Container>
        );
    }
}
export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
