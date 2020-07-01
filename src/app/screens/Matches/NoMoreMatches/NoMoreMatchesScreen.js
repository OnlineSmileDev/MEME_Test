import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from "react-redux";
import { Text, Surface } from 'react-native-paper';
import RouteNames from '../../../navigation/common/RouteNames';
import commonDispatchProps from '../../../state/common/commonDispatchProps';
import commonStateProps from '../../../state/common/commonStateProps';
import Loader from '../../../components/loader/Loader';
import { TopHeaderBar } from '../../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../../components/common/header/HeaderTypes';
import styles from './styles';
import ButtonTypes from '../../../components/common/button/ButtonTypes';
import { scale } from 'react-native-size-matters';
import Button from '../../../components/common/button/Button';

import img from '../../../assets/images/no_more_matches.png'
import { ScrollView } from 'react-native-gesture-handler';
import Tracking from '../../../services/tracking/Tracking';
import TrackableEvents from '../../../services/tracking/TrackableEvents';

class NoMoreMatchesScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };

    componentDidMount() {
    }
    componentDidUpdate() {
    }

    navigateNext = () => {
        Tracking.Track(TrackableEvents.NoMoreMatchesToBrowseMemes);
        this.props.navigation.navigate(
            RouteNames.MemeTab,
            {
                screen: RouteNames.RegularMemeResponse,
                initial: false,
            });
        // navigate
        console.log('clicked')
    }

    render() {
        return (
            <View style={styles.container}>
                <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'New Matches'} textSize={scale(24)} bottomShadow />
                <ScrollView>
                    <Surface style={styles.mainCard}>
                        <View style={styles.textView}>
                            <Text style={styles.secondaryText}> No More Matches Here!</Text>
                        </View>
                        <Image style={styles.mainImage} source={img} resizeMode={'contain'} />
                        <View style={styles.textView}>
                            <Text style={styles.captionText}>
                                Keep swiping memes to unlock
                                more matches!
                        </Text>
                        </View>
                        <View style={styles.buttons}>
                            <View style={{ width: '100%', height: scale(5) }}></View>
                            <Button
                                type={ButtonTypes.Generic}
                                textStyle={styles.btnText}
                                buttonStyle={styles.btnStyle}
                                text="Swipe more memes!"
                                onPress={this.navigateNext} />
                            <View style={{ width: '100%', height: 5 }}></View>
                        </View>

                    </Surface>
                    <Loader />
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.NoMoreMatches);
    return {
        ...commonState,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.NoMoreMatches),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoMoreMatchesScreen);