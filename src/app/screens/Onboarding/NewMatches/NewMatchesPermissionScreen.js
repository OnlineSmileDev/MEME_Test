import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from "react-redux";
import { Text, Surface } from 'react-native-paper';
import styles from './styles';

import newMatchesImage from '../../../assets/images/onboarding_newmatches.png';
import HeaderTypes from '../../../components/common/header/HeaderTypes';
import { TopHeaderBar } from '../../../components/common/header/TopHeaderBar';
import Button from '../../../components/common/button/Button';
import ButtonTypes from '../../../components/common/button/ButtonTypes';
import { scale } from 'react-native-size-matters';
import RouteNames from '../../../navigation/common/RouteNames';
import commonStateProps from '../../../state/common/commonStateProps';
import commonDispatchProps from '../../../state/common/commonDispatchProps';
import Loader from '../../../components/loader/Loader';
import DevicePermissions from '../../../services/permissions/DevicePermissions';
import { navigateOutWithResetV5 } from '../../../navigation/common/NavigationHelper';

const Params = {

}

class NewMatchesPermissionScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    componentDidMount() {
        // this.props.updateLastScreen(this.props.user.id);
    }
    componentDidUpdate() {
    }
    updateNotifications = () => {
        DevicePermissions.request.alertNotifications();
        this.props.navigation.navigate(RouteNames.Main, { screen: RouteNames.MatchesTab });
    }
    render() {
        return (
            <View style={styles.container}>
                <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'The Meme App'} textSize={scale(24)} />
                <Surface style={styles.mainCard}>
                    <View style={styles.textView}>
                        <Text style={styles.secondaryText}> Can we let you know when you have new matches?</Text>
                    </View>
                    <Image style={styles.mainImage} source={newMatchesImage} />

                    <View style={styles.buttons}>

                        <View style={styles.topDivider}></View>
                        <Button
                            type={ButtonTypes.Generic}
                            textStyle={styles.yesText}
                            buttonStyle={styles.yesBtn}
                            text={'Yes, of course!'}
                            onPress={this.updateNotifications}
                        />
                        <Button
                            type={ButtonTypes.Generic}
                            textStyle={styles.noText}
                            buttonStyle={styles.noBtn}
                            text={'Not now.'}
                            onPress={() => { }}
                        />
                        <View style={styles.bottomDivider}></View>
                    </View>

                </Surface>
                <Loader />
            </View>
        );
    }
}


const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.NewMatchesPermission);
    return {
        ...commonState
    }
};

const mapDispatchToProps = dispatch => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.NewMatchesPermission),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewMatchesPermissionScreen);