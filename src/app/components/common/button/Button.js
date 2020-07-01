import React, { Component } from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import ButtonTypes from './ButtonTypes';

/*
Buttons styles
background color, 
*/
class BaseButton extends Component {

    render() {
        const { buttonStyle, textStyle, text, ...otherProps } = this.props;
        return (
            <TouchableOpacity  style={buttonStyle} {...otherProps}>
                <Text style={textStyle}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default class Button extends Component {

    componentDidMount() {
    }
    render() {
        let { textStyle, buttonStyle, ...others } = this.props;
        if (!textStyle) {
            textStyle = {};
        }
        if (!buttonStyle) {
            buttonStyle = {};
        }

        return (
            <BaseButton
                buttonStyle={{ ...styles[this.props.type + '_button'], ...buttonStyle }}
                textStyle={{ ...styles[this.props.type + '_text'], ...textStyle }}
                text={this.props.text}
                {...others}
            />
        );
    }
}

Button.propTypes = {
    type: PropTypes.oneOf(Object.values(ButtonTypes)).isRequired,
    text: PropTypes.string.isRequired
}