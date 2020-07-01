
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { connect } from "react-redux";
import { Text, Surface } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';
import DealbreakerTypes from './DealbreakerTypes';
import styles from './styles';
import { TopHeaderBar } from '../../../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../../../components/common/header/HeaderTypes';
import ImageIcon from '../../../../components/common/ImageIcon/ImageIcon';
import ImageIconTypes from '../../../../components/common/ImageIcon/ImageIconTypes';
import ToggleButton from '../../../../components/toggleButton/ToggleButton';
import toggleButtonType from '../../../../components/toggleButton/ToggleButtonType';
import commonStateProps from '../../../../state/common/commonStateProps';
import RouteNames from '../../../../navigation/common/RouteNames';
import commonDispatchProps from '../../../../state/common/commonDispatchProps';
import { OptionsSomewhat } from '../../../../utils/MemeEnums';
import Loader from '../../../../components/loader/Loader';
import ThreeOptionBreaker from '../../../../components/dealbreakers/breakerImageOptions/BreakerImageOptions';
import { DoubleSlider } from '../../../../components/common/doubleSlider/DoubleSlider';
import { fromHeightString } from '../../../../utils/dateUtils';
import { createUserUpdateItem } from '../../../../services/api/helpers/users/userApiHelper';
import { isSmallScreen } from '../../../../utils/screenUtils';

