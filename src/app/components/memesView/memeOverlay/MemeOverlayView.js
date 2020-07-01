import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import Overlay from 'react-native-modal-overlay';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';
import styles from './styles';
import ImageIcon from '../../common/ImageIcon/ImageIcon';
import ImageIconTypes from '../../common/ImageIcon/ImageIconTypes';
import { scale } from 'react-native-size-matters';
import RatingBar from '../../memes/RatingBar/RatingBar';
import { dimensions } from '../../../styles/base';

export default MemeOverlayView = (props) => {
    return (
        <Overlay visible={props.isVisible} onClose={props.onClose} closeOnTouchOutside
            childrenWrapperStyle={styles.contentView}
            containerStyle={styles.container}>
            <View style={styles.close} >
                <ImageIcon type={ImageIconTypes.x.name} size={scale(40)} onPress={props.onClose} />
            </View>
            <View style={{
                width: dimensions.fullWidth,
                height: dimensions.fullWidth - scale(10),
                borderRadius: scale(20),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                marginBottom: scale(20)
            }}>
                <FastImage
                    source={{ uri: props.uri }}
                    style={{ ...styles.image, padding: scale(5) }}
                    resizeMode={FastImage.resizeMode.contain} />
            </View>
            <RatingBar
                size={scale(70)}
                likePress={() => props.onRespond(props.id, 'like')}
                dislikePress={() => props.onRespond(props.id, 'dislike')}
                firePress={() => props.onRespond(props.id, 'fire')}
            />
        </Overlay>
    );
}

FireMemesItems.propTypes = {
    uri: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onRespond: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired
}
FireMemesItems.defaultProps = {
    onClose: () => { },
    onRespond: (memeId, val) => { },
    id: '',
    isVisible: false
}