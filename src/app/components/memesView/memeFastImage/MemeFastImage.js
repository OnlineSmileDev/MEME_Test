import React from "react";
import FastImage from 'react-native-fast-image'
import { View } from "react-native";
import { IconButton } from "react-native-paper";
import styles from './styles';
import PropTypes from 'prop-types';
import { TouchableOpacity } from "react-native-gesture-handler";

export default MemeFastImage = (props) => {

    return (
        <TouchableOpacity style={styles.container} onPress={() => props.onSelect(props.source)}>
            <FastImage
                style={styles.image}
                source={{
                    uri: props.source,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover} />
            {false && <IconButton color='white' icon='times-circle' style={{ ...styles.check }} />}
        </TouchableOpacity>
    );

}

MemeFastImage.propTypes = {
    source: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}
MemeFastImage.defaultProps = {

}