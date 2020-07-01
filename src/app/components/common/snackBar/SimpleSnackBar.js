import React, { Component } from "react";
import { connect } from "react-redux";
import { Snackbar } from "react-native-paper";
import { snackbarUpdate } from "../../../state/actions/snackbar/snackbarActions";

class SimpleSnackBar extends Component {
    render() {
        return (
            <Snackbar
                visible={this.props.snackbar.isVisible}
                onDismiss={this.props.resetSnackbar}
                action={{
                    label: 'Cancel',
                    onPress: () => {
                        this.props.resetSnackbar
                    },
                }}>
                {this.props.snackbar.message}
            </Snackbar>
        );
    }
}

const mapStateToProps = state => {
    const { snackbar } = state.screen;
    return {
        snackbar: snackbar
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateSnackbar: (msg) => {
            dispatch(snackbarUpdate({ isVisible: true, message: msg }));
        },
        resetSnackbar: () => {
            dispatch(snackbarUpdate({ isVisible: false, message: '' }));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SimpleSnackBar);