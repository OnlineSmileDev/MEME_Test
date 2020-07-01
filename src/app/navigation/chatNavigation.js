import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RouteNames from './common/RouteNames';
import MatchWithChatScreen from '../screens/Matches/MatchWithChat/MatchWithChatScreen';
import ChatListScreen from '../screens/Chat/ChatList/ChatListScreen';

const Chat = createStackNavigator();
const ChatTab = () => (
    <Chat.Navigator
        initialRouteName={RouteNames.ChatList}
        headerMode={'none'}>
        <Chat.Screen
            name={RouteNames.ChatList}
            component={ChatListScreen} />
        <Chat.Screen
            name={RouteNames.MatchWithChat}
            component={MatchWithChatScreen} />
    </Chat.Navigator>);

export { ChatTab }