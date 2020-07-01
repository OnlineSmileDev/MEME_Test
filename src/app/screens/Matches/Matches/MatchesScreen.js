import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { scale } from "react-native-size-matters";
import { ScrollView } from "react-native-gesture-handler";
import { TopHeaderBar } from "../../../components/common/header/TopHeaderBar";
import HeaderTypes from "../../../components/common/header/HeaderTypes";
import SwipeView from "../../../components/swipeView/SwipeView";
import ImageIconTypes from '../../../components/common/ImageIcon/ImageIconTypes';
import MatchesProfileButtons from "../../../components/matches/matchesProfileButtons/MatchesProfileButtons";
import commonDispatchProps from "../../../state/common/commonDispatchProps";
import RouteNames from "../../../navigation/common/RouteNames";
import commonStateProps from "../../../state/common/commonStateProps";
import ProfileDetails from "../../../components/profileDetails/ProfileDetails";
import MemeOverlayView from "../../../components/memesView/memeOverlay/MemeOverlayView";
import { getAge } from "../../../utils/dateUtils";

import styles from './styles';
import TrackableEvents from "../../../services/tracking/TrackableEvents";
import Tracking from "../../../services/tracking/Tracking";
import ReportMatchView from "../../../components/matches/reportMatch/ReportMatchView";

const Params = {
    currentMatchIndex: 'currentMatchIndex',
    isOverlayVisible: 'isOverlayVisible',
    overlayUri: 'overlayUri',
    fromLikePageId: 'fromLikePageId',
    currentMatchScore: 'currentMatchScore',
    isReportOverlayOpen: 'isReportOverlayOpen'
}

class MatchesScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    componentDidMount() {
    }
    componentDidUpdate() {
    }

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {

        return (
            <>
                <TopHeaderBar
                    type={HeaderTypes.textWithRightIcon}
                    text={'New Matches'}
                    textSize={scale(24)}
                    rightIcon={ImageIconTypes.dots.name}
                    rightOnPress={() => { this.props.updateScreenData(Params.isReportOverlayOpen, true) }}
                />
                <ScrollView contentContainerStyle={styles.container}>
                    <Text>Matches Screen</Text>
                </ScrollView>
            </>
        );
    }
}

MatchesScreen.defaultProps = {

};
MatchesScreen.propTypes = {

};

const mapStateToProps = (state) => {
    const commonState = commonStateProps(state, RouteNames.Matches);
    const { matches, memeItems } = state;
    return {
        ...commonState,
        matches: matches,
        fireMemes: memeItems.fireMemes,
        [Params.currentMatchIndex]: commonState.thisScreen[Params.currentMatchIndex] ?? 0,
        [Params.isOverlayVisible]: commonState.thisScreen[Params.isOverlayVisible] ?? false,
        [Params.overlayUri]: commonState.thisScreen[Params.overlayUri] ?? '',
        [Params.currentMatchScore]: commonState.thisScreen[Params.currentMatchScore] ?? 80,
        [Params.isReportOverlayOpen]: commonState.thisScreen[Params.isReportOverlayOpen] ?? false,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.Matches),

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MatchesScreen);