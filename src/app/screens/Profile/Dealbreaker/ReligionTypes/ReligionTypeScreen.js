
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from "react-redux";
import { Text, Surface } from 'react-native-paper';
import { scale } from 'react-native-size-matters';
import { TopHeaderBar } from '../../../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../../../components/common/header/HeaderTypes';
import styles from './styles';
import ToggleButton from '../../../../components/toggleButton/ToggleButton';
import toggleButtonType from '../../../../components/toggleButton/ToggleButtonType';
import ImageIcon from '../../../../components/common/ImageIcon/ImageIcon';
import ImageIconTypes from '../../../../components/common/ImageIcon/ImageIconTypes';
import commonStateProps from '../../../../state/common/commonStateProps';
import RouteNames from '../../../../navigation/common/RouteNames';
import commonDispatchProps from '../../../../state/common/commonDispatchProps';
import Loader from '../../../../components/loader/Loader';

const religionTypes = [
    'Buddhist', 'Catholic', 'Christian',
    'Hindu', 'Jewish', 'Muslim',
    'Spiritual', 'Agnostic', 'Atheist',
    'Other'
]

const Params = {
    currentValue: 'currentValue'
}
class ReligionTypeScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    componentDidMount() {
    }
    componentDidUpdate() {
    }
    updateValue = (val) => {
        this.props.updateScreenData(Params.currentValue, val);
    }
    moveNext = () => {
        this.props.navigation.navigate(RouteNames.AgeDistance);
    }
    render() {
        return (
            <>
                <View style={styles.container}>
                    <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'The Meme App'} textSize={scale(25)} />
                    {/* <View style={styles.firstIcon}>
                        <ImageIcon type={ImageIconTypes.prayer.name} size={scale(40)} />
                    </View> */}
                    <Surface style={styles.mainCard}>
                        <View style={styles.textView}>
                            <Text style={styles.secondaryText}>
                                Which religion are you?
                            </Text>
                        </View>
                        <View>
                            <View style={styles.buttonRow}>
                                {religionTypes.map((value, index) => {
                                    return (
                                        <View style={{ minWidth: scale(10), minWidth: scale(10), paddingVertical: scale(5) }} key={index}>
                                            <ToggleButton
                                                type={toggleButtonType.gender}
                                                text={value}
                                                onPress={() => { this.updateValue(value) }}
                                                active={this.props[Params.currentValue] === value} />
                                        </View>
                                    )
                                })}
                            </View>

                        </View>
                    </Surface>
                    <Loader />
                    <View style={{ position: 'absolute', right: scale(25), bottom: scale(10) }}>
                        <ImageIcon type={ImageIconTypes.skipGreen.name} onPress={this.moveNext} size={scale(50)} />
                    </View>
                </View>
                {/* <NavButton type={NavButtonTypes.right} /> */}
            </>
        );
    }
}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.ReligionTypesDealbreaker);
    return {
        ...commonState,
        [Params.currentValue]: commonState.thisScreen[Params.currentValue] ?? 'Other',
    }
};

const mapDispatchToProps = dispatch => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.ReligionTypesDealbreaker),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReligionTypeScreen);