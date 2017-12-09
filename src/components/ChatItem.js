//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';

// create a component
class ChatItem extends Component {

    showAvatarOrNoT(message) {
        if (message.author.id !== this.props.user.id ) {
            return (
                <Avatar
                    source={{ uri: message.author.avatar }}
                    small
                    rounded
                />
            );
        }

        return <View/>
    }
    render() {
        const message = this.props.message;
        const isMyMessage = message.author.id == this.props.user.id;
        const textContainerExtra = isMyMessage ? styles.textContainerRight : styles.textContainerLeft;
        return (
            <View style={styles.messageContainer}>
                {this.showAvatarOrNoT(message)}
                <View style={[styles.textContainer, textContainerExtra ]}>
                    <Text style={styles.sender}>{message.author.username}</Text>
                    <Text style={styles.message}>{message.text}</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    messageContainer: {
        flexDirection: 'row',
        padding: 20
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        borderRadius: 5,
        paddingHorizonal: 10,
        paddingVertical: 5
    },
    textContainerLeft:{
        alignItems: 'flex-start',
        backgroundColor: '#d5d8d4'
    },
    textContainerRight: {
        alignItems: 'flex-end',
        backgroundColor: '#66db30'
    },
    message: {
        fontSize: 16
    },
    sender: {
        fontWeight: 'bold',
        paddingRight: 10
    }
});

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}
//make this component available to the app
export default connect(mapStateToProps)(ChatItem);
