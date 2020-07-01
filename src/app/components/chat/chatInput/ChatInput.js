import React from "react";
import { scale } from "react-native-size-matters";
import styles from './styles';
import PropTypes from 'prop-types';
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import ImageIcon from "../../common/ImageIcon/ImageIcon";
import ImageIconTypes from "../../common/ImageIcon/ImageIconTypes";
import { colors } from "../../../styles/base";

export default ChatInput = (props) => {
    const getInput = () => (
        <TextInput
            style={styles.input}
            value={props.currentValue}
            clearButtonMode='always'
            onChange={(x) => { props.onUpdate(x.nativeEvent.text, false) }}
            onKeyPress={(e) => {
                if (e.nativeEvent.key === 'Enter') {
                    props.onUpdate(props.currentValue, true)
                }
            }}
            multiline={true}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.cameraIcon}>
                <ImageIcon type={ImageIconTypes.grayCamera.name} size={scale(35)} />
            </View>
            {getInput()}
            <View style={{
                position: 'absolute',
                width: '10%',
                height: scale(30),
                right: scale(7.5),
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <ImageIcon onPress={() => props.onUpdate(props.currentValue, true)} type={ImageIconTypes.sendArrow.name} size={scale(23)} />

            </View>
        </View>
    );

}


ChatInput.propTypes = {
    currentValue: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired
}
ChatInput.defaultProps = {
    currentValue: '',
    onUpdate: () => { }
}