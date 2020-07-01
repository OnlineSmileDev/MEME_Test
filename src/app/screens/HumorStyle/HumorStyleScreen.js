import React, { Component } from "react";
import { View, Text, ScrollView } from 'react-native';
import { connect } from "react-redux";

import styles from './styles';
import commonDispatchProps from "../../state/common/commonDispatchProps";
import RouteNames from '../../navigation/common/RouteNames';
import commonStateProps from "../../state/common/commonStateProps";
import { TopHeaderBar } from '../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../components/common/header/HeaderTypes';
import { Surface } from "react-native-paper";
import HumorStyleTopView from "../../components/humorStyle/humorStyleTop/HumorStyleTopView";
import HumorStyleDescription from "../../components/humorStyle/HumorStyleDescription/HumorStyleDescription";
import { scale } from "react-native-size-matters";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from 'react-native-animatable';
import { colors } from "../../styles/base";
import { Instagram } from 'react-content-loader/native'
import { resetUserBegin } from "../../state/actions/api/userApiActions";
import { UserDB } from "../../services/storage";
import { navigateOutWithResetV5 } from "../../navigation/common/NavigationHelper";
import { calculateHumorStyleBegin } from "../../state/actions/api/memeItemActions";
import Tracking from "../../services/tracking/Tracking";
import TrackableEvents from "../../services/tracking/TrackableEvents";
import { createUserUpdateItem } from "../../services/api/helpers/users/userApiHelper";
import { UserFields } from "../../services/api/helpers/users/userFields";

const headerTitles = [
    'Calculating Humor Style',
    'Analyzing Memes...',
    'Humor Style'
];

const Params = {
    HeaderTitle: 'headerTitle',
    showMoreHumorStyle: 'showMoreHumorStyle',
    fetchProfileHandler: 'fetchProfileHandler',
    fetchMatchesHandler: 'fetchMatchesHandler'
}
class HumorStyleScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user.id !== this.props.user.id) {
            console.log('bye bye');
            navigateOutWithResetV5(this.props.navigation, RouteNames.Splash);
        }
    }
    markOnboardingComplete = () => {
        let data = createUserUpdateItem(UserFields.HasCompletedOnboarding, true);
        this.props.updateUser(this.props.user.id, [data]);
    }
    componentDidMount() {
        this.markOnboardingComplete();
        Tracking.Track(TrackableEvents.ViewedHumorStyle);
        if (this.props.user.humorStyle.length === 0) {
            this.props.fetchHumorStyle(this.props.user.id);
        }
        this.props.updateLastScreen(this.props.user.id);
        this.props.startTimer({ name: Params.fetchProfileHandler, callbackFn: this.fetchHandler, _this: this, timeout: 1000 });
    }
    fetchHandler = (_this) => {
        if (_this.props.user.humorStyle.length > 0) {
            this.props.updateScreenData(Params.HeaderTitle, headerTitles[2]);
            this.props.stopTimer({ name: Params.fetchProfileHandler });
        }
        else {
            // _this.props.fetchProfile(this.props.user.id);
        }
    }

    toggleMoreLess = () => {
        if (!this.props[Params.showMoreHumorStyle]) {
            Tracking.Track(TrackableEvents.ViewedMoreHumorStyle);
        }
        this.props.updateScreenData(Params.showMoreHumorStyle, !this.props[Params.showMoreHumorStyle]);
    }
    moveNext = () => {
        navigateOutWithResetV5(this.props.navigation, RouteNames.NewMatchesPermission);
    }
    showBottom = () => {
        return (
            <View forceInset={{ bottom: 'always' }}>
                <Animatable.View
                    easing="ease-in-out-expo"
                    duration={1000}
                    delay={100}
                    animation="fadeIn" iterationCount={1} direction="normal">

                    <TouchableOpacity style={styles.bottom} onPress={this.moveNext}>
                        <Text style={styles.bottomText}>View My Matches</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        );
    }
    showBottomReset = () => {
        return (
            <View forceInset={{ bottom: 'always' }}>
                <Animatable.View
                    easing="ease-in-out-expo"
                    duration={1000}
                    delay={100}
                    animation="fadeIn" iterationCount={1} direction="normal">

                    <TouchableOpacity style={styles.bottom} onPress={() => { this.props.resetUser(this.props.user.id) }}>
                        <Text style={styles.bottomText}>Logout and Reset</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        );
    }
    getLoaderView = () => (
        <View style={styles.container}>
            <Instagram />
        </View>
    )
    render() {
        return (
            <>
                {/* {this.props.user.humorStyle.length === 0 && this.getLoaderView()} */}
                <View style={styles.container}>
                    <TopHeaderBar
                        type={HeaderTypes.centerTextOnly}
                        text={this.props[Params.HeaderTitle]}
                        textStyle={{ color: colors.blackish }}
                        textSize={scale(21)} />

                    <ScrollView>
                        <Surface style={styles.surface}>
                            <HumorStyleTopView
                                profilePicture={this.props.user.profilePicture}
                                humorStyle={this.props.user.humorStyle} />
                            <HumorStyleDescription
                                matchesCount={this.props.matches.queue.length}
                                firstName={this.props.user.firstName}
                                lastName={this.props.user.lastName}
                                showMoreHumorStyle={this.props[Params.showMoreHumorStyle]}
                                humorStyle={this.props.user.humorStyle}
                                toggleMoreLess={this.toggleMoreLess} />
                        </Surface>
                    </ScrollView>
                </View>

                {this.showBottom()}
            </>
        )
    }
}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.HumorStyle);
    const { matches } = state;
    return {
        ...commonState,
        matches: matches,
        [Params.HeaderTitle]: commonState.thisScreen[Params.HeaderTitle] ?? headerTitles[0],
        [Params.showMoreHumorStyle]: commonState.thisScreen[Params.showMoreHumorStyle] ?? false,
        [Params.fetchMatchesHandler]: commonState.thisScreen[Params.fetchMatchesHandler] ?? {},
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.HumorStyle),
        fetchHumorStyle: (id) => {
            dispatch(calculateHumorStyleBegin({ profileId: id }));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HumorStyleScreen);