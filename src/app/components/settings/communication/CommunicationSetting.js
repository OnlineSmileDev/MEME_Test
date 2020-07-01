import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

export default CommunicationSetting = (props) => {

    const getItem = (field, caption, value) => (
        <View style={styles.itemView}>
            <View style={styles.itemView1st}>
                <TextInput
                    placeholder={caption}
                    onChange={(val) => props.onUpdate(field, val.nativeEvent.text, true)}
                    onChangeText={(val) => props.onUpdate(field, val, false)}
                    style={styles.itemMainText}
                    value={value} />
            </View>
        </View>
    )
    const getItemList = () => (
        <>
            {getItem('phone', 'Phone Number', props.phone)}
            {getItem('email', 'Email', props.email)}
        </>
    )
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.topText}>Phone {'&'} Email</Text>
            </View>
            {getItemList()}
        </View>
    )
}

CommunicationSetting.propTypes = {
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired
}

CommunicationSetting.defaultProps = {
    phone: "",
    email: "",
    onUpdate: () => { }
}