import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";
import { scale } from 'react-native-size-matters';
import styles from './styles';
import { TopHeaderBar } from '../../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../../components/common/header/HeaderTypes';
import ImageIcon from '../../../components/common/ImageIcon/ImageIcon';
import NavButton from '../../../components/common/NavButton/NavButton';
import NavButtonTypes from '../../../components/common/NavButton/NavButtonTypes';
import { DoubleSlider, SingleSlider } from '../../../components/common/doubleSlider/DoubleSlider';
import ImageIconTypes from '../../../components/common/ImageIcon/ImageIconTypes';
import commonDispatchProps from '../../../state/common/commonDispatchProps';
import RouteNames from '../../../navigation/common/RouteNames';
import commonStateProps from '../../../state/common/commonStateProps';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Params = {
    ageRange: 'ageRange',
    distanceRange: 'distanceRange'
}

class AgeDistanceScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    componentDidMount() {
    }
    componentDidUpdate() {
    }
    updateRange = (what, val) => {
        this.props.updateScreenData(what, val);
    }
    moveNext = () => {
        this.props.navigation.navigate(RouteNames.EndDealbreaker);
    }
    render() {
        return (
            <>
                <View style={styles.container}>
                    <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'The Meme App'} textSize={scale(24)} />
                    {/* <View style={styles.firstIcon}>
                        <ImageIcon type={ImageIconTypes.arrowLeftPrimary.name} size={scale(24)} />
                    </View> */}
                    <View style={styles.outerView}>
                        <View style={styles.textCenter}>
                            <Text style={styles.secondaryText}>Age Range</Text>
                        </View>
                        <View style={{ ...styles.bday, marginBottom: scale(100) }}>
                            <DoubleSlider
                                fetchValue={(val) => { this.updateRange(Params.ageRange, val) }}
                                min={18}
                                max={69}
                                values={this.props[Params.ageRange]}
                                currentLeftValue={this.props[Params.ageRange][0]}
                                currentRightValue={this.props[Params.ageRange][1]} />

                        </View>
                        <View style={styles.textCenter}>
                            <Text style={styles.secondaryText}>Distance</Text>
                        </View>
                        <View style={styles.caption}>
                            <Text style={{ color: 'rgba(10,9,9,0.80)', fontFamily: 'Poppins-Light', fontSize: 15 }}>Miles</Text>
                        </View>
                        <View style={styles.bday}>
                            <SingleSlider
                                fetchValue={(val) => { this.updateRange(Params.distanceRange, val) }}
                                min={0}
                                max={100}
                                values={this.props[Params.distanceRange]}
                                currentValue={this.props[Params.distanceRange][0]}
                            // currentRightValue={this.props[Params.distanceRange][1]} 
                            />
                        </View>
                    </View>
                    <View style={{ position: 'absolute', right: scale(10), bottom: scale(10) }}>
                        <ImageIcon type={ImageIconTypes.skipGreen.name} onPress={this.moveNext} size={scale(50)} />
                    </View>
                </View>
            </>
        );
    }
}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.AgeDistance);
    return {
        ...commonState,
        [Params.ageRange]: commonState.thisScreen[Params.ageRange] ?? [22, 60],
        [Params.distanceRange]: commonState.thisScreen[Params.distanceRange] ?? [0, 5],
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.AgeDistance),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AgeDistanceScreen);