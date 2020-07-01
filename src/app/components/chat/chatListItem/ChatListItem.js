import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';
import ChatAvatar from '../../avatar/ChatAvatar/ChatAvatar';
import chatAvatarTypes from '../../avatar/ChatAvatar/chatAvatarTypes';
import { scale } from 'react-native-size-matters';
import ImageIcon from '../../common/ImageIcon/ImageIcon';
import ImageIconTypes from '../../common/ImageIcon/ImageIconTypes';

export const badgeTypes = {
    none: 'none',
    new: 'new',
    yourTurn: 'yourturn'
}
export const chatListItemMode = {
    share: 'share',
    chat: 'chat'
}

export default ChatListItem = (props) => {

    const getBadgeText = () => {

    }
    const applyBadge = () => (
        <>
            {props.badgeType !== badgeTypes.none &&
                <View style={styles[props.badgeType + '_badgeView']}>
                    <Text style={styles[props.badgeType + '_badgeText']}>{getBadgeText()}</Text>
                </View>
            }
        </>
    )
    const applySelectIcon = () => (
        <>
            {!props.isSelected && <ImageIcon type={ImageIconTypes.emptyCircle.name} size={scale(50)} onPress={() => props.onSelected(props.id)} />}
            {props.isSelected && <ImageIcon type={ImageIconTypes.blueCircleTick.name} size={scale(50)} onPress={() => props.onSelected(props.id)} />}
        </>
    )
    return (
        <View style={styles.container} >
            <View style={styles.avatar}>
                <ChatAvatar type={chatAvatarTypes.Sumary} size={scale(50)} uri={props.uri} />
            </View>
            <View style={styles.mainChatView}>
                <Text style={styles.nameText}>{props.name}</Text>
                <Text style={styles.chatText} numberOfLines={1} onPress={() => props.loadChatHistory(props.matchId)}>{props.text}</Text>
            </View>
            <View style={{
                position: 'absolute',
                right: scale(10),
                top: scale(15)
            }}>
                {props.selectable && applySelectIcon()}
            </View>
        </View>
    )
}

ChatListItem.propTypes = {
    id: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    badgeType: PropTypes.string,
    matchId: PropTypes.string.isRequired,

    onSelected: PropTypes.func.isRequired,
    selectable: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    loadChatHistory: PropTypes.func,
}
ChatListItem.defaultProps = {
    onSelected: () => { },
    loadChatHistory: (val) => { },
    uri: 'https://i.pravatar.cc/300',
    name: 'Test Name',
    text: 'Welcome to holiwood land of fun. Lets go to the beach.',
    badgeType: badgeTypes.none,
    matchId: '',
    selectable: true,
    isSelected: false

}