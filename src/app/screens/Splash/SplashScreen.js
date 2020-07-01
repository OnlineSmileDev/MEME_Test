import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import styles from './styles'
import logo from '../../assets/logo.png';
import { UserDB } from '../../services/storage';
import { navigateOutWithReset, navigateOut, navigateOutWithResetV5 } from '../../navigation/common/NavigationHelper';
import RouteNames from '../../navigation/common/RouteNames';
import Loader from '../../components/loader/Loader';
import commonDispatchProps from '../../state/common/commonDispatchProps';
import commonStateProps from '../../state/common/commonStateProps';
import Tracking from '../../services/tracking/Tracking';
import TrackableEvents from '../../services/tracking/TrackableEvents';

const Params = {
    StartupTimer: 'StartupTimer',
    CheckedOnUpdate: 'CheckedOnUpdate'
}

class SplashScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };

    handler = async (_this) => {
        let user = _this.props.user;

        if ((_this.props.user.id?.length ?? 0) > 0) {
            // console.log(user);
            // console.log(user);
            this.props.stopTimer({ name: Params.StartupTimer });
            // await Tracking.Init();
            Tracking.Identify(user);
            // Tracking.Track(TrackableEvents.AppOpened);
            if (user.hasCompletedOnboarding) {
                this.props.navigation.navigate(
                    RouteNames.Main,
                    {
                        screen: RouteNames.MemeTab,
                        initial: false,
                    });
            }
            else if (user.lastScreen) {
                navigateOutWithReset(_this.props.navigation, user.lastScreen.name, user.lastScreen.data ?? {})
            }
            else {
                navigateOutWithReset(_this.props.navigation, RouteNames.GenderInterest);
            }

        }
    }

    checkIfLoggedIn = async () => {
        this.props.updateScreenData(Params.CheckedOnUpdate, true);
        var isLoggedIn = await UserDB.isLoggedIn();
        if (!isLoggedIn) {
            console.log('user not logged in');
            navigateOutWithResetV5(this.props.navigation, RouteNames.Login);
        }
        else {
            const user = await UserDB.fetchLoggedUser();
            if (isNaN(user.id)) {
                UserDB.logoutUser();
                navigateOutWithResetV5(this.props.navigation, RouteNames.Login);
            }
            else {
                Tracking.Init();
                this.props.fetchProfile(user.id);
                this.props.fetchUserMemes(user.id, 50, [], false);
                this.props.startTimer({ name: Params.StartupTimer, callbackFn: this.handler, _this: this });
            }
        }
    }
    componentDidMount() {
        // UserDB.logoutUser();
        this.checkIfLoggedIn();
    }
    componentDidUpdate(prevProps) {
        if (this.props.user.id !== prevProps.user.id) {
            var isReset = this.props.route.params?.isUserReset ?? false;
            if (isReset) {
                UserDB.logoutUser();
                console.log('is reset');
                this.checkIfLoggedIn();
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.mainImage} source={logo} />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const commonState = commonStateProps(state, RouteNames.Splash);
    return {
        ...commonState,
        [Params.CheckedOnUpdate]: commonState.thisScreen[Params.CheckedOnUpdate] ?? false,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.Splash),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);