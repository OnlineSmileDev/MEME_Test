import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Avatar } from 'react-native-paper';
import PropTypes from 'prop-types';
import { scale } from 'react-native-size-matters';

export default class SquareAvatar extends Component {

    render() {
        return (
            <View style={{ ...styles.outerView }}>
                <Image source={{ uri: this.props.uri }} resizeMode='center'
                    style={{ ...styles.avatar, width: this.props.size, height: this.props.size, borderRadius: this.props.size / 10 }}
                />
            </View>
        );
    }
}

SquareAvatar.defaultProps = {
    uri: 'https://i.pravatar.cc/300',
    size: scale(75)
};

SquareAvatar.propTypes = {
    uri: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
}