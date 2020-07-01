import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Avatar } from 'react-native-paper';
import PropTypes from 'prop-types';
import { scale } from 'react-native-size-matters';

const BORDER_SIZE = 30;
export default class UserAvatar extends Component {

    getSize = () => {
        return this.props.size + scale(BORDER_SIZE);
    }
    getAvatarSize = () => {
        return this.props.size;
    }
    render() {
        return (
            <View style={{ ...styles.outerView, borderRadius: this.getSize() / 2 }}>
                <View style={{ ...styles.view, width: this.getSize(), height: this.getSize(), borderWidth: BORDER_SIZE, borderRadius: this.getSize() / 2 }} >{/** */}
                    <Image source={{ uri: this.props.uri }} resizeMode='cover'
                        style={{ ...styles.avatar, width: this.getAvatarSize(), height: this.getAvatarSize(), borderRadius: this.getAvatarSize() / 2 }}
                    />
                </View>
            </View>
        );
    }
}

UserAvatar.defaultProps = {
    uri: 'https://i.pravatar.cc/300',
    size: scale(75)
};

UserAvatar.propTypes = {
    uri: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
}