import React, { Component } from "react";
import { View, Dimensions, Text, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { scale } from "react-native-size-matters";
import { ScrollView } from "react-native-gesture-handler";
import { TabView, TabBar } from "react-native-tab-view";

import SwipeView from "../../../components/swipeView/SwipeView";
import HeaderTypes from "../../../components/common/header/HeaderTypes";
import { TopHeaderBar } from "../../../components/common/header/TopHeaderBar";
import ProfileDetails from "../../../components/profileDetails/ProfileDetails";
import styles from './styles';
import RouteNames from "../../../navigation/common/RouteNames";
import commonDispatchProps from "../../../state/common/commonDispatchProps";
import commonStateProps from "../../../state/common/commonStateProps";
import ImageIconTypes from "../../../components/common/ImageIcon/ImageIconTypes";
import MemeOverlayView from "../../../components/memesView/memeOverlay/MemeOverlayView";
import MatchesProfileButtons from "../../../components/matches/matchesProfileButtons/MatchesProfileButtons";
import MainChat from "../../../components/chat/mainChat/MainChat";
import ChatInput from "../../../components/chat/chatInput/ChatInput";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { chatSendBegin } from "../../../state/actions/api/chatApiActions";
import { TimerTypes } from "../../../state/actions/common/timerState";

const initialLayout = { width: Dimensions.get('window').width };

const routes = [
    { key: '_profile', title: 'Profile' },
    { key: '_chat', title: 'Chat' },
];

const Params = {
    currentMatch: 'currentMatch',
    currentMatchChat: 'currentMatchChat',
    isOverlayVisible: 'isOverlayVisible',
    overlayUri: 'overlayUri',
    currentTab: 'currentTab',
    showMoreHumorStyle: 'showMoreHumorStyle',
    chatInput: 'chatInput',
    isChatListRefreshing: 'isChatListRefreshing',
    reloadChat: 'reloadChat'
}

class MatchWithChatScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    componentDidUpdate(prevProps) {
    }
    getProfileView = () => {
        const matchData = this.props[Params.currentMatch];
        if (!matchData?.id) {
            return (<></>);
        }
        const fireMemes = []; //this.props.fireMemes[matchData.id] ?? 
        return (

            <ScrollView contentContainerStyle={styles.container}>
                <Text>Match Tab</Text>
            </ScrollView>
        )
    }
    reloadChat = () => {
        const matchId = this.props.route.params?.matchId;
        this.props.fetchChatHistory(this.props.user.id, matchId);
    }

    getChatView = () => {
        const matchData = this.props[Params.currentMatch]
        return (

            <KeyboardAwareScrollView contentContainerStyle={{
                flex: 1,
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexGrow: 1
                // zIndex: -1111
            }}
                scrollEnabled>
                <View style={{
                    backgroundColor: 'transparent',
                    width: '100%',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                    // zIndex: -10000
                }}>
                    <Text>Chat Tab</Text>
                </View>
            </KeyboardAwareScrollView>
        )
    }

    setTabStyle = (route, focused) => {
        if (focused) {
            return (<Text style={styles.activeTabText}>
                {route.title}
            </Text>);
        }
        else {
            return (<Text style={styles.inactiveTabText}>
                {route.title}
            </Text>);
        }
    }

    handleGoBack = () => {
    }
    render() {
        const index = this.props[Params.currentTab];
        return (
            <>
                <TopHeaderBar
                    type={HeaderTypes.textWithIcons}
                    text={this.props[Params.currentMatch].firstName}
                    textSize={scale(24)}
                    leftOnPress={this.handleGoBack}
                    rightIcon={ImageIconTypes.dots.name} />
                <TabView
                    indicatorStyle={{ backgroundColor: 'white' }}
                    swipeEnabled={false}
                    navigationState={{ index, routes }}
                    renderScene={({ route }) => {
                        switch (route.key) {
                            case '_profile':
                                return (this.getProfileView())
                            case '_chat':
                                return (this.getChatView())
                            default:
                                return null;
                        }
                    }}
                    onIndexChange={this.ontabChange}
                    initialLayout={initialLayout}
                    style={styles.tabStyle}
                    renderLabel={({ route, focused, color }) => this.setTabStyle(route, focused, color)}
                    renderTabBar={props =>
                        (<TabBar
                            {...props}
                            style={styles.tabStyle}
                            renderLabel={({ route, focused, color }) => this.setTabStyle(route, focused, color)}
                        />)}
                />
                {this.overlay()}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    const commonState = commonStateProps(state, RouteNames.MatchWithChat);
    const { matches, chats } = state;
    return {
        ...commonState,
        currentMatch: matches.currentMatch,
        chatHistory: chats.chatHistory,
        [Params.currentMatchChat]: commonState.thisScreen[Params.currentMatchChat] ?? {},
        [Params.isOverlayVisible]: commonState.thisScreen[Params.isOverlayVisible] ?? false,
        [Params.overlayUri]: commonState.thisScreen[Params.overlayUri] ?? '',
        [Params.chatInput]: commonState.thisScreen[Params.chatInput] ?? '',
        [Params.currentTab]: commonState.thisScreen[Params.currentTab] ?? 0,
        [Params.showMoreHumorStyle]: commonState.thisScreen[Params.showMoreHumorStyle] ?? false,
        [Params.isChatListRefreshing]: commonState.thisScreen[Params.isChatListRefreshing] ?? false,
        [Params.reloadChat]: commonState.thisScreen[Params.reloadChat] ?? false
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.MatchWithChat)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MatchWithChatScreen);