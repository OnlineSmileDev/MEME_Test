import React, { Component } from "react";
import { View, Dimensions, Text } from "react-native";
import { connect } from "react-redux";
import { scale } from "react-native-size-matters";
import { ScrollView } from "react-native-gesture-handler";
import { TabView, TabBar } from "react-native-tab-view";
import SwipeView from "../../../components/swipeView/SwipeView";
import ProfileDetails from "../../../components/profileDetails/ProfileDetails";
import ProfileBottomView from "../../../components/profileBottomView/profileBottomView";
import RouteNames from "../../../navigation/common/RouteNames";
import commonDispatchProps from "../../../state/common/commonDispatchProps";
import commonStateProps from "../../../state/common/commonStateProps";
import profileDetailTypes from "../../../components/profileDetails/profileDetailTypes";
import MemeOverlayView from "../../../components/memesView/memeOverlay/MemeOverlayView";
import { TopHeaderBar } from '../../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../../components/common/header/HeaderTypes';
import { colors } from '../../../styles/base';
import styles from './styles';
import { createUserUpdateItem } from "../../../services/api/helpers/users/userApiHelper";
import { fromHeightString, getAge } from "../../../utils/dateUtils";

const initialLayout = { width: Dimensions.get('window').width };

const routes = [
    { key: '_view', title: 'View' },
    { key: '_edit', title: 'Edit' },
];

const Params = {
    isOverlayVisible: 'isOverlayVisible',
    overlayUri: 'overlayUri',
    currentTab: 'currentTab',
    showMoreHumorStyle: 'showMoreHumorStyle',
    editValues: 'editValues',
    updateOccurred: 'updateOccurred',
    preferenceHeightValues: 'preferenceHeightValues',
    preferenceAgeValues: 'preferenceAgeValues',
    preferenceDistanceValues: 'preferenceDistanceValues'
}

class UserProfileScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    isEditMode = () => {
        return this.props[Params.currentTab] === 1;
    }

    updateDetailState = (field, value) => {
        return {
            ...this.props[Params.editValues],
            [field]: value
        }
    }
    checkAndUpdatePreferences = () => {
        //TODO: Check before updating if possible
        const age = this.props[Params.preferenceAgeValues];
        const height = this.props[Params.preferenceHeightValues];
        const distance = this.props[Params.preferenceDistanceValues];

        var updateAge = createUserUpdateItem('match-desire-range', JSON.stringify({
            min: age[0],
            max: age[1],
            Name: 'age',
            isADealbreaker: false
        }));
        var updateDistance = createUserUpdateItem('match-desire-range', JSON.stringify({
            min: 0,
            max: distance[0],
            Name: 'distance',
            isADealbreaker: false
        }));
        var updateHeight = createUserUpdateItem('match-desire-range', JSON.stringify({
            min: height[0],
            max: height[1],
            Name: 'height',
            isADealbreaker: false
        }));

        this.props.updateUser(this.props.user.id, [updateDistance, updateHeight, updateAge]);
    }

    updatePreference = (field, value, submit) => {
        let preference = '';
        switch (field) {
            case 'age':
                preference = Params.preferenceAgeValues;
                break;
            case 'distance':
                preference = Params.preferenceDistanceValues;
                break;
            case 'height':
                preference = Params.preferenceHeightValues;
                break;
        }
        this.props.updateScreenData(preference, value);
        if (submit) {
            this.checkAndUpdatePreferences();
        }
    }
    updateField = (field, value, submit) => {
        console.log(`field=${field},value=${value}`);
        let details = this.props[Params.editValues];
        let data = null;
        switch (field) {
            case 'politics':
            case 'work':
            case 'school':
            case 'height':
                data = createUserUpdateItem(field, value);
                details = this.updateDetailState(field, value)
                break;
            case 'bio':
                data = createUserUpdateItem(field, value);
                details = this.updateDetailState('profileBio', value)
                break;
            case 'smoke-weed':
                data = createUserUpdateItem('smoke', value);
                details = this.updateDetailState('smokeWeed', value)
                break;
            case 'use-drugs':
                data = createUserUpdateItem('use-drugs', value);
                details = this.updateDetailState('useDrugs', value)
                break;
            case 'drink-alcohol':
                data = createUserUpdateItem('alcohol', value);
                details = this.updateDetailState('drinkAlcohol', value);
                break;
        }
        this.props.updateScreenData(Params.editValues, details);
        if (submit) {
            this.props.updateUser(this.props.user.id, [data])
            if (!this.props[Params.updateOccurred]) {
                this.props.updateScreenData(Params.updateOccurred, true);
            }
        }
    }
    componentDidMount() {
        // this.props.updateLastScreen(this.props.user.id);
        this.props.updateScreenData(Params.editValues, this.props.user);
        this.props.fetchFireMemes(this.props.user.id);
        var desires = this.props.fetchMatchDesires(this.props.user);
        if (desires && desires.age) {
            this.props.updateScreenData(Params.preferenceAgeValues, [parseInt(desires.age.min), parseInt(desires.age.max)])
        }
        if (desires && desires.height) {
            this.props.updateScreenData(Params.preferenceHeightValues, [parseInt(desires.height.min), parseInt(desires.height.max)])
        }
        if (desires && desires.distance) {
            this.props.updateScreenData(Params.preferenceDistanceValues, [parseInt(desires.distance.max)])
        }
    }
    toggleMoreLess = () => {
        this.props.updateScreenData(Params.showMoreHumorStyle, !this.props[Params.showMoreHumorStyle]);
    }
    ontabChange = (index) => {
        this.props.updateScreenData(Params.currentTab, index);
    }
    onFireMemeSelect = (uri) => {
        this.props.updateScreenData(Params.overlayUri, uri);
        this.toggleOverlay(true);
    }
    toggleOverlay = (value) => {
        this.props.updateScreenData(Params.isOverlayVisible, value);
    }
    onRespond = () => {
        this.toggleOverlay(false);
    }
    overlay = () => {
        return (
            <MemeOverlayView
                uri={this.props[Params.overlayUri]}
                isVisible={this.props[Params.isOverlayVisible]}
                onClose={() => this.toggleOverlay(false)}
                onRespond={this.onRespond} />
        );
    }
    preloadImages = () => {
        // let arr = []
        // images.forEach((val, index) => {
        //     arr.push(val);
        // });
        // if (arr.length > 0) {
        //     FastImage.preload(arr);
        // }
    }
    onImageChooser = () => {
        this.props.navigation.navigate(RouteNames.ImageChooser, {
            images: this.props.user.profileImages,
            source: 'user-profile'
        });
    }
    getView = () => {
        const mode = this.isEditMode() ? profileDetailTypes.OwnProfileEdit : profileDetailTypes.OwnProfileView;
        // this.preloadImages(this.props.user.profileImages ?? [])
        return (
            <View style={[styles.scene, { backgroundColor: '#FFFFFF' }]} >
                <ScrollView contentContainerStyle={{ backgroundColor: '#FFFFFF', minHeight: '100%' }}>
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: scale(20)
                    }}>
                        <SwipeView
                            name={this.props.user.firstName}
                            age={getAge(this.props.user.birthday)}
                            showCameraIcon={this.isEditMode()}
                            images={this.props.user.profileImages}
                            onImageChooser={this.onImageChooser} />
                    </View>
                    <ProfileDetails
                        updateFieldFn={this.updateField}
                        user={this.props.user}
                        navigation={this.props.navigation}
                        showMoreHumorStyle={this.props[Params.showMoreHumorStyle]}
                        mode={mode}
                        fireMemes={this.props.fireMemes[this.props.user.id] ?? []}
                        toggleMoreLess={this.toggleMoreLess}
                        onFireMemeSelect={this.onFireMemeSelect}
                        editDetails={this.props[Params.editValues]}
                        updatePreferenceFn={this.updatePreference}
                        agePreferenceValues={this.props[Params.preferenceAgeValues]}
                        heightPreferenceValues={this.props[Params.preferenceHeightValues]}
                        distancePreferenceValues={this.props[Params.preferenceDistanceValues]}
                        details={this.props.user} />

                    {this.isEditMode() && <ProfileBottomView
                        navigation={this.props.navigation}
                        resetUser={this.props.resetUser}
                        timers={this.props.timers}
                        resetTimers={this.props.resetTimers}
                        user={this.props.user} />}
                </ScrollView>
            </View>
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

    render() {
        const index = this.props[Params.currentTab];
        if (index === 0 && this.props[Params.updateOccurred]) {
            this.props.updateScreenData(Params.updateOccurred, false);
            this.props.fetchProfile(this.props.user.id);
        }
        return (
            <>
            <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'Your Profile'} textSize={scale(27)} bottomShadow textStyle={{ color: colors.blackish }} />
                <TabView
                    indicatorStyle={{ backgroundColor: 'white' }}
                    swipeEnabled={false}
                    navigationState={{ index, routes }}
                    renderScene={({ route }) => {
                        switch (route.key) {
                            case '_view':
                            case '_edit':
                                return (this.getView())
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
    const commonState = commonStateProps(state, RouteNames.UserProfile);
    const { memeItems, timers } = state;
    return {
        ...commonState,
        fireMemes: memeItems.fireMemes,
        timers: timers,
        [Params.isOverlayVisible]: commonState.thisScreen[Params.isOverlayVisible] ?? false,
        [Params.overlayUri]: commonState.thisScreen[Params.overlayUri] ?? '',
        [Params.editValues]: commonState.thisScreen[Params.editValues] ?? {},
        [Params.currentTab]: commonState.thisScreen[Params.currentTab] ?? 0,
        [Params.showMoreHumorStyle]: commonState.thisScreen[Params.showMoreHumorStyle] ?? false,
        [Params.updateOccurred]: commonState.thisScreen[Params.updateOccurred] ?? false,
        [Params.preferenceAgeValues]: commonState.thisScreen[Params.preferenceAgeValues] ?? [21, 55],
        [Params.preferenceDistanceValues]: commonState.thisScreen[Params.preferenceDistanceValues] ?? [10],
        [Params.preferenceHeightValues]: commonState.thisScreen[Params.preferenceHeightValues] ?? [fromHeightString('4\'11"'), fromHeightString('7\'11"')],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.UserProfile),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfileScreen);