import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { ScaledSheet, verticalScale, scale } from 'react-native-size-matters';
import { TouchableOpacity } from "react-native-gesture-handler";
import PropTypes from 'prop-types';

import styles from './styles';
import ImageIcon from "../../common/ImageIcon/ImageIcon";
import ImageIconTypes from '../../common/ImageIcon/ImageIconTypes';
import { isSmallScreen } from "../../../utils/screenUtils";

export const RatingBarType = {
    Wide: 'wide',
    Narrow: 'narrow'
}
export default class RatingBar extends Component {

    displayWithTutorial = () => {
        let top = -20;
        if (isSmallScreen()) {
            top = -30
        }
        return (
            <>
                <View style={{
                    alignItems: 'center',
                    justifyItems: 'center'
                }}>
                    <Text style={{
                        color: '#FD6363',
                        position: 'absolute',
                        top: scale(-20),

                    }}>Dislike</Text>
                    <ImageIcon type={ImageIconTypes.dislike.name} size={this.props.size} onPress={this.props.dislikePress} />
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyItems: 'center'
                }}>
                    <Text style={{
                        position: 'absolute',
                        top: scale(-20),
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        color: '#51D3A3'
                    }}>Like</Text>
                    <ImageIcon type={ImageIconTypes.like.name} size={this.props.size} onPress={this.props.likePress} />
                </View>

                <View style={{
                    alignItems: 'center',
                    justifyItems: 'center'
                }}>

                    {isSmallScreen() && <Text style={{
                        position: 'absolute',
                        top: scale(top),
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        color: '#FF6D02',
                        fontSize: scale(14)
                    }}>Superlike & Save</Text>}

                    {!isSmallScreen() && <Text style={{
                        position: 'absolute',
                        top: scale(top),
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        color: '#FF6D02',
                        // fontSize: scale(14)
                    }}>Superlike & {'\n'} Save</Text>}
                    <ImageIcon type={ImageIconTypes.fire.name} size={this.props.size} onPress={this.props.firePress} />
                </View>
            </>
        );
    }
    displayNormal = () => (
        <>
            <ImageIcon type={ImageIconTypes.dislike.name} size={this.props.size} onPress={this.props.dislikePress} />
            <ImageIcon type={ImageIconTypes.like.name} size={this.props.size} onPress={this.props.likePress} />
            <ImageIcon type={ImageIconTypes.fire.name} size={this.props.size} onPress={this.props.firePress} />
        </>
    )
    render() {
        return (
            <View style={styles['container_' + this.props.type]}>
                {this.props.showTutorial && this.displayWithTutorial()}
                {!this.props.showTutorial && this.displayNormal()}
                {/* <ImageIcon type={ImageIconTypes.dislike.name} size={this.props.size} onPress={this.props.dislikePress} />
                <ImageIcon type={ImageIconTypes.like.name} size={this.props.size} onPress={this.props.likePress} />
                <ImageIcon type={ImageIconTypes.fire.name} size={this.props.size} onPress={this.props.firePress} /> */}
            </View>
        );
    }
}


RatingBar.propTypes = {
    dislikePress: PropTypes.func.isRequired,
    likePress: PropTypes.func.isRequired,
    firePress: PropTypes.func.isRequired,
    size: PropTypes.number,
    type: PropTypes.string.isRequired,
    showTutorial: PropTypes.bool
}
RatingBar.defaultProps = {
    size: scale(70),
    type: RatingBarType.Wide,
    showTutorial: false
}