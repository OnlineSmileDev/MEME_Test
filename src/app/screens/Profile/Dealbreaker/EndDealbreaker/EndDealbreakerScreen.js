
import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import { connect } from "react-redux";
import { Text, Surface } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { ScaledSheet, verticalScale, scale } from 'react-native-size-matters';
import { TopHeaderBar } from '../../../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../../../components/common/header/HeaderTypes';
import styles from './styles';
import mainImage from '../../../../assets/images/finished_dealbreakers.png';
import Button from '../../../../components/common/button/Button';
import ButtonTypes from '../../../../components/common/button/ButtonTypes';
import RouteNames from '../../../../navigation/common/RouteNames';
import { StackActions } from '@react-navigation/native';

class EndDealbreakerScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };

    componentDidMount() {
    }
    componentDidUpdate() {
    }
    moveNext = () => {
        this.props.navigation.dispatch(StackActions.popToTop());
        this.props.navigation.navigate(
            RouteNames.MemeTab,
            {
                screen: RouteNames.RegularMemeResponse,
                initial: false,
            });
    }
    render() {
        return (
            <View style={styles.container}>
                <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'The Meme App'} textSize={scale(24)} />
                <Surface style={styles.mainCard}>
                    <View style={styles.textView}>

                    </View>
                    <Image style={styles.mainImage} source={mainImage} />

                    <View style={styles.buttons}>

                        <View style={{ width: '100%', height: 30 }}></View>
                        <Button
                            type={ButtonTypes.Facebook}
                            textStyle={styles.memesBtnText}
                            buttonStyle={styles.memesBtn}
                            onPress={this.moveNext}
                            text={'Memes!'}
                        />

                        <View style={{ width: '100%', height: 15 }}></View>
                    </View>
                </Surface>
                {/* <MemeLightLoader /> */}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EndDealbreakerScreen);