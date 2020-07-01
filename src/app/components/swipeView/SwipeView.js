import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Swiper from 'react-native-swiper';
import styles from './styles';
import PropTypes from 'prop-types';
import ImageIcon from "../common/ImageIcon/ImageIcon";
import ImageIconTypes from "../common/ImageIcon/ImageIconTypes";
import { hexToRgba } from "../../utils/colorUtils";
import { scale } from "react-native-size-matters";
import FastImage from "react-native-fast-image";


export default class SwipeView extends Component {
    dot = () => {
        return (<View style={styles.dot} />);
    }
    activeDot = () => {
        return (<View style={styles.activeDot} />);
    }
    nextButton = () => {
        return (<View style={{ marginRight: '2%' }}><ImageIcon type={ImageIconTypes.next.name} size={scale(50)} /></View>);
    }
    prevButton = () => {
        return (<View><ImageIcon type={ImageIconTypes.prev.name} size={scale(40)} /></View>);
    }
    getItems = () => {
        return (
            <Swiper
                containerStyle={{
                    backgroundColor: '#FFFFFF',
                    // borderRadius: scale(50)
                }}
                style={styles.wrapper}
                showsButtons
                loop={false}
                paginationStyle={{ position: 'absolute', top: '-92%' }}
                // height={scale(800)}
                nextButton={this.nextButton()} prevButton={this.prevButton()}
                dot={this.dot()} activeDot={this.activeDot()}>
                {this.props.images.map((value, i) => {
                    return (
                        <View style={styles.slide} key={i}>
                            <FastImage source={{ uri: value }} resizeMode={'cover'} style={styles.matchImage} />
                        </View>
                    );
                })}
            </Swiper>
        );
    }
    showCamera = () => (
        <View style={{
            position: 'absolute',
            left: scale(29),
            bottom: scale(20)

        }}>
            <ImageIcon type={ImageIconTypes.grayWhiteCamera.name} size={scale(40)} onPress={this.props.onImageChooser} />
        </View>
    )
    render() {
        return (
            <View style={styles.container}>
                {this.getItems()}
                <View style={{
                    position: 'absolute',
                    backgroundColor: hexToRgba('#000000', 0.2),
                    left: 3,
                    top: 0,
                    width: '100%',
                    height: '15%',
                    borderTopRightRadius: scale(30),
                    borderTopLeftRadius: scale(30),
                    marginHorizontal: '2%'
                    // zIndex: 102
                }}>
                    {/* <LinearGradient
                        colors={['red', 'blue']}
                        style={{
                            // flex: 1,
                            width: 300,
                            height: 300
                        }} /> */}

                </View>
                <Text style={styles.name}>
                    {this.props.name}, {this.props.age}
                </Text>
                {this.props.showCameraIcon && this.showCamera()}
            </View>
        );
    }
}

SwipeView.defaultProps = {
    images: [],
    name: "Memeist",
    age: 22,
    showCameraIcon: false,
    onImageChooser: () => { }
};

SwipeView.propTypes = {
    images: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    showCameraIcon: PropTypes.bool,
    onImageChooser: PropTypes.func
};