import React, { Component } from "react";
import { View } from "react-native";
import styles from './styles';
import ImageIcon from "../ImageIcon/ImageIcon";
import ImageIconTypes from "../ImageIcon/ImageIconTypes";
import { scale } from "react-native-size-matters";
import PropTypes from 'prop-types';
import NavButtonTypes from './NavButtonTypes';

export default class NavButton extends Component {

    getType = (type) => {
        return type === NavButtonTypes.left ? ImageIconTypes.arrowBack.name : ImageIconTypes.arrowFront.name;
    }
    render() {
        const { type, ...others } = this.props;
        return (
            <View style={styles['nav_' + type]}>
                <ImageIcon type={this.getType(type)} size={scale(70)} {...others} />
            </View>
        );
    }
}

NavButton.propTypes = {
    type: PropTypes.string.isRequired
}