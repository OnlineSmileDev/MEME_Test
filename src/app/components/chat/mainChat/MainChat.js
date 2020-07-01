import React, { Component } from "react";
import { View, Dimensions, Text, SafeAreaView, ScrollView, RefreshControl } from "react-native";
import { connect } from "react-redux";
import { scale } from "react-native-size-matters";
import styles from './styles';
import PropTypes from 'prop-types';
import DateLabel from "../dateLabel/DateLabel";
import ChatMessage from "../chatMessage/ChatMessage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ChatInput from "../chatInput/ChatInput";

export default MainChat = (props) => {

    const getDateView = (date) => (
        <View style={styles.DateView}>
            <DateLabel date={date} />
        </View>
    )
    const useSenderView = (fromUserId) => {
        return props.currentUserId === fromUserId;
    }
    const onRefresh = () => {
        console.log('onRefresh called');
        props.onRefreshChatList();
    }

    const getChatsForDate = (date) => (
        <>
            {getDateView(date)}
            {props.chatData[date].items.map(x => (
                <ChatMessage
                    id={x.id}
                    text={x.messageContent}
                    key={x.id}
                    toUserAvatar={x.toUserAvatar}
                    fromUserAvatar={props.currentUserAvatar}
                    useSenderView={useSenderView(x.fromUserId)} />
            ))
            }
        </>
    )
    const getChat = () => (
        <>
            {
                Object.keys(props.chatData).map(x => (
                    <>
                        {getChatsForDate(x)}
                    </>
                ))
            }
        </>)

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            ref={ref => { this.scrollView = ref }}
            onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}
            refreshControl={
                <RefreshControl
                    refreshing={props.isChatListRefreshing}
                    onRefresh={onRefresh} />}>



            {getChat()}

        </ScrollView>
    )
}

MainChat.propTypes = {
    chatData: PropTypes.object.isRequired,
    currentUserId: PropTypes.string.isRequired,
    currentUserAvatar: PropTypes.string,
    isChatListRefreshing: PropTypes.bool,
    onRefreshChatList: PropTypes.func,
    // chatHistory
    // matchUserId: PropTypes.strings,
    // isFromMatchView: PropTypes.bool.isRequired,
}
MainChat.defaultProps = {
    chatData: [],
    // isFromMatchView: false
}