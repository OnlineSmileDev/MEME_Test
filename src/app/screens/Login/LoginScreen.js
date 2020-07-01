import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, ImageBackground, SafeAreaView } from 'react-native';
import styles from './styles';

import { Text } from 'react-native-paper';
import { LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

import backgroundImageSrc from '../../assets/images/login_background_blue.png';
import Button from '../../components/common/button/Button';
import ButtonTypes from '../../components/common/button/ButtonTypes';
import { loginBegin } from '../../state/actions/api/userApiActions';
import { UserDB } from '../../services/storage';
import { navigateOutWithReset, navigateOutWithResetV5 } from '../../navigation/common/NavigationHelper';
import RouteNames from '../../navigation/common/RouteNames';
import Loader from '../../components/loader/Loader';
import LoaderTypes from '../../components/loader/LoaderTypes';
import commonDispatchProps from '../../state/common/commonDispatchProps';
import commonStateProps from '../../state/common/commonStateProps';
import Tracking from '../../services/tracking/Tracking';
import TrackableEvents from '../../services/tracking/TrackableEvents';

const AppNameLight = () => {
    return (
        <Text style={styles.topAppName}>The Meme App</Text>
    );
}

var thisLoginCtx = null;
const Params = {
    loginTimer: 'login_timer'
}
class LoginScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    constructor(props) {
        super(props);
        thisLoginCtx = this;
    }
    _responseInfoCallback = (error, result) => {
        if (error) {
            ;
            console.log('Error fetching data: ' + JSON.stringify(error));
        } else {
            const data = {
                createUserModel: {
                    fbData: {
                        fbId: result.id,
                        userId: "",
                        firstName: result.first_name,
                        lastName: result.last_name,
                        middleName: '',
                        email: result.email,
                        birthday: result.birthday,
                        gender: result.gender
                    }
                }
            }
            thisLoginCtx.props.loginWithFb(data);
            // console.log('Success fetching data: ' + JSON.stringify(result));
        }
    };
    infoRequest = new GraphRequest(
        '/me', {
        parameters: {
            fields: {
                string: 'id, email, picture.type(large), first_name, last_name, age_range,birthday '
            }
        }
    },
        this._responseInfoCallback,
    );
    startFbLogin = () => new GraphRequestManager().addRequest(this.infoRequest).start();

    loginHandler = () => {
        LoginManager.logInWithPermissions(['public_profile', 'user_birthday', 'email']).then(
            function (result) {
                if (result.isCancelled) {
                    console.log('Login was cancelled');
                } else {
                    thisLoginCtx.startFbLogin();
                    console.log('Login was successful with permissions: ' + result.grantedPermissions.toString());
                }
            },
            function () {
                console.log('Login failed with error: ' + error);
            }
        );
    }
    checkIfLoggedIn = (_this) => {
        // this.props.user.
        UserDB.isLoggedIn().then(async u => {
            if (u === true) {
                const user = await UserDB.fetchLoggedUser();
                this.props.stopTimer({ name: Params.loginTimer });

                if (user.hasCompletedOnboarding) {
                    //Redirect to RegularMemeResponseScreen from HERE
                    navigateOutWithResetV5(_this.props.navigation, RouteNames.RegularMemeResponse);
                }
                else if ((_this.props.user.lastScreen?.length ?? 0) > 0) {
                    navigateOutWithResetV5(_this.props.navigation, _this.props.user.lastScreen.name)
                }
                else {
                    navigateOutWithResetV5(_this.props.navigation, RouteNames.GenderInterest);
                }

            }
            else {
                ;
            }
        }).catch(e => {
            console.log('login error:' + e);
        });
    }
    componentDidMount() {
        this.props.startTimer({ name: Params.loginTimer, callbackFn: this.checkIfLoggedIn, _this: this });
    }
    componentDidUpdate() {
    }
    render() {
        return (
            <ImageBackground source={backgroundImageSrc} resizeMode='cover' style={styles.container}>
                <View style={styles.overlay2} />
                <SafeAreaView>
                    <AppNameLight />
                    <Text style={styles.text}>match based on memes</Text>
                    <View style={styles.bottomView}>
                        <Text style={styles.disclaimerText}>
                            By signing up for MeetMeme you agree to our Terms of Service.
                            Learn about how we process and use your data in our Privacy Policy and how we use cookies and simillar technology in our Cookies Policy
                        </Text>
                        <Button onPress={this.loginHandler} type={ButtonTypes.Facebook} text='Continue With Facebook' />
                    </View>
                </SafeAreaView>
                <Loader type={LoaderTypes.white} />
            </ImageBackground>
        );
    }
}

const mapStateToProps = (state) => {
    const commonState = commonStateProps(state, RouteNames.Login);
    return {
        ...commonState,
        [Params.loginTimer]: commonState.thisScreen[Params.loginTimer] ?? 0,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.Login),
        loginWithFb: (data) => {
            // console.log("WARNING SHDBJBSJKNDJHSJFFJD");
            dispatch(loginBegin(data));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);