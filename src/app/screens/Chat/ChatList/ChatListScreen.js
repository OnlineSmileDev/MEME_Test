import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from "react-redux";
import { Text } from 'react-native-paper';
import { scale } from 'react-native-size-matters';
import styles from './styles';
import { TopHeaderBar } from '../../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../../components/common/header/HeaderTypes';
import commonStateProps from '../../../state/common/commonStateProps';
import RouteNames from '../../../navigation/common/RouteNames';
import commonDispatchProps from '../../../state/common/commonDispatchProps';
import ImageIconTypes from '../../../components/common/ImageIcon/ImageIconTypes';
import ChatList from '../../../components/chat/chatList/ChatList';
import { chatListItemMode } from '../../../components/chat/chatListItem/ChatListItem';
import ChatAvatar from '../../../components/avatar/ChatAvatar/ChatAvatar';
import chatAvatarTypes from '../../../components/avatar/ChatAvatar/chatAvatarTypes';
import Loader from '../../../components/loader/Loader';
import LoaderTypes from '../../../components/loader/LoaderTypes';

const Params = {
    reloadChat: 'reloadChat',
    isChatListRefreshing: 'isChatListRefreshing'
}

class ChatListScreen extends Component {
    componentDidMount() {
        this.props.fetchChatSummary(this.props.user.id);
        this.props.fetchLatestMatches(this.props.user.id);
    }
    loadChatHistory = (matchId) => {
        console.log('selected =' + matchId);
        this.props.navigation.navigate(RouteNames.MatchWithChat, { tabIndex: 1, matchId: matchId });
    }
    onRefreshChatList = () => {
        this.props.fetchChatSummary(this.props.user.id);
    }
    reloadChatListScreen = () => {
        this.props.fetchChatSummary(this.props.user.id);
        this.props.fetchLatestMatches(this.props.user.id);
    }
    render() {
        return (
            <>
                <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'Messages'} textSize={scale(24)} />
                <View style={styles.container}>

                    <Text style={styles.newMatchesText}>New Matches</Text>
                    <Loader type={LoaderTypes.primaryColor} />
                </View>
            </>
        )
    }
}


ChatListScreen.propTypes = {

}
ChatListScreen.defaultProps = {

}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.ChatList);
    const { chats, matches } = state;
    return {
        ...commonState,
        chatListSummary: chats.chatListSummary,
        latestMatches: matches.latest,
        // [Params.recipients]: commonState.thisScreen[Params.recipients] ?? [],
        [Params.reloadChat]: commonState.thisScreen[Params.reloadChat] ?? false,
        [Params.isChatListRefreshing]: commonState.thisScreen[Params.isChatListRefreshing] ?? false
    }
};

const mapDispatchToProps = dispatch => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.ChatList)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatListScreen);