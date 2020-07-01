import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import FireMemesItems from '../fireMemeItems/FireMemeItems';
import PropTypes from 'prop-types';

export const FireMemesView = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.name}'s Fire Memes</Text>
            <FireMemesItems images={props.images} onSelect={props.onSelect} />
        </View>
    );
}

FireMemesItems.defaultProps = {
    images: [],
    name: '',
}
FireMemesView.propTypes = {
    images: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}


