import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Image, View, Text, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { ScaledSheet } from 'react-native-size-matters';
import PropTypes from 'prop-types';
import styles from './styles';
import ImageHolder from "../imageHolder/ImageHolder";

function MemeItems(images) {
    return (
        <View style={styles.memeItemView}>
            <View style={styles.row}>
                {/* <View style={styles.item}> */}
                {images.map((value, i) => {
                    return <ImageHolder key={i} source={value.mediaLink} isPlaceholder={false} />;
                })
                }
                {/* </View> */}
            </View>
        </View>
    );
}


export default class MemeGrid extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.name}'s Fire Memes</Text>
                {MemeItems(this.props.images)}
            </View>
        );
    }
}

MemeGrid.defaultProps = {
    name: 'Charla',
    images: []
}
MemeGrid.propTypes = {
    name: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired
}