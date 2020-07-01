import { TouchableOpacity } from "react-native-gesture-handler";
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from 'prop-types';
import { verticalScale, scale } from 'react-native-size-matters';
import styles from './styles';
import { colors } from "../../../styles/base";
import { toHeightString } from "../../../utils/dateUtils";

export class DoubleSlider extends Component {
    enableScroll = () => { ; };
    disableScroll = () => { };

    getVal = (val) => {
        return this.props.isHeight ? toHeightString(val) : val.toString();
    }
    getTextStyles = () => {
        return this.props.isHeight ? { ...styles.circle_text, fontSize: scale(15), left: scale(5), top: scale(7) } : { ...styles.circle_text, fontSize: scale(15) };
    }
    getButtonStyles = () => {
        return this.props.isHeight ? { ...styles.circle_button } : { ...styles.circle_button };
    }
    customMarker = (val) => (
        <TouchableOpacity style={this.getButtonStyles()}>
            <Text style={this.getTextStyles()}>{this.getVal(val)}</Text>
        </TouchableOpacity>
    )
    render() {
        return (
            <View scrollEnabled={true}>
                <MultiSlider
                    onValuesChangeFinish={(val) => this.props.fetchValue(val, true)}
                    onValuesChange={(val) => this.props.fetchValue(val, false)}
                    values={this.props.values}
                    min={this.props.min}
                    allowOverlap={false}
                    minMarkerOverlapDistance={1}
                    isMarkersSeparated={this.props.isSeparated}
                    sliderLength={scale(230)}
                    customMarkerLeft={() => this.customMarker(this.props.currentLeftValue.toString())}
                    customMarkerRight={() => this.customMarker(this.props.currentRightValue.toString())}
                    max={this.props.max}
                    containerStyle={{
                        height: verticalScale(40)
                    }}
                    trackStyle={{
                        height: verticalScale(5),
                        backgroundColor: 'red',
                    }}
                    selectedStyle={{
                        backgroundColor: colors.primary,
                    }}
                    unselectedStyle={{
                        backgroundColor: 'silver',
                    }}
                />
            </View>
        );
    }
}

export class SingleSlider extends Component {
    enableScroll = () => { ; };
    disableScroll = () => { };
    customMarker = (val) => (
        <TouchableOpacity style={styles.circle_button}>
            <Text style={{ ...styles.circle_text, fontSize: scale(15) }}>{val}</Text>
        </TouchableOpacity>
    )
    render() {
        return (
            <View scrollEnabled={true}>
                <MultiSlider
                    onValuesChangeFinish={(val) => this.props.fetchValue(val, true)}
                    onValuesChange={(val) => this.props.fetchValue(val, false)}
                    values={[this.props.values[0]]}
                    min={this.props.min}
                    sliderLength={scale(230)}
                    customMarker={() => this.customMarker(this.props.currentValue)}
                    // customMarker={() => { return (<MemeButton type='circle' text={this.props.currentValue.toString()} />) }}
                    max={this.props.max}
                    containerStyle={{
                        height: verticalScale(40)
                    }}
                    trackStyle={{
                        height: verticalScale(5),
                        backgroundColor: 'red',
                    }}
                    selectedStyle={{
                        backgroundColor: colors.primary,
                    }}
                    unselectedStyle={{
                        backgroundColor: 'silver',
                    }}
                />
            </View>
        );
    }
}

SingleSlider.propTypes = {
    fetchValue: PropTypes.func.isRequired,
    currentValue: PropTypes.number.isRequired,
    values: PropTypes.array.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
}

DoubleSlider.defaultProps = {
    isSeparated: true,
    isHeight: false,
}
DoubleSlider.propTypes = {
    isHeight: PropTypes.bool.isRequired,
    fetchValue: PropTypes.func.isRequired,
    currentLeftValue: PropTypes.number.isRequired,
    currentRightValue: PropTypes.number.isRequired,
    values: PropTypes.array.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    isSeparated: PropTypes.bool
}