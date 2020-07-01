import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, TextInput } from 'react-native';
import { Text, Portal, Dialog, Surface } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { TopHeaderBar } from '../../components/common/header/TopHeaderBar';

import waitListImage from '../../assets/images/waitlist_img1.png';
import HeaderTypes from '../../components/common/header/HeaderTypes';
import styles from './styles';
import Button from '../../components/common/button/Button';
import ButtonTypes from '../../components/common/button/ButtonTypes';
import RouteNames from '../../navigation/common/RouteNames';
import { updateScreenParam } from '../../state/actions/screen/screenActions';
import { waitlistCodeBegin } from '../../state/actions/api/userApiActions';
import { UserDB } from '../../services/storage';
import Loader from '../../components/loader/Loader';
// import SimpleSnackBar f
import { navigateOutWithReset } from '../../navigation/common/NavigationHelper';
import SimpleSnackBar from '../../components/common/snackBar/SimpleSnackBar';
import commonDispatchProps from '../../state/common/commonDispatchProps';
import commonStateProps from '../../state/common/commonStateProps';

const Params = {
    isDialogVisible: 'isDialogVisible',
    inviteCode: 'inviteCode',
    waitToMove: 'waitToMove'
};

class WaitListScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };

    componentDidMount() {
        // console.log('remounting ');
        this.props.updateLastScreen(this.props.user.id);
    }
    componentDidUpdate() {
        if (this.props.user.isInvited && this.props[Params.waitToMove]) {
            this.props.updateScreenData(Params.waitToMove, false);
            this.props.updateScreenData(Params.isDialogVisible, false);
            this.props.navigation.navigate(RouteNames.GenderInterest);
        }
    }
    toggleDialog = (isShown) => {
        this.props.updateScreenData(Params.isDialogVisible, !this.props[Params.isDialogVisible]);
        if (!isShown) {
            this.updateCode('');
        }
    }
    updateCode = (code) => {
        this.props.updateScreenData(Params.inviteCode, code);
    }
    submitCode = () => {
        this.props.submitCode(this.props[Params.inviteCode]);
    }
    render() {
        return (
            <View style={styles.container}>
                <TopHeaderBar text={"The Meme App"} type={HeaderTypes.centerTextOnly} textSize={scale(27)} />
                <ScrollView>
                    <Surface style={styles.img}>
                        <Text style={styles.secondaryText}> Congratulations!</Text>
                        <Image style={styles.imgSize} source={waitListImage}
                            resizeMode='contain'
                        />
                    </Surface>
                    <View style={styles.passView}>
                        <Text style={styles.passViewText}>If you have the VIP passcode.</Text>
                        <Text style={styles.passViewText}>Enter it now to begin!</Text>
                        <Button type={ButtonTypes.WaitlistPasscode} text='Enter Passcode' onPress={() => this.toggleDialog()} />
                        <Portal>
                            <Dialog
                                style={styles.mainDialog}
                                visible={this.props[Params.isDialogVisible]}
                                onDismiss={() => this.toggleDialog(false)}>
                                <Dialog.Content style={styles.contentDialog}>
                                    <View style={styles.dialogView}>
                                        <View style={styles.dialogCover}>
                                            <Text style={styles.dialogText}>If you have the VIP passcode,</Text>
                                            <Text style={styles.dialogText}>enter it now to begin!</Text>
                                        </View>
                                        <TextInput
                                            placeholder='Type Passcode Here'
                                            style={styles.input}
                                            autoCapitalize='characters'
                                            onChangeText={(val) => this.updateCode(val)}
                                        />
                                        <Button type={ButtonTypes.WaitlistSubmit} onPress={() => this.submitCode()} text='SUBMIT' />
                                        <Loader />

                                        <SimpleSnackBar />
                                    </View>
                                </Dialog.Content>
                            </Dialog>
                        </Portal>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

const mapStateToProps = (state) => {
    const commonState = commonStateProps(state, RouteNames.WaitList);
    return {
        ...commonState,
        [Params.isDialogVisible]: commonState.thisScreen[Params.isDialogVisible] ?? false,
        [Params.waitToMove]: commonState.thisScreen[Params.waitToMove] ?? true,
        [Params.inviteCode]: commonState.thisScreen[Params.inviteCode] ?? '',
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.WaitList),
        submitCode: (code) => {
            UserDB.fetchLoggedUser().then(u => {
                dispatch(waitlistCodeBegin({ userId: u.id, code: code }))
            }).catch(e => {
                // console.log('error fetching user: ' + e);
            });
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WaitListScreen);