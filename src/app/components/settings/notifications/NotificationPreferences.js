import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';
import ImageIcon from '../../common/ImageIcon/ImageIcon';
import ImageIconTypes from '../../common/ImageIcon/ImageIconTypes';
import { scale } from 'react-native-size-matters';
import { Switch } from 'react-native-paper';

export default NotificationPreferences = (props) => {

    const getItem = (name, component) => (
        <View style={styles.itemView}>
            <View style={styles.itemView1st}>
                <Text style={styles.itemMainText}>{name}</Text>
            </View>
            <View style={styles.preferenceIcon}>
                {component}
            </View>
        </View>
    )
    const getItemList = () => (
        <>
            {getItem("Push Notifications", <Switch value={props.push_notifications} onValueChange={props.onUpdate} />)}
            {getItem("Help Center",
                <ImageIcon type={ImageIconTypes.questionMark.name} size={scale(20)} />)}
        </>
    )
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.topText}>Notifications</Text>
            </View>
            {getItemList()}
        </View>
    )
}

NotificationPreferences.propTypes = {
    push_notifications: PropTypes.bool.isRequired,
    onUpdate: PropTypes.func.isRequired,
}

NotificationPreferences.defaultProps = {
    push_notifications: false,
    onUpdate: () => { }
}