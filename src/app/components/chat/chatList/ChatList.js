import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import styles from './styles';
import ChatListItem, { chatListItemMode, badgeTypes } from '../chatListItem/ChatListItem';

export default ChatList = (props) => {
    const onRefresh = () => {
        // console.log('onRefresh called');
        props.onRefreshChatList();
    }

    return (
        <ScrollView contentContainerStyle={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={props.isChatListRefreshing}
                    onRefresh={onRefresh} />}>

            {props.chats.map((x) => (
                <ChatListItem
                    loadChatHistory={props.loadChatHistory}
                    selectable={props.selectable}
                    isSelected={props.selectList && props.selectList.indexOf(x.id) >= 0}
                    onSelected={props.onSelected}
                    id={x.id}
                    key={x.id}
                    matchId={x.matchId}
                    name={x.firstName + ' ' + x.lastName}
                    text={x.messageContent}
                    uri={x.profilePicture}
                    badgeType={badgeTypes.none} />
            ))}
        </ScrollView>
    )
}

ChatList.propTypes = {
    selectable: PropTypes.bool.isRequired,
    onSelected: PropTypes.func.isRequired,
    chats: PropTypes.array.isRequired,
    chatListItemMode: PropTypes.string.isRequired,
    loadChatHistory: PropTypes.func,
    isChatListRefreshing: PropTypes.bool,
    onRefreshChatList: PropTypes.func,
}
ChatList.defaultProps = {
    selectable: true,
    onSelected: (val) => { },
    chats: [],
    chatListItemMode: chatListItemMode.share,
    loadChatHistory: () => { }
}