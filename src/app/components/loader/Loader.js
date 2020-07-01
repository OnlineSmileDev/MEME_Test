import React, { Component } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { connect } from "react-redux";
import styles from './styles'
import { colors } from "../../styles/base";
import PropTypes from 'prop-types';
import LoaderTypes from "./LoaderTypes";

class Loader extends Component {
    render() {
        return (
            <>
                {this.props.loader.isVisible && <ActivityIndicator style={styles.loader} animating={this.props.loader.isVisible} color={colors[this.props.type]} size="large" />}
            </>
        );
    }
}
Loader.defaultProps = {
    type: LoaderTypes.primaryColor
};

Loader.propTypes = {
    type: PropTypes.string.isRequired
}
const mapStateToProps = (state) => {
    const { loader } = state.screen;
    return {
        loader: loader,
    }
}

export default connect(
    mapStateToProps
)(Loader);