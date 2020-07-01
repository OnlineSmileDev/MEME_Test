
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from "react-redux";
import { Text, Surface } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
// import resolveAssetSource from 'resolveAssetSource';

import { scale } from 'react-native-size-matters';
import styles from './styles';
import { TopHeaderBar } from '../../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../../components/common/header/HeaderTypes';
import ToggleButton from '../../../components/toggleButton/ToggleButton';
import ToggleButtonType from '../../../components/toggleButton/ToggleButtonType';

import genderLookingForImage from '../../../assets/images/onboarding/lookingfor_gender.png';
import ImageIcon from '../../../components/common/ImageIcon/ImageIcon';
import ImageIconTypes from '../../../components/common/ImageIcon/ImageIconTypes';
import RouteNames from '../../../navigation/common/RouteNames';
import NavButton from '../../../components/common/NavButton/NavButton';
import NavButtonTypes from '../../../components/common/NavButton/NavButtonTypes';
import { navigateOut } from '../../../navigation/common/NavigationHelper';
import commonDispatchProps from '../../../state/common/commonDispatchProps';
import commonStateProps from '../../../state/common/commonStateProps';
import { colors } from '../../../styles/base';
import { createUserUpdateItem } from '../../../services/api/helpers/users/userApiHelper';
import { UserFields } from '../../../services/api/helpers/users/userFields';
import Loader from '../../../components/loader/Loader';
import { isSmallScreen } from '../../../utils/screenUtils';

const Params = {
    gender: 'gender',
    lookingFor: 'looking_for',
}
class GenderInterestScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };

    componentDidMount() {
        this.props.updateLastScreen(this.props.user.id);
    }
    componentDidUpdate() {
    }
    updateGender = (gender) => {
        // console.log('called');
        this.props.updateScreenData(Params.gender, gender);
    }
    updateLookingFor = (val) => {
        // console.log('called');
        this.props.updateScreenData(Params.lookingFor, val);
    }
    isGenderActive = (gender) => {
        return this.props.gender === gender;
    }
    updateField = () => {
        let data = createUserUpdateItem(UserFields.GenderInterest, this.props.lookingFor);
        this.props.updateUser(this.props.user.id, [data]);
    }
    moveNext = () => {
        this.updateField();
        navigateOut(this.props.navigation, RouteNames.MatchDesire);
    }
    getSize = () => {
        let source = Image.resolveAssetSource(genderLookingForImage);
        let height = source.height, width = source.width;
        
        return (
            <>
                <View
                    onStartShouldSetResponder={() => this.updateLookingFor('guys')}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        top: 2,
                        height: height / 2,
                        backgroundColor: colors.transparent
                    }}>
                    {this.props.lookingFor === 'guys' && <View style={styles.check}><ImageIcon type={ImageIconTypes.check.name} size={scale(25)} /></View>}
                </View>

                <View
                    onStartShouldSetResponder={() => this.updateLookingFor('girls')}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        top: (height / scale(3)) * scale(1),
                        height: height / scale(3),
                        backgroundColor: colors.transparent
                    }} >
                    {this.props.lookingFor === 'girls' && <View style={styles.check}><ImageIcon type={ImageIconTypes.check.name} size={scale(25)} /></View>}

                </View>
                <View
                    onStartShouldSetResponder={() => this.updateLookingFor('both')}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        top: scale(3) + (height / scale(3)) * scale(2),
                        height: height / scale(3),
                        backgroundColor: colors.transparent
                    }} >
                    {this.props.lookingFor === 'both' && <View style={styles.check}><ImageIcon type={ImageIconTypes.check.name} size={scale(25)} /></View>}
                </View>
            </>
        );
        // source.width, source.height
    }
    render() {
        return (
            // <View style={styles.container}>
            <>
                <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'The Meme App'} textSize={scale(24)} />
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.firstIcon}>
                        <ImageIcon type={ImageIconTypes.gender.name} size={scale(35)} />
                        <Text style={styles.secondaryText}> What's your gender?</Text>
                    </View>
                    {/* <View style={styles.topTextView}>
                        <Text style={styles.secondaryText}> What's your gender?</Text>
                    </View> */}
                    <View style={styles.genderSelection}>
                        <ToggleButton
                            type={ToggleButtonType.gender}
                            text={'male'}
                            onPress={() => this.updateGender('male')}
                            active={this.isGenderActive('male')} />
                        <ToggleButton
                            type={ToggleButtonType.gender}
                            text={'female'}
                            onPress={() => this.updateGender('female')}
                            active={this.isGenderActive('female')} />
                    </View>
                    <View style={styles.secondIcon}>
                        <ImageIcon type={ImageIconTypes.goggles.name} size={scale(35)} />
                        <Text style={styles.secondaryText}> Who are you looking for?</Text>
                    </View>
                    {/* <View style={{ marginTop: '1%', height: '6.3%' }}>
                        <Text style={styles.secondaryText}> Who are you looking for?</Text>
                    </View> */}
                    <Surface style={styles.genderImage}>
                        <View>
                            <Image source={genderLookingForImage} resizeMode='contain' style={styles.imgStyle} />
                            {this.getSize()}
                        </View>
                    </Surface>
                </ScrollView>
                <NavButton type={NavButtonTypes.right} onPress={() => this.moveNext()} />
            </>
        );
    }
}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.GenderInterest);
    return {
        ...commonState,
        gender: commonState.thisScreen[Params.gender] ?? 'male',
        lookingFor: commonState.thisScreen[Params.lookingFor] ?? 'guys'
    }
};

const mapDispatchToProps = dispatch => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.GenderInterest),

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GenderInterestScreen);