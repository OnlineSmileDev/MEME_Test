import { View } from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImageIcon from "../../common/ImageIcon/ImageIcon";
import React, { Component } from "react";
import styles from './styles';
import ImageIconTypes from "../../common/ImageIcon/ImageIconTypes";
import { Text } from "react-native";
import PropTypes from 'prop-types';

export default class MatchesProfileButtons extends Component {
    render() {
        return (
            <View style={styles.profileBtns}>
                {this.props.showSideIcons && <TouchableOpacity style={{ marginLeft: 20 }}>
                    <ImageIcon type={ImageIconTypes.cross.name} size={70} onPress={() => this.props.onResponse(false)} />
                </TouchableOpacity >}
                <TouchableOpacity style={styles.memestry}>
                    <Text style={styles.memeScore}>{this.props.matchScore}%</Text>
                    <Text style={styles.memestryText}>Memestry</Text>
                </TouchableOpacity>
                {this.props.showSideIcons && <TouchableOpacity >
                    <ImageIcon type={ImageIconTypes.love.name} size={70} onPress={() => this.props.onResponse(true)} />
                </TouchableOpacity>}
            </View>
        );
    }
}


MatchesProfileButtons.defaultProps = {
    matchScore: 0,
    onResponse: (val) => { },
    showSideIcons: true
}
MatchesProfileButtons.propTypes = {
    matchScore: PropTypes.number.isRequired,
    onResponse: PropTypes.func.isRequired,
    showSideIcons: PropTypes.bool
}