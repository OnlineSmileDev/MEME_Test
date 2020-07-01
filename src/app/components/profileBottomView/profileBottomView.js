import React, { Component } from 'react';
import { View } from 'react-native-animatable';
import PropTypes from 'prop-types';
import styles from './styles';
import { List } from 'react-native-paper';
import { navigateOut } from '../../navigation/common/NavigationHelper';
import RouteNames from '../../navigation/common/RouteNames';

export default class ProfileBottomView extends Component {

    handlePress = (type) => {
        switch (type) {
            case 'account-settings':
                navigateOut(this.props.navigation, RouteNames.Setting);
                break;
            case 'logout':
                break;
            case 'delete-account':
                this.props.resetTimers(this.props.timers.setInterval ?? {});
                this.props.resetUser(this.props.user.id);
                this.props.navigation.navigate(RouteNames.Splash, { isUserReset: true });
                // navigateOut(this.props.navigation, );
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <List.Item
                    title='Account Settings'
                    titleStyle={styles.listItemText}
                    onPress={() => { this.handlePress('account-settings'); }}
                />
                <List.Item
                    title='Log Out'
                    titleStyle={styles.listItemText}
                    onPress={() => { this.handlePress('logout'); }}
                />
                <List.Item
                    title='Delete Account'
                    titleStyle={styles.listItemText}
                    onPress={() => { this.handlePress('delete-account'); }}
                />
            </View>
        );
    }
}


ProfileBottomView.propTypes = {
    timers: PropTypes.object.isRequired,
    resetTimers: PropTypes.func.isRequired
}
ProfileBottomView.defaultProps = {
    timers: {},
    resetTimers: () => { }
}