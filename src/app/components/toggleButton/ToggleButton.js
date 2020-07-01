import React, { Component } from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import Button from '../common/button/Button';
import ToggleButtonType from './ToggleButtonType';
import { colors } from '../../styles/base';
import ButtonTypes from '../common/button/ButtonTypes';

/**TODO: App type */
export default class ToggleButton extends Component {
    getActiveColor = (type) => {
        switch (type) {
            case 'button':
                return this.props.active ? { backgroundColor: colors.primary } : { backgroundColor: colors.white, borderColor: colors.primary, borderWidth: 2 };
            case 'text':
                return !this.props.active ? { color: colors.blackish } : { color: colors.white };
        }
    }
    render() {

        return (
            <>
                <Button
                    onPress={this.props.onPress}
                    type={ButtonTypes.none}
                    textStyle={{ ...styles[ToggleButtonType.gender + '_text'], ...this.getActiveColor('text') }}
                    buttonStyle={{ ...styles[ToggleButtonType.gender + '_button'], ...this.getActiveColor('button') }}
                    text={this.props.text} />
            </>
        );
    }
}
ToggleButton.defaultProps = {
    onPress: () => { }
}
ToggleButton.propTypes = {
    active: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}