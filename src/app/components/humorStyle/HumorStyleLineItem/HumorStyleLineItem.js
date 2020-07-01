import React, { Component } from "react";
import PropTypes from 'prop-types';
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { IconButton } from "react-native-paper";
import { verticalScale, ScaledSheet, scale } from "react-native-size-matters";
import * as Animatable from 'react-native-animatable';

class HumorStyleLineItem extends Component {
    render() {
        return (
            <Animatable.View
                easing="ease-in-out-expo"
                duration={2000}
                animation="fadeIn" delay={this.props.delay} iterationCount={1} direction="normal" style={styles.left}>

                <IconButton style={{ ...styles.icon, backgroundColor: this.props.color }} size={scale(10)} />
                <View style={styles.container}>
                    <Text style={styles.text}>{this.props.caption}</Text>
                    <Text style={styles.percentage}>{this.props.percentage}%</Text>
                </View>
            </Animatable.View >
        );
    }
}

HumorStyleLineItem.defaultProps = {
    delay: 2000
}

HumorStyleLineItem.propTypes = {
    percentage: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    delay: PropTypes.number
}
const mapStateToProps = (state) => {
    return {
    }
}

export default connect(
    mapStateToProps
)(HumorStyleLineItem);