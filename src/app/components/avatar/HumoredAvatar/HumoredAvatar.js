import React, { Component, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View, Dimensions } from "react-native";
import styles from "./styles";

import * as Animatable from 'react-native-animatable';
import UserAvatar from "../UserAvatar/UserAvatar";
import PropTypes from 'prop-types';
import { scale } from "react-native-size-matters";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { colors } from "../../../styles/base";
import { humorData } from "../../../testData/humorData";

export default class HumoredAvatar extends Component {
    getScores = () => {
        let scores = [];
        this.props.humorStyle.forEach((item, index) => {
            scores.push({ type: item['type'], score: item.score });
        });
        return scores;
    }
    drawArc = (start, percentage, color) => {
        return (
            <AnimatedCircularProgress
                size={this.props.size + scale(20)}
                width={scale(7)}
                fill={percentage}
                rotation={(start * 3.6)}
                duration={2000}
                style={styles.pie}
                tintColor={color}
                key={start}
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor='transparent' />
        );
    }
    generateHumorCircles = () => {
        let i = 0;
        let start = 0;
        let scores = this.getScores();

        return (
            <>
                {scores.map(x => {
                    start += x.score;
                    return this.drawArc(start - x.score, x.score, humorData[x.type].color);
                })}
            </>
        );


    }
    render() {
        return (
            <View style={styles.container}>
                {this.generateHumorCircles()}
                {/* <AnimatedCircularProgress
                    size={this.props.size + scale(20)}
                    width={scale(7)}
                    fill={100}
                    rotation={0}
                    style={styles.pie}
                    tintColor="green"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor={colors.whitish} /> */}
                <View style={styles.avatar}>
                    <UserAvatar size={this.props.size} uri={this.props.uri} />
                </View>
            </View>
        );
    }
}

HumoredAvatar.defaultProps = {
    size: scale(80),

}
HumoredAvatar.propTypes = {
    humorStyle: PropTypes.array.isRequired,
    size: PropTypes.number.isRequired,
    uri: PropTypes.string
}