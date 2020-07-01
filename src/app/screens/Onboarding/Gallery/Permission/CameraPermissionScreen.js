import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";
import ImagePicker from 'react-native-image-crop-picker';
import { scale } from 'react-native-size-matters';
import { IconButton } from 'react-native-paper';
import styles from './styles';
import { TopHeaderBar } from '../../../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../../../components/common/header/HeaderTypes';
import Button from '../../../../components/common/button/Button';
import ButtonTypes from '../../../../components/common/button/ButtonTypes';
import ImageIcon from '../../../../components/common/ImageIcon/ImageIcon';
import ImageIconTypes from '../../../../components/common/ImageIcon/ImageIconTypes';
import RouteNames from '../../../../navigation/common/RouteNames';
import { navigateOutWithReset } from '../../../../navigation/common/NavigationHelper';
import commonDispatchProps from '../../../../state/common/commonDispatchProps';
import commonStateProps from '../../../../state/common/commonStateProps';

class CameraPermissionScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    openPicker = () => {
        ImagePicker.openPicker({
            multiple: true,
            includeBase64: false,
            mediaType: 'photo',
            maxFiles: 6,
            forceJpg: true
        }).then(images => {
            navigateOutWithReset(this.props.navigation, RouteNames.ImageChooser, {
                images: images,
                onboarding: 'onboarding'
            });
        });
    }
    componentDidMount() {
        this.props.updateLastScreen(this.props.user.id, '');
    }
    componentDidUpdate() {
    }
    render() {
        return (
            <View style={styles.container}>
                <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'The Meme App'} textSize={scale(27)} />
                <View style={styles.firstIcon}>
                    <ImageIcon type={ImageIconTypes.camera.name} size={scale(40)} />
                    <Text style={styles.secondaryText}>Use your best photos</Text>
                </View>
                <View style={styles.outerView}>
                    <View style={styles.btnCenter}>
                        <View onStartShouldSetResponder={() => this.openPicker()}>
                            <Button
                                onPress={() => this.openPicker()}
                                type={ButtonTypes.none}
                                textStyle={styles.camera_upload_text}
                                buttonStyle={{ ...styles.camera_upload_button, zIndex: -100 }}
                                text='Connect your Camera Roll' />
                            <IconButton icon='plus' color='white' size={scale(30)} style={styles.dottedButtonIcon} />
                        </View>
                    </View>
                </View>
                {/* <MemeDarkLoader /> */}
            </View>
        );
    }
}


const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.CameraPermission);
    return {
        ...commonState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.CameraPermission)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CameraPermissionScreen);