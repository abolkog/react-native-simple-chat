//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Header, Button } from 'react-native-elements'


// create a component
class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            avatar: '',
            disabled: true
        }
    }

    onUserNameChanged(userName) {
        if (userName && userName.length > 3) {
            this.setState({
                disabled: false,
                username: userName
            });
        } else {
            this.setState({
                disabled: true
            });
        }
    }

    onLoginPressed() {
        console.log(`UserName is ${this.state.username} and avatar is ${this.state.avatar}` );
    }

    
    showBtnOrSpinner() {
        return (
            <Button
                title='Join Chat'
                backgroundColor='#2195f3'
                disabled={this.state.disabled}
                onPress={this.onLoginPressed.bind(this)}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'Login', style: { color: '#fff', fontSize:20 } }}
                />
                <FormLabel>Chat Name</FormLabel>
                <FormInput 
                    placeholder='Select Chat Name'
                    onChangeText={(username) => this.onUserNameChanged(username)}
                />
                <FormLabel>Chat Avatar</FormLabel>
                <FormInput
                    placeholder='Leave it blank for default'
                    onChangeText={avatar => this.setState({ avatar })}
                />

                <View style={styles.btnContainer}>
                    {this.showBtnOrSpinner()}
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btnContainer: {
        marginTop: 20
    }
});

//make this component available to the app
export default Login;
