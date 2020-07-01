import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View, Text, Image, Dimensions } from "react-native";
import styles from "./styles";
import PropTypes from 'prop-types';

import * as Animatable from 'react-native-animatable';
import humorStylePotraitTypes from "./humorStylePotraitTypes";
import { scale } from "react-native-size-matters";
import { IconButton } from "react-native-paper";

export default class HumorStylePotrait extends Component {
    showLight = () => {
        return (
            <>
                <Text style={styles[this.props.type].percentage}>{this.props.percentage}%</Text>
                <Text style={styles[this.props.type].title} >{this.props.title}</Text>
                <Text style={styles[this.props.type].tinyCaption}>{this.props.caption}</Text>
            </>
        );
    }
    showPotrait = () => {
        return (
            <>
                <Text style={styles[this.props.type].percentage}>{this.props.percentage}%</Text>
                <Text style={styles[this.props.type].title} adjustsFontSizeToFit={true}>{this.props.title}</Text>
                <Text style={styles[this.props.type].tinyCaption}>{this.props.caption}</Text>
                <Image source={this.props.icon} style={styles[this.props.type].image} />
                <View style={styles[this.props.type].hr} />
                <Text style={styles[this.props.type].text}>
                    {this.props.body}
                </Text>
            </>
        );
    }
    showLandscape = () => {
        return (
            <>
                <View style={styles[this.props.type].icon}>
                    <Image source={this.props.icon} style={styles[this.props.type].image} resizeMode='contain'
                    />
                </View>
                <View style={styles[this.props.type].content}>
                    <Text style={styles[this.props.type].percentage}>{this.props.percentage}%</Text>
                    <Text style={styles[this.props.type].title}>{this.props.title}</Text>
                    <Text style={styles[this.props.type].tinyCaption}>{this.props.caption}</Text>
                    <View style={styles[this.props.type].hr} />
                    <Text style={styles[this.props.type].text}>
                        {this.props.body}
                    </Text>
                </View>
            </>
        )

    }
    render() {
        return (
            <Animatable.View
                easing="ease-in-out-expo"
                duration={1000}
                animation="fadeIn" iterationCount={1} direction="normal"
                style={{ ...styles[this.props.type].container, backgroundColor: this.props.color }}>
                {this.props.type === humorStylePotraitTypes.Potrait && this.showPotrait()}
                {this.props.type === humorStylePotraitTypes.Landscape && this.showLandscape()}
                {this.props.type === humorStylePotraitTypes.Light && this.showLight()}
            </Animatable.View>
        );
    }
}

HumorStylePotrait.defaultProps = {
    delay: 2000,
    type: humorStylePotraitTypes.Potrait
}
HumorStylePotrait.propTypes = {
    delay: PropTypes.number,
    color: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    icon: PropTypes.any,
    percentage: PropTypes.number.isRequired,
    type: PropTypes.string
}
