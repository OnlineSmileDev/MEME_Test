import React, { Component } from 'react';
import { Picker, View, Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

export default class Select extends Component {
    render() {
        const { items, style, ...other } = this.props;
        const _style = { ...styles.container, ...style };
        return (
            <View style={styles.view}>
                <Picker
                    style={_style}
                    {...other}>
                    {items.map((value, index) => {
                        return (<Picker.Item label={value.label} value={value.value} key={'key' + index} />);
                    })}
                </Picker>
            </View>
        );
    }
}

Select.propTypes = {
    items: PropTypes.array.isRequired,
}

Select.defaultProps = {
    items: []
}