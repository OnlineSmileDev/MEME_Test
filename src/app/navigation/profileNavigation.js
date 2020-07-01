import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RouteNames from './common/RouteNames';
import UserProfileScreen from '../screens/Profile/UserProfile/UserProfileScreen';
import SettingScreen from '../screens/Settings/Setting/SettingScreen';
import ShareAppScreen from '../screens/ShareApp/ShareAppScreen';
import BeginDealBreakerScreen from '../screens/Profile/Dealbreaker/BeginDealbreaker/BeginDealBreakerScreen';
import EndDealbreakerScreen from '../screens/Profile/Dealbreaker/EndDealbreaker/EndDealbreakerScreen';
import DealbreakerScreen from '../screens/Profile/Dealbreaker/GenericDealbreaker/DealbreakerScreen';
import ReligionTypeScreen from '../screens/Profile/Dealbreaker/ReligionTypes/ReligionTypeScreen';
import DealbreakerFinishedScreen from '../screens/Profile/Dealbreaker/DealbreakerFinished/DealbreakerFinishedScreen';
import AgeDistanceScreen from '../screens/Profile/AgeDistance/AgeDistanceScreen';
import ImageChooserScreen from '../screens/ImageChooser/ImageChooserScreen';

const Profile = createStackNavigator();
const ProfileTab = () => (
    <Profile.Navigator
        initialRouteName={RouteNames.UserProfile}
        headerMode={'none'}>
        <Profile.Screen
            name={RouteNames.UserProfile}
            component={UserProfileScreen} />
        <Profile.Screen
            name={RouteNames.Setting}
            component={SettingScreen} />
        <Profile.Screen
            name={RouteNames.ShareApp}
            component={ShareAppScreen} />
        <Profile.Screen
            name={RouteNames.BeginDealbreaker}
            component={BeginDealBreakerScreen} />
        <Profile.Screen
            name={RouteNames.EndDealbreaker}
            component={EndDealbreakerScreen} />
        <Profile.Screen
            name={RouteNames.AgeDistance}
            component={AgeDistanceScreen} />
        <Profile.Screen
            name={RouteNames.GenericDealbreaker}
            component={DealbreakerScreen} />
        <Profile.Screen
            name={RouteNames.ReligionTypesDealbreaker}
            component={ReligionTypeScreen} />
        <Profile.Screen
            name={RouteNames.DealbreakerFinished}
            component={DealbreakerFinishedScreen} />
        <Profile.Screen
            name={RouteNames.ImageChooser}
            component={ImageChooserScreen} />
    </Profile.Navigator>
)

export { ProfileTab };