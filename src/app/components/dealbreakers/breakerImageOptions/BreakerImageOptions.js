import React from 'react'
import PropTypes from 'prop-types';
import { colors } from '../../../styles/base';
import ImageIconTypes from '../../common/ImageIcon/ImageIconTypes';
import ImageIcon from '../../common/ImageIcon/ImageIcon';
import { View } from 'react-native';
import { scale } from 'react-native-size-matters';
import styles from './styles';
import BreakerOptions from './BreakerOptions';

const SEPARATION_DIST = 10;
export default BreakerImageOptions = (props) => {
    getYIndex = (index) => {
        if (index === 0 || index === 1) {
            return 0;
        }
        else {
            return 1;
        }
    }
    quadrantOptionView = (index) => (
        <View
            onStartShouldSetResponder={() => props.onSelect(props.options[index])}
            style={{
                position: 'absolute',
                height: props.height / 2,
                left: 2 + (SEPARATION_DIST * (index % 2)) + (props.width / 2) * (index % 2),
                top: 2 + (SEPARATION_DIST * getYIndex(index)) + (props.height / 2) * getYIndex(index),
                width: props.width / 2,
                backgroundColor: colors.transparent
            }}>
            {props.shouldSelect(props.options[index]) && <View style={styles.check}><ImageIcon type={ImageIconTypes.dealbreakerCheck.name} size={scale(25)} /></View>}
        </View>
    )
    const twoHorizontalOptionView = (index) => (
        <View
            onStartShouldSetResponder={() => props.onSelect(props.options[index])}
            style={{
                position: 'absolute',
                height: '100%',
                left: 2 + (SEPARATION_DIST * index) + (props.width / 2) * index,
                width: props.width / 2,
                backgroundColor: colors.transparent
            }}>
            {props.shouldSelect(props.options[index]) && <View style={styles.check}><ImageIcon type={ImageIconTypes.dealbreakerCheck.name} size={scale(25)} /></View>}
        </View>
    )
    const threeHorizontalOptionView = (index) => (
        <View
            onStartShouldSetResponder={() => props.onSelect(props.options[index])}
            style={{
                position: 'absolute',
                height: '100%',
                left: scale(2 + (SEPARATION_DIST * index) + (props.width / 3) * index),
                width: props.width / 3,
                backgroundColor: colors.transparent
            }}>
            {props.shouldSelect(props.options[index]) && <View style={styles.check}><ImageIcon type={ImageIconTypes.dealbreakerCheck.name} size={scale(25)} /></View>}
        </View>
    )
    selectDisplay = (index) => {
        switch (props.type) {
            case BreakerOptions.fourQuadrant:
                return quadrantOptionView(index);
            case BreakerOptions.twoHorizontalOption:
                return twoHorizontalOptionView(index);
            case BreakerOptions.threeHorizontalOption:
            default:
                return threeHorizontalOptionView(index);
        }
    }
    return (
        <>
            {props.options.map((value, index) => (
                <>
                    {selectDisplay(index)}
                </>
            ))}
        </>
    )
}

BreakerImageOptions.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    options: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    shouldSelect: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
}

BreakerImageOptions.defaultProps = {
    type: BreakerOptions.threeHorizontalOption,
    onSelect: () => { },
    shouldSelect: (val) => { return true; }
}