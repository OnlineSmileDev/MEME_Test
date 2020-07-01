import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";
import HumorStyleList from "../HumorStyleList/HumorStyleList";
import HumoredAvatar from "../../avatar/HumoredAvatar/HumoredAvatar";
import PropTypes from 'prop-types';
import { Instagram } from "react-content-loader/native";

export default class HumorStyleTopView extends Component {
    render() {
        if (this.props.humorStyle.length === 0) {
            return (<Instagram />)
        }
        return (
            <View style={styles.top}>
                <View style={styles.pp} >
                    <HumoredAvatar humorStyle={this.props.humorStyle} uri={this.props.profilePicture} />
                </View>

                <View style={styles.humorList}>
                    <HumorStyleList humorStyle={this.props.humorStyle} />
                </View>
            </View>
        );
    }
}

HumorStyleTopView.defaultProps = {
    humorStyle: []
}
HumorStyleTopView.propTypes = {
    humorStyle: PropTypes.array,
    profilePicture: PropTypes.string.isRequired
}
