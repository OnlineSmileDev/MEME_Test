import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Overlay from 'react-native-modal-overlay';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';
import styles from './styles';
import ImageIcon from '../../common/ImageIcon/ImageIcon';
import ImageIconTypes from '../../common/ImageIcon/ImageIconTypes';
import { scale } from 'react-native-size-matters';
import { dimensions } from '../../../styles/base';

import img from '../../../assets/images/report_user.png';
import { hexToRgba } from '../../../utils/colorUtils';

export default ReportMatchView = (props) => {
    addRow = (text) => (
        <View style={{
            width: '90%',
            height: scale(45),
            borderTopWidth: 1,
            borderColor: hexToRgba('#707070', 0.33),
            flexDirection: 'row',
            alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{
                width: '80%',
                height: '100%',
                padding: '1%',
                justifyContent: 'center'

            }}>
                <Text style={{
                    // fontWeight: '500',
                    fontSize: scale(15),
                    color: hexToRgba('#2C2C2C', 0.9),
                    fontFamily: 'Poppins-Regular'
                }}>{text}</Text>
            </View>
            <View style={{
                width: '20%',
                height: '100%',
                padding: '1%',
                alignItems: 'center',
                justifyContent: 'center'

            }}>
                <ImageIcon type={ImageIconTypes.arrowFront.name} size={scale(45)} onPress={props.onRespond} />
            </View>
        </View>
    )
    return (
        <Overlay
            visible={props.isVisible}
            onClose={props.onClose}
            closeOnTouchOutside
            childrenWrapperStyle={styles.contentView}
            containerStyle={styles.container}>

            <View style={{
                width: dimensions.fullWidth * 0.9,
                height: dimensions.fullHeight * 0.8,
                borderRadius: scale(20),
                alignItems: 'center',
                // justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                // marginBottom: scale(20)
            }}>
                <Image
                    source={img}
                    style={{ ...styles.image, padding: scale(5) }}
                    resizeMode={'contain'} />
                <View style={{
                    width: '100%',
                    // alignItems: 'center'
                }}>
                    <View style={{
                        width: '100%',
                        borderBottomWidth: 1,
                        borderColor: hexToRgba('#707070', 0.33),
                    }}>
                        <Text style={{
                            fontFamily: 'Poppins-SemiBold',
                            fontSize: scale(21),
                            fontWeight: '600',
                            marginLeft: scale(10)
                        }}>Report this person for:</Text>
                    </View>
                    <View style={{
                        // height: '50%',
                        width: '100%',
                        // flex:1
                    }}>
                        <ScrollView contentContainerStyle={{
                            backgroundColor: '#FFFFFC'
                        }}>
                            {this.addRow('Inappropriate Profile')}
                            {this.addRow('Inappropriate Messages')}
                            {this.addRow('Fake Profile')}
                            {this.addRow('Other')}
                        </ScrollView>
                    </View>


                </View>
            </View>
        </Overlay>
    );
}

ReportMatchView.propTypes = {
    onClose: PropTypes.func.isRequired,
    onRespond: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired
}
ReportMatchView.defaultProps = {
    isVisible: false
}