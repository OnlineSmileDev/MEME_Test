import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import UserAvatar from '../../../components/avatar/UserAvatar/UserAvatar';
import { scale } from 'react-native-size-matters';
import Button from '../../../components/common/button/Button';
import ButtonTypes from '../../../components/common/button/ButtonTypes';

class MatchNotificationScreen extends Component {

    handleViewProfileMatch = () => {

    }
    handleMoreMemes = () => {

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <Text style={styles.topText}>NICE!</Text>
                    <Text style={styles.subText}>
                        You have % memestry with !
                    </Text>
                    <View style={styles.avatar}>
                        <UserAvatar size={scale(150)} />
                    </View>
                    <Button
                        type={ButtonTypes.Facebook}
                        text={'View Profile / Chat'}
                        textStyle={styles.viewProfileBtnText}
                        buttonStyle={styles.viewProfileBtn}
                        onPress={this.handleViewProfileMatch}
                    />
                    <Button
                        type={ButtonTypes.Generic}
                        text={'More Memes'}
                        textStyle={styles.moreMemesBtnText}
                        buttonStyle={styles.moreMemesBtn}
                        onPress={this.handleMoreMemes}
                    />
                </View>
            </View>
        );
    }
}


const mapStateToProps = state => {

    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MatchNotificationScreen);