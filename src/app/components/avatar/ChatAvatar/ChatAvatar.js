import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Avatar } from 'react-native-paper';
import PropTypes from 'prop-types';
import { scale } from 'react-native-size-matters';
import chatAvatarTypes from './chatAvatarTypes';
import { colors } from '../../../styles/base';

const BORDER_SIZE = 10;
export default class ChatAvatar extends Component {

    getSize = () => {
        return this.props.size + scale(this.props.borderSize);
    }
    getAvatarSize = () => {
        return this.props.size + scale(this.props.borderSize) - scale(4);
    }
    render() {
        let border = this.props.type === chatAvatarTypes.Sender ? colors.facebookBlue : colors.primary;
        let width = (this.props.type === chatAvatarTypes.Sender || this.props.type === chatAvatarTypes.Match) ? scale(3) : 0;
        return (
            <View
                onStartShouldSetResponder={this.props.onPress}
                style={{
                    ...styles.outerView,
                    borderRadius: (this.getSize() / 2) + 2,
                    borderWidth: width,
                    borderColor: border,
                    width: this.getSize() + scale(2),
                    height: this.getSize() + scale(2)
                }}>
                <Image source={{ uri: this.props.uri }} resizeMode='cover'
                    style={{ ...styles.avatar, width: this.getAvatarSize(), height: this.getAvatarSize(), borderRadius: this.getAvatarSize() / 2 }}
                />
                {/* <View style={{ ...styles.view, width: this.getSize(), height: this.getSize(), borderWidth: this.props.borderSize, borderRadius: this.getSize() / 2 }} >
                 </View> */}
            </View>
        );
    }
}

ChatAvatar.defaultProps = {
    uri: 'https://i.pravatar.cc/300',
    size: scale(45),
    borderSize: BORDER_SIZE,
    type: chatAvatarTypes.Sender,
    onPress: () => { }
};

ChatAvatar.propTypes = {
    uri: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    borderSize: PropTypes.number,
    type: PropTypes.string,
    onPress: PropTypes.func.isRequired
}