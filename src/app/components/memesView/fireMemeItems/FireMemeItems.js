import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Image } from 'react-native';
import Overlay from 'react-native-modal-overlay';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';
import MemeFastImage from '../memeFastImage/MemeFastImage';
import styles from './styles';

export default FireMemesItems = (props) => {
    const images = props.mode
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {props.images.length > 0 && props.images.map((value, i) => {
                    return (<MemeFastImage
                        key={i}
                        source={value.mediaLink}
                        onSelect={(src) => props.onSelect(src, value.id, value.memeItemId)} />);
                })}
            </View>
        </View>

    );
}

FireMemesItems.propTypes = {
    images: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
}
FireMemesItems.defaultProps = {
    images: [],
    onSelect: () => { }
}