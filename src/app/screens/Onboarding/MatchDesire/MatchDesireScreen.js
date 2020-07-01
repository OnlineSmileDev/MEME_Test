
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from "react-redux";
import { Text, Surface } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { TopHeaderBar } from '../../../components/common/header/TopHeaderBar';
import ImageIcon from '../../../components/common/ImageIcon/ImageIcon';
import styles from './styles';
import ImageIconTypes from '../../../components/common/ImageIcon/ImageIconTypes';
import matchInterestImage from '../../../assets/images/onboarding/match_interest.png';
import HeaderTypes from '../../../components/common/header/HeaderTypes';
import { scale } from 'react-native-size-matters';
import RouteNames from '../../../navigation/common/RouteNames';
import commonDispatchProps from '../../../state/common/commonDispatchProps';
import { navigateOutWithReset } from '../../../navigation/common/NavigationHelper';
import NavButton from '../../../components/common/NavButton/NavButton';
import NavButtonTypes from '../../../components/common/NavButton/NavButtonTypes';
import commonStateProps from '../../../state/common/commonStateProps';
import { colors } from '../../../styles/base';
import Loader from '../../../components/loader/Loader';
import { createUserUpdateItem } from '../../../services/api/helpers/users/userApiHelper';
import { UserFields } from '../../../services/api/helpers/users/userFields';
import { DesiredRelationshipType } from '../../../services/api/helpers/users/userEnum';
import { isSmallScreen } from '../../../utils/screenUtils';
const Params = {
    hookup: 'hookup',
    shortterm: 'shortterm',
    longterm: 'longterm'
}
class MatchDesireScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };

    componentDidMount() {
        this.props.updateLastScreen(this.props.user.id);
    }
    componentDidUpdate() {
    }
    updateField = () => {
        if (this.isSet(Params.longterm)) {
            let data = createUserUpdateItem(UserFields.MatchDesire, DesiredRelationshipType.LongTerm);
            this.props.updateUser(this.props.user.id, [data]);
        }
        if (this.isSet(Params.shortterm)) {
            let data = createUserUpdateItem(UserFields.MatchDesire, DesiredRelationshipType.ShortTerm);
            this.props.updateUser(this.props.user.id, [data]);
        }
        if (this.isSet(Params.hookup)) {
            let data = createUserUpdateItem(UserFields.MatchDesire, DesiredRelationshipType.Hookup);
            this.props.updateUser(this.props.user.id, [data]);
        }
    }
    move = (isNext = true) => {
        this.updateField();
        return !isNext ?
            // navigateOut(this.props.navigation, RouteNames.MatchDesire)
            this.props.navigation.pop()
            : navigateOutWithReset(this.props.navigation, RouteNames.CameraPermission);
    }
    isSet = (val) => {
        return this.props[val];
    }
    updateLookingFor = (val) => {

        this.props.updateScreenData(Params[val], !this.props[val]);
    }
    getSize = () => {
        let source = Image.resolveAssetSource(matchInterestImage);
        let height = source.height, width = source.width;
        if (isSmallScreen()) {
            height = scale(height) * 0.9;
            width = scale(width) * 0.9;
        }
        return (
            <>
                <View
                    onStartShouldSetResponder={() => this.updateLookingFor(Params.hookup)}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        top: scale(20),
                        height: height / scale(3),
                        backgroundColor: colors.transparent
                    }}>
                    {this.isSet(Params.hookup) && <View style={styles.check}><ImageIcon type={ImageIconTypes.check.name} size={scale(25)} /></View>}
                </View>

                <View
                    onStartShouldSetResponder={() => this.updateLookingFor(Params.shortterm)}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        top: scale(10) + (height / scale(3)) * scale(1),
                        height: height / scale(3),
                        backgroundColor: colors.transparent
                    }} >
                    {this.isSet(Params.shortterm) && <View style={styles.check}><ImageIcon type={ImageIconTypes.check.name} size={scale(25)} /></View>}

                </View>

                <View
                    onStartShouldSetResponder={() => this.updateLookingFor(Params.longterm)}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        top: scale(5) + (height / scale(3)) * scale(2),
                        height: height / scale(3),
                        backgroundColor: colors.transparent
                    }} >
                    {this.isSet(Params.longterm) && <View style={styles.check}><ImageIcon type={ImageIconTypes.check.name} size={scale(25)} /></View>}
                </View>
                <Loader />
            </>
        );
        // source.width, source.height
    }
    render() {
        return (
            <>
                <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'The Meme App'} textSize={scale(24)} />
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.firstIcon}>
                        <ImageIcon type={ImageIconTypes.darkLove.name} size={scale(30)} />
                        <View style={{}} >
                            <Text style={styles.secondaryText}> What are you looking for?</Text>
                            <Text style={styles.secondaryCaptionText}> (You can select more than one)</Text>
                        </View>
                    </View>

                    <Surface style={styles.genderImage}>
                        <View>
                            <Image source={matchInterestImage} resizeMode='contain' style={styles.imgStyle} />
                            {this.getSize()}
                        </View>
                    </Surface>
                </ScrollView>
                <NavButton type={NavButtonTypes.left} onPress={() => this.move(false)} />
                <NavButton type={NavButtonTypes.right} onPress={() => this.move()} />
                {/* <SafeAreaView>
                    <FooterNav displayLeft={true} rightHandler={() => { }} />
                </SafeAreaView> */}
                {/* <MemeLightLoader /> */}
            </>
        );
    }
}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.MatchDesire);
    return {
        ...commonState,
        [Params.hookup]: commonState.thisScreen[Params.hookup] ?? false,
        [Params.shortterm]: commonState.thisScreen[Params.shortterm] ?? false,
        [Params.longterm]: commonState.thisScreen[Params.longterm] ?? false
    }
};

const mapDispatchToProps = dispatch => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.MatchDesire)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MatchDesireScreen);