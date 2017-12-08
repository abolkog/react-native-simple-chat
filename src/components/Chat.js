//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, 
    Platform, Keyboard,
    TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { Header } from 'react-native-elements';

import ChatItem from './ChatItem';

// create a component
class Chat extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            disabled: true,
            messages: [
                {
                    id: 1,
                    text: 'Hello',
                    avatar: 'http://abolkog.com/img/default_user.png',
                    author: {
                        id: 1,
                        avatar: 'http://abolkog.com/img/default_user.png',
                        username: 'Khalid Tany Khals'
                    }
                },
                {
                    id: 2,
                    text: 'How are you',
                    author: {
                        id: 2,
                        avatar: 'http://abolkog.com/img/default_user.png',
                        username: 'Khalid'
                    }
                    
                }
            ]
        }
    }

    onTyping(text) {
       if (text && text.length >= 2 ) {
           this.setState({
               disabled: false,
               text
           });
       } else {
           this.setState({
               disabled: true
           })
       }
    }

    onSendBtnPressed () {
        const messages = this.state.messages;
        const newMessage = {
            text: this.state.text,
            author: {
                id: 1,
                avatar: 'http://abolkog.com/img/default_user.png',
                username: 'Khalid'
            }
        };

        messages.unshift(newMessage);
        this.setState({ messages })
        this.textInput.clear();
        Keyboard.dismiss();
    }

    renderChatItem({ item }) {
        return <ChatItem message={item} />
    }

    keyExtractor = (item, index) => index;

    render() {
        const extraBtnStyle = this.state.disabled ? styles.disabledBtn : styles.enabledBtn;
        let behavior = '';
        if (Platform.OS == 'ios')  {
            behavior = 'padding'
        }
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'Wanasa', style: { color: '#fff', fontSize: 20 } }}
                />

                <FlatList 
                    inverted
                    data={this.state.messages}
                    renderItem={this.renderChatItem}
                    keyExtractor={this.keyExtractor}
                />

                <KeyboardAvoidingView behavior={behavior}>
                    <View style={styles.inputBar}>
                        
                        <TextInput 
                            style={styles.textBox} 
                            multiline
                            onChangeText={(text) => this.onTyping(text)}
                            ref={input => { this.textInput = input; } }
                        />

                        <TouchableHighlight 
                            style={[styles.sendBtn, extraBtnStyle ]}
                            disabled={this.state.disabled}
                            onPress={this.onSendBtnPressed.bind(this)}
                        >
                            <Text style={{ color: '#fff'}}>Send</Text>
                        </TouchableHighlight>
                    </View>
                </KeyboardAvoidingView>
                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHoriztonal: 5,
        paddingVertical: 10,
        backgroundColor: '#dadfea'
    },
    textBox: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: 14,
        paddingHoriztonal: 10,
        flex: 1,
        paddingVertical: 5,
        marginLeft: 5
    },
    sendBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginLeft: 5
    },
    enabledBtn: {
        backgroundColor: '#476DC5'
    },
    disabledBtn: {
        backgroundColor: '#89a9f4'
    }
});

//make this component available to the app
export default Chat;