const Params = {
    currentImageValue: 'currentImageValue',
    currentType: 'currentType',
    currentValue: 'currentValue',
    heightValues: 'heightValues'
}
class DealbreakerScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    componentDidMount() {
    }
    componentDidUpdate() {
    }
    updateValue = (val) => {
        this.props.updateScreenData(Params.currentValue, { ...this.props[Params.currentValue], ...val });
    }
    updateType = (val) => {
        this.props.updateScreenData(Params.currentType, val);
    }
    saveChanges = (type) => {
        const preference = this.props[Params.currentImageValue] ?? ''
        const importance = this.props[Params.currentValue]?.value;
        if (type && preference) {
            const fieldName = DealbreakerTypes[type].fieldName;
            let data = createUserUpdateItem(fieldName, {
                preference: preference,
                importance: importance
            });
            this.props.updateUser(this.props.user.id, [data]);
            console.log(`type=${type}, fieldName=${fieldName} preference=${preference}, importance=${importance}`);
        }
        else {
            console.log('cannot save changes');
        }
    }
    moveNext = () => {
        const currentType = this.props.route.params.type;
        //reset options
        this.props.updateScreenData(Params.currentValue, '');
        this.props.updateScreenData(Params.currentImageValue, '');
        switch (currentType) {
            case DealbreakerTypes.drugs.name:
                this.saveChanges(currentType);
                this.props.navigation.setParams({ type: DealbreakerTypes.smoke.name });
                break;
            case DealbreakerTypes.smoke.name:
                this.saveChanges(currentType);
                this.props.navigation.setParams({ type: DealbreakerTypes.politics.name });
                break;
            case DealbreakerTypes.politics.name:
                this.saveChanges(currentType);
                this.props.navigation.setParams({ type: DealbreakerTypes.kids.name });
                break;
            case DealbreakerTypes.kids.name:
                this.props.navigation.setParams({ type: DealbreakerTypes.height.name });
                break;
            case DealbreakerTypes.height.name:
                this.props.navigation.setParams({ type: DealbreakerTypes.religion.name });
                break;
            case DealbreakerTypes.religion.name:
                this.props.navigation.navigate(RouteNames.ReligionTypesDealbreaker);
                break;
        }
    }
    displayImage = (type) => {
        let source = Image.resolveAssetSource(DealbreakerTypes[type].image);
        let height = source.height, width = source.width;
        if (isSmallScreen()) {
            height = scale(height) * 0.9;
            width = scale(width) * 0.9;
        }
        return (
            <View>
                <Image
                    style={{
                        ...styles.mainImage,
                        width: width,
                        height: height
                    }}
                    source={DealbreakerTypes[type].image}
                    resizeMode={'center'}
                />
                <ThreeOptionBreaker
                    type={DealbreakerTypes[type].viewType}
                    width={width}
                    height={height}
                    onSelect={(val) => { console.log(val); this.props.updateScreenData(Params.currentImageValue, val) }}
                    shouldSelect={(val) => { return this.props[Params.currentImageValue] === val }}
                    options={DealbreakerTypes[type].options} />
            </View>
        )
    }
    checkAndUpdatePreferences = () => {
        const height = this.props[Params.heightValues];

        var updateHeight = createUserUpdateItem('match-desire-range', JSON.stringify({
            min: height[0],
            max: height[1],
            Name: 'height',
            isADealbreaker: false
        }));

        this.props.updateUser(this.props.user.id, [updateHeight]);
    }
    updateHeightRange = (value, submit) => {
        this.props.updateScreenData(Params.heightValues, value);
        if (submit) {
            this.checkAndUpdatePreferences();
        }
    }
    render() {
        const { type } = this.props.route.params; //this.props.type;
        if (this.props[Params.currentType] !== type) {
            this.updateType(type);
            this.updateValue({});
        }

        return (
            <>
                <View style={styles.container}>
                    <TopHeaderBar
                        type={HeaderTypes.centerTextOnly}
                        text={'The Meme App'}
                        textSize={scale(27)}
                    // rightIconSize={scale(40)}
                    // rightIcon={ImageIconTypes.skipGreen.name}
                    // rightIconStyle={{ right: scale(10) }}
                    // rightOnPress={() => { this.moveNext() }}
                    />
                    <ScrollView>
                        {/* <View style={styles.firstIcon}>
                            <ImageIcon type={ImageIconTypes.custom.name} uri={DealbreakerTypes[type].icon} size={scale(40)} />
                        </View> */}
                        <Surface style={styles.mainCard}>
                            <View style={styles.textView}>
                                <Text style={styles.secondaryText}>
                                    {DealbreakerTypes[type].title}
                                </Text>
                            </View>
                            {this.displayImage(type)}
                        </Surface>
                        <View style={{ width: '100%', height: DealbreakerTypes[type].bottomHeight }}></View>
                        <View style={styles.bottomTextView}>
                            <Text style={styles.bottomText}>
                                {DealbreakerTypes[type].bottomText}
                            </Text>
                        </View>
                        <View style={{ width: '100%', height: 7 }}></View>
                        {DealbreakerTypes[type].showBottomButtons && <View style={styles.bottomButtons}>
                            <ToggleButton
                                type={toggleButtonType.gender}
                                text={OptionsSomewhat.NOT_AT_ALL.name}
                                onPress={() => { this.updateValue({ value: OptionsSomewhat.NOT_AT_ALL.value }) }}
                                active={this.props[Params.currentValue]?.value === OptionsSomewhat.NOT_AT_ALL.value} />
                            <ToggleButton
                                type={toggleButtonType.gender}
                                text={OptionsSomewhat.SOMEWHAT.name}
                                onPress={() => { this.updateValue({ value: OptionsSomewhat.SOMEWHAT.value }) }}
                                active={this.props[Params.currentValue]?.value === OptionsSomewhat.SOMEWHAT.value} />
                            <ToggleButton
                                type={toggleButtonType.gender}
                                text={OptionsSomewhat.EXTREMELY.name}
                                onPress={() => { this.updateValue({ value: OptionsSomewhat.EXTREMELY.value }) }}
                                active={this.props[Params.currentValue]?.value === OptionsSomewhat.EXTREMELY.value} />
                        </View>}
                        <View style={{
                            width: '100%',
                            height: scale(100)
                        }}>
                            {type === DealbreakerTypes.height.name && <View style={styles.slider}>
                                <DoubleSlider
                                    fetchValue={(val, submit) => { this.updateHeightRange(val, submit) }}
                                    min={fromHeightString('4\'0"')}
                                    max={fromHeightString('7\'11"')}
                                    values={this.props[Params.heightValues]}
                                    isHeight
                                    currentLeftValue={this.props[Params.heightValues][0]}
                                    currentRightValue={this.props[Params.heightValues][1]} />
                            </View>}
                            <View style={{ position: 'absolute', right: scale(20), bottom: scale(23) }}>
                                <ImageIcon type={ImageIconTypes.skipGreen.name} onPress={this.moveNext} size={scale(50)} />
                            </View>
                        </View>
                        <Loader />
                        {/* <SafeAreaView style={{ backgroundColor: '#FFFFFC', marginTop: scale(10) }}>
                        </SafeAreaView> */}
                    </ScrollView>
                </View>

            </>
        );
    }
}

DealbreakerScreen.propTypes = {
    type: PropTypes.string,
}
DealbreakerScreen.defaultProps = {
    type: DealbreakerTypes.drugs.name
}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.GenericDealbreaker);
    return {
        ...commonState,
        [Params.currentType]: commonState.thisScreen[Params.currentType] ?? DealbreakerTypes.drugs,
        [Params.currentValue]: commonState.thisScreen[Params.currentValue] ?? {},
        [Params.currentImageValue]: commonState.thisScreen[Params.currentImageValue] ?? '',
        [Params.heightValues]: commonState.thisScreen[Params.heightValues] ?? [fromHeightString('4\'0"'), fromHeightString('7\'0"')],
    }
};

const mapDispatchToProps = dispatch => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.GenericDealbreaker),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DealbreakerScreen);