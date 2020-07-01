
import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { connect } from "react-redux";
import { Text, Surface } from 'react-native-paper';
import { scale } from 'react-native-size-matters';
import styles from './styles';
import mainImage from '../../../../assets/images/answer_deal_breakers.png';
import { TopHeaderBar } from '../../../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../../../components/common/header/HeaderTypes';
import Button from '../../../../components/common/button/Button';
import ButtonTypes from '../../../../components/common/button/ButtonTypes';
import commonDispatchProps from '../../../../state/common/commonDispatchProps';
import RouteNames from '../../../../navigation/common/RouteNames';
import commonStateProps from '../../../../state/common/commonStateProps';
import DealbreakerTypes from '../GenericDealbreaker/DealbreakerTypes';

class BeginDealbreakerScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    componentDidMount() {
    }
    componentDidUpdate() {
    }
    updateNotification = (active) => {
        if (active) {
            this.props.navigation.navigate(RouteNames.GenericDealbreaker, { type: DealbreakerTypes.drugs.name })
        }
        else {
            this.props.navigation.pop();
        }
    }
    render() {
        return (
            <>
                <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'The Meme App'} textSize={scale(24)} />
                <View style={styles.container}>
                    <ScrollView>
                        <Surface style={styles.mainCard}>
                            <View style={styles.textView}>
                                <Text style={styles.secondaryText}>
                                    Pro Tip!{"\n"}
                            You'll get better matches if you
                            complete your deal-breakers.
                                </Text>
                            </View>
                            <Image style={styles.mainImage} source={mainImage} resizeMode={'center'} />

                            <View style={styles.buttons}>

                                <View style={{ width: '100%', height: 7 }}></View>
                                <Button
                                    type={ButtonTypes.Facebook}
                                    textStyle={styles.answerBtnText}
                                    buttonStyle={styles.answerBtn}
                                    onPress={() => this.updateNotification(true)}
                                    text={'Answer Deal-breakers'}
                                />
                                <View style={{ width: '100%', height: 5 }}></View>
                                <Button
                                    type={ButtonTypes.Generic}
                                    textStyle={styles.nahBtnText}
                                    buttonStyle={styles.nahBtn}
                                    onPress={() => this.updateNotification(false)}
                                    text={"Nah I'm good."}
                                />
                                <View style={{ width: '100%', height: 15 }}></View>

                            </View>
                        </Surface>
                    </ScrollView>
                </View>
            </>
        );
    }
}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.BeginDealbreaker);
    return {
        ...commonState,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.BeginDealbreaker),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BeginDealbreakerScreen);