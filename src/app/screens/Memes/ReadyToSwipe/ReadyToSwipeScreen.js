import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from "react-redux";
import { ScaledSheet, scale } from 'react-native-size-matters';
import { Surface } from 'react-native-paper';
import styles from './styles';

import readyToSwipeImage from '../../../assets/images/expanding_brain.png'
import Button from '../../../components/common/button/Button';
import ButtonTypes from '../../../components/common/button/ButtonTypes';
import HeaderTypes from '../../../components/common/header/HeaderTypes';
import { TopHeaderBar } from '../../../components/common/header/TopHeaderBar';
import commonStateProps from '../../../state/common/commonStateProps';
import RouteNames from '../../../navigation/common/RouteNames';
import commonDispatchProps from '../../../state/common/commonDispatchProps';
import { navigateOutWithReset } from '../../../navigation/common/NavigationHelper';
import { ScrollView } from 'react-native-gesture-handler';

class ReadyToSwipeScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    componentDidMount() {
        this.props.updateLastScreen(this.props.user.id);
    }
    componentDidUpdate() {
    }
    move = () => {
        this.props.fetchProfile(this.props.user.id);
        navigateOutWithReset(this.props.navigation, RouteNames.MemeResponse);
    }
    render() {
        return (
            <>
                <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'The Meme App'} textSize={scale(24)} />
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.top}>
                        <Text style={styles.secondaryText}>Swipe Memes. Get Matches!</Text>
                    </View>
                    <Surface style={styles.surface}>
                        <View style={styles.hrLine}>
                            <Image style={styles.image} source={readyToSwipeImage} resizeMode={'contain'} />
                        </View>
                        <Text style={styles.captionText}>
                            Swipe Memes to Find Your Humor Style and Match with Like-Minded People
                        </Text>
                        <View style={styles.btn}>
                            <Button
                                type={ButtonTypes.Generic}
                                textStyle={styles.btnText}
                                buttonStyle={styles.btnStyle}
                                text="I'm Ready"
                                onPress={this.move} />
                        </View>
                    </Surface>
                </ScrollView>
            </>
        );
    }
}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.ReadyToSwipe);
    return {
        ...commonState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.ReadyToSwipe),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReadyToSwipeScreen);