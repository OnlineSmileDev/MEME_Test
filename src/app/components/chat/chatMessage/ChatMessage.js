import React from 'react';

import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './styles';
import { View, Text } from 'react-native';
import chatMessageTypes from './chatMessageTypes';
import { scale } from 'react-native-size-matters';
import ChatAvatar from '../../avatar/ChatAvatar/ChatAvatar';
import chatAvatarTypes from '../../avatar/ChatAvatar/chatAvatarTypes';

export default ChatMessage = (props) => {

    const textMessage = () => {
        const _style = props.useSenderView ? styles.senderMessageView : styles.matchMessageView;
        const subStyle = props.useSenderView ? { flexDirection: 'row-reverse' } : {};
        const avatarType = props.useSenderView ? chatAvatarTypes.Sender : chatAvatarTypes.Match;
        const avatarUri = props.useSenderView ? props.fromUserAvatar : props.toUserAvatar;
        const triangleView = props.useSenderView ? styles.triangleSenderView : styles.triangleRecieverView;
        // console.log(avatarUri);
        return (
            <View style={{ ...styles.subContainer, ...subStyle }}>
                <View style={styles.icon}>
                    <ChatAvatar
                        type={avatarType}
                        uri={avatarUri}
                    />
                </View>
                < View style={_style} >
                    <Text style={styles.textStyle}>
                        {props.text}
                    </Text>
                    <View style={triangleView} />
                </View >
            </View >
        );
    }

    return (
        <View style={styles.container}>
            {props.contentType === chatMessageTypes.Text && textMessage()}
        </View>
    );
}

ChatMessage.propTypes = {
    contentType: PropTypes.string.isRequired,
    text: PropTypes.string,
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    useSenderView: PropTypes.bool.isRequired,
    toUserAvatar: PropTypes.string,
    fromUserAvatar: PropTypes.string
}

ChatMessage.defaultProps = {
    contentType: chatMessageTypes.Text,
    useSenderView: true,
}