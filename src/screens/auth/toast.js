import React, { Component } from 'react';
import { Container, Header, Content, Text, Button, Toast } from 'native-base';
export default class ToastText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        };
    }
    render() {
        return (
            <Container>
                <Header />
                <Content padder>
                    <Button
                        onPress={() =>
                            Toast.show({
                                text: 'Wrong password!',
                                textStyle: { color: 'yellow' },
                                buttonText: 'Okay'
                            })
                        }
                    >
                        <Text>Toast</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
