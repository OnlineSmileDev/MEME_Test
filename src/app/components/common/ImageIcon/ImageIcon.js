import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Image, View } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import PropTypes from 'prop-types';
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from './styles';
import ImageIconTypes from './ImageIconTypes';

export default class ImageIcon extends Component {
    render() {
        const uri = this.props.type === ImageIconTypes.custom.name ? this.props.uri : ImageIconTypes[this.props.type].src;
        return (
            <TouchableOpacity style={{ ...styles.iconView, width: this.props.size, height: this.props.size }} onLongPress={this.props.onLongPress} onPress={this.props.onPress}>
                <Image style={styles.icon} source={uri} style={{ width: this.props.size, height: this.props.size }} resizeMode={'contain'} />
            </TouchableOpacity>
        );
    }
}
ImageIcon.defaultProps = {
    size: scale(24),
    uri: '',
    onPress: () => { },
    onLongPress: () => { }
}
ImageIcon.propTypes = {
    size: PropTypes.number,
    type: PropTypes.string.isRequired,
    uri: PropTypes.string,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func
}