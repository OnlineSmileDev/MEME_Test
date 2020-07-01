import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { Text, TextInput, View } from 'react-native';
import ImageIcon from '../../common/ImageIcon/ImageIcon';
import ImageIconTypes from '../../common/ImageIcon/ImageIconTypes';
import { scale } from 'react-native-size-matters';

export const TextInputView = (props) => {
    let textBox = '';

    const readonlyView = () => (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            width: '90%',
            marginBottom: scale(20)
        }}>
            <Text style={styles.readonly}>
                {props.text}
            </Text >
        </View>
    )
    const editView = () => (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            width: '90%'
        }}>
            <TextInput
                onChangeText={(val) => props.onValueChange(val, false)}
                onEndEditing={(val) => props.onValueChange(val.nativeEvent.text, true)}
                value={props.text}
                style={styles.input}
                multiline
                scrollEnabled
                numberOfLines={2}
                ref={(input) => { textBox = input; }}

            />
            <View style={{
                position: 'absolute',
                bottom: '1%',
                right: '-2.5%'
            }}>
                <ImageIcon type={ImageIconTypes.pencil.name} size={scale(45)} onPress={() => { textBox.focus() }} />
            </View>
        </View>

    )
    return (
        <>
            {!props.editable && readonlyView()}
            {props.editable && editView()}
        </>
    );
}

TextInputView.propTypes = {
    text: PropTypes.string.isRequired,
    editable: PropTypes.bool.isRequired,
    onValueChange: PropTypes.func.isRequired
}
TextInputView.defaultProps = {
    onValueChange: (val, submit) => { console.log(`value=${val}, submit=${submit}`) },
    text: '',
    editable: false
}