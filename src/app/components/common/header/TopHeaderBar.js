import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import PropTypes from 'prop-types';
import styles from './styles';
import HeaderTypes from './HeaderTypes';
import ImageIcon from '../ImageIcon/ImageIcon';
import ImageIconTypes from '../ImageIcon/ImageIconTypes';
import { scale } from 'react-native-size-matters';
export class TopHeaderBar extends Component {

    getContent = () => {
        let { textStyle } = this.props;
        textStyle = { ...textStyle, fontSize: this.props.textSize }
        if (!textStyle) {
            textStyle = {};
        }

        switch (this.props.type) {
            case HeaderTypes.centerTextOnly:
                return (
                    <View style={styles[this.props.type + '_view']}>
                        <Text style={{ ...styles[this.props.type + '_text'], ...textStyle }}>
                            {this.props.text}
                        </Text>
                    </View >
                );
            case HeaderTypes.textWithRightIcon:
                return (
                    <View style={styles[this.props.type + '_view']}>
                        <Text style={{ ...styles[this.props.type + '_text'], ...textStyle }}>
                            {this.props.text}
                        </Text>
                        <View style={{ ...styles[this.props.type + '_icon'], ...this.props.rightIconStyle }}>
                            <ImageIcon type={this.props.rightIcon} size={this.props.rightIconSize} onPress={this.props.rightOnPress} />
                        </View>
                    </View >
                );
            case HeaderTypes.textWithLeftIcon:
                return (
                    <View style={styles[this.props.type + '_view']}>
                        <Text style={{ ...styles[this.props.type + '_text'], ...textStyle }}>
                            {this.props.text}
                        </Text>
                        <View style={styles[this.props.type + '_icon']}>
                            <ImageIcon type={this.props.leftIcon} size={this.props.leftIconSize} onPress={this.props.leftOnPress} />
                        </View>
                    </View >
                );
            case HeaderTypes.textWithIcons:
                return (
                    <View style={styles[HeaderTypes.textWithLeftIcon + '_view']}>
                        <Text style={{ ...styles[HeaderTypes.centerTextOnly + '_text'], ...textStyle }}>
                            {this.props.text}
                        </Text>
                        <View style={styles[HeaderTypes.textWithLeftIcon + '_icon']}>
                            <ImageIcon type={this.props.leftIcon} size={this.props.leftIconSize} onPress={this.props.leftOnPress} />
                        </View>
                        <View style={styles[HeaderTypes.textWithRightIcon + '_icon']}>
                            <ImageIcon type={this.props.rightIcon} size={24} onPress={this.props.rightOnPress} />
                        </View>
                    </View >
                )
        }
        return (
            <Text>None</Text>
        );
    }
    render() {
        const bottomShadow = this.props.bottomShadow === true ? styles.bottomShadow : { elevation: 0 };
        return (
            <Appbar.Header style={{ ...styles.container, ...bottomShadow }}>
                {this.getContent()}
            </Appbar.Header>
        );
    }
}

TopHeaderBar.defaultProps = {
    type: HeaderTypes.centerTextOnly,
    textStyle: {},
    bottomShadow: false,
    rightIcon: ImageIconTypes.share.name,
    leftIcon: ImageIconTypes.arrowLeftPrimary.name,
    textSize: scale(36),
    leftIconSize: scale(24),
    rightIconSize: scale(20),
    leftOnPress: () => { },
    rightOnPress: () => { },
    rightIconStyle: {}
}
TopHeaderBar.propTypes = {
    type: PropTypes.oneOf(Object.values(HeaderTypes)).isRequired,
    bottomShadow: PropTypes.bool,
    textStyle: PropTypes.object,
    leftIcon: PropTypes.string,
    leftIconSize: PropTypes.number,
    rightIconSize: PropTypes.number,
    rightIcon: PropTypes.string,
    textSize: PropTypes.number,
    leftOnPress: PropTypes.func.isRequired,
    rightOnPress: PropTypes.func.isRequired,
    rightIconStyle: PropTypes.object
}