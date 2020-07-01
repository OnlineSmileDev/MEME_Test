import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from "react-redux";
import { Text, Surface } from 'react-native-paper';
import { scale } from 'react-native-size-matters';
import styles from './styles';
import mainImage from '../../assets/images/share_image.png';
import { TopHeaderBar } from '../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../components/common/header/HeaderTypes';
import Button from '../../components/common/button/Button';
import ButtonTypes from '../../components/common/button/ButtonTypes';
import DevicePermissions from '../../services/permissions/DevicePermissions';
import Share from 'react-native-share';
import RouteNames from '../../navigation/common/RouteNames';
import commonDispatchProps from '../../state/common/commonDispatchProps';
import commonStateProps from '../../state/common/commonStateProps';

class ShareAppScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    updateNotification = (notify) => {
        if (notify) {
            DevicePermissions.request.contactPermission();
            Share.open({
                message: 'Try out The Meme App!',
                title: 'The Meme App!',
                subject: 'The Meme App'
            })
                .then(() => {

                }).catch(() => {

                })
            // this.props.notifyNewMatches(notify);
            // this.props.navigation.navigate('InitialImageUploadScreen');
        }
        else {
            this.props.navigation.goBack();
        }
    }
    componentDidMount() {
    }
    componentDidUpdate() {
    }

    render() {
        return (
            <View style={styles.container}>
                <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'The Meme App'} textSize={scale(24)} />
                <Surface style={styles.mainCard}>
                    <Image style={styles.mainImage} source={mainImage} />
                    <View style={styles.textView}>
                        <Text style={styles.secondaryText}>
                            Do you love The Meme App?
                            Share the app with friends to unlock
                            more memes!
                        </Text>
                    </View>
                    <View style={styles.buttons}>

                        <View style={{ width: '100%', height: 7 }}></View>
                        <Button
                            type={ButtonTypes.Facebook}
                            textStyle={styles.answerBtnText}
                            buttonStyle={styles.answerBtn}
                            onPress={() => this.updateNotification(true)}
                            text={'Share'}
                        />
                        <View style={{ width: '100%', height: 5 }}></View>
                        <Button
                            type={ButtonTypes.Generic}
                            textStyle={styles.nahBtnText}
                            buttonStyle={styles.nahBtn}
                            onPress={() => this.updateNotification(false)}
                            text={"Nah I'm good."}
                        />
                        <View style={{ width: '100%', height: 15 }}></View>
                        {/* <MemeButton
                            type='newmatches_yes'
                            onPress={() => this.updateNotification(true)}
                            text='Answer Deal-breakers' />
                        <MemeButton
                            type='newmatches_no'
                            onPress={() => this.updateNotification(false)}
                            text="Nah I'm good." /> */}
                    </View>
                </Surface>
                {/* <MemeLightLoader /> */}
            </View>
        );
    }
}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.ShareApp);
    return {
        ...commonState,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.ShareApp),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShareAppScreen);