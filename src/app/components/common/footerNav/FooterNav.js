import React, { Component } from "react";
import { View } from "react-native";
import { verticalScale, moderateScale } from 'react-native-size-matters';
import ImageIconTypes from "../ImageIcon/ImageIconTypes";
import styles from './styles';
import ImageIcon from "../ImageIcon/ImageIcon";

export default class FooterNav extends Component {

    render() {
        return (
            <View style={styles.bottomView}>
                <View>
                    {this.props.displayLeft && <ImageIcon type={ImageIconTypes.arrowBack.name} size={moderateScale(60)} onPress={() => { }} />}
                </View>
                <View style={styles.btnStyle}>
                    <ImageIcon type={ImageIconTypes.arrowFront.name} size={moderateScale(60)} onPress={() => { }} />
                </View>
            </View>
        );
    }
}