import React from 'react';

import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './styles';
import { View, Text } from 'react-native';
import { scale } from 'react-native-size-matters';

export default DateLabel = (props) => {

    const getDateLabel = () => {
        const diff = moment().diff(moment(props.date), 'days');
        if (diff === 0) {
            return 'TODAY';
        }
        else if (diff === 1) {
            return 'YESTERDAY';
        }
        return props.date;
    }
    const getExtraStyling = () => {
        const diff = moment().diff(moment(props.date), 'days');
        if (diff === 0) {
            return {};
        }
        else if (diff === 1) {
            return { width: scale(80) };
        }
        return { width: scale(80) };
    }
    return (
        <View style={{ ...styles.container, ...getExtraStyling() }}>
            <Text style={styles.text}>{getDateLabel()}</Text>
        </View>
    );
}

DateLabel.propTypes = {
    date: PropTypes.string.isRequired
}
DateLabel.defaultProps = {
    date: moment().format('MM/DD/YYYY')
}