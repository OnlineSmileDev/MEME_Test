
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from "react-redux";
import { Surface } from 'react-native-paper';
import { scale } from 'react-native-size-matters';
import DealbreakerTypes from '../GenericDealbreaker/DealbreakerTypes';
import styles from './styles';
import { TopHeaderBar } from '../../../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../../../components/common/header/HeaderTypes';
import commonStateProps from '../../../../state/common/commonStateProps';
import RouteNames from '../../../../navigation/common/RouteNames';
import commonDispatchProps from '../../../../state/common/commonDispatchProps';
import Loader from '../../../../components/loader/Loader';
import Button from '../../../../components/common/button/Button';
import ButtonTypes from '../../../../components/common/button/ButtonTypes';

class DealbreakerFinishedScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    componentDidMount() {
    }
    componentDidUpdate() {
    }

    moveNext = () => {

    }
    render() {
        return (
            <>
                <View style={styles.container}>
                    <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'The Meme App'} textSize={scale(27)} />
                    <View style={styles.firstIcon}>
                    </View>
                    <Surface style={styles.mainCard}>
                        <Image style={styles.mainImage} source={DealbreakerTypes.dealbreakerFinished.image} />
                    </Surface>
                    <View style={{ width: '100%', height: DealbreakerTypes[type].bottomHeight }}></View>
                    <View style={{ width: '100%', height: 7 }}></View>
                    <View style={styles.bottomButtons}>
                        <Button type={ButtonTypes.WaitlistPasscode} onPress={this.moveNext} />
                    </View>
                    <Loader />
                </View>
            </>
        );
    }
}

DealbreakerFinishedScreen.propTypes = {
}
DealbreakerFinishedScreen.defaultProps = {
}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.DealbreakerFinished);
    return {
        ...commonState
    }
};

const mapDispatchToProps = dispatch => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.DealbreakerFinished),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DealbreakerFinishedScreen);