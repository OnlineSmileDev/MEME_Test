
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from "react-redux";
import { Text } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';
import styles from './styles';
import HeaderTypes from '../../../components/common/header/HeaderTypes';
import { TopHeaderBar } from '../../../components/common/header/TopHeaderBar';
import SquareAvatar from '../../../components/avatar/SquareAvatar/SquareAvatar';
import RouteNames from '../../../navigation/common/RouteNames';
import commonDispatchProps from '../../../state/common/commonDispatchProps';
import commonStateProps from '../../../state/common/commonStateProps';
import ImageIcon from '../../../components/common/ImageIcon/ImageIcon';
import ImageIconTypes from '../../../components/common/ImageIcon/ImageIconTypes';
import SettingPreferences from '../../../components/settings/preferences/SettingPreferences';
import CommunicationSetting from '../../../components/settings/communication/CommunicationSetting';
import NotificationPreferences from '../../../components/settings/notifications/NotificationPreferences';
import { navigateOut } from '../../../navigation/common/NavigationHelper';

const Params = {
    updateValues: 'updateValues',
}
class SettingScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    componentDidMount() {
    }
    componentDidUpdate() {
    }
    updateSettings = (field, value, submit) => {
        this.props.updateScreenData(Params.updateValues, { ...this.props[Params.updateValues], [field]: value })
    }
    getNameView = () => (
        <View style={styles.nameView}>
            <Text style={styles.nameText}>{this.props.user.firstName}</Text>
            <View style={styles.editProfileView}>
                <Text style={styles.editProfileText}>
                    Edit Profile
                </Text>
                <ImageIcon
                    type={ImageIconTypes.pencilTransparent.name}
                    size={scale(24)}
                    onPress={() => this.props.navigation.goBack()} />
            </View>
            <View style={styles.share}>
                <Text style={styles.shareText}>
                    Share the app with friends
                </Text>
                <ImageIcon
                    type={ImageIconTypes.share2.name}
                    size={scale(24)}
                    onPress={() => navigateOut(this.props.navigation, RouteNames.ShareApp)} />
            </View>
        </View>

    )
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <TopHeaderBar
                    type={HeaderTypes.textWithLeftIcon}
                    text={'Setting'}
                    textSize={scale(24)}
                    leftIconSize={scale(20)}
                    leftOnPress={() => this.props.navigation.goBack()}
                    bottomShadow />
                <View style={styles.avatarView}>
                    <SquareAvatar size={scale(175)} uri={this.props.user.profilePicture} />
                </View>
                {this.getNameView()}
                <SettingPreferences
                    interestedIn={this.props[Params.updateValues]?.interestedIn}
                    ethnicity={this.props[Params.updateValues]?.ethnicity}
                    religion={this.props[Params.updateValues]?.religion}
                    onPreferenceChange={(field, value) => this.updateSettings(field, value, true)}
                />
                <CommunicationSetting
                    phone={this.props[Params.updateValues]?.phone}
                    email={this.props[Params.updateValues]?.email}
                    onUpdate={this.updateSettings}
                />
                <NotificationPreferences
                    push_notifications={this.props[Params.updateValues]?.push_notifications ?? false}
                    onUpdate={(val) => this.updateSettings('push_notifications', val, true)}
                />
                <View style={{ marginTop: scale(50) }} />
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.Setting);
    return {
        ...commonState,
        [Params.updateValues]: commonState.thisScreen[Params.updateValues] ?? {},
    }
};

const mapDispatchToProps = dispatch => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.Setting),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingScreen);