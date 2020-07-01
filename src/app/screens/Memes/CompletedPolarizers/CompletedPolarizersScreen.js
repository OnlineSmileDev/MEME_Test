import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from "react-redux";
import { ScaledSheet, scale } from 'react-native-size-matters';
import { Surface } from 'react-native-paper';
import styles from './styles';
import completedPolarizerImage from '../../../assets/polarizers/completed_polarizers.png';
import Button from '../../../components/common/button/Button';
import ButtonTypes from '../../../components/common/button/ButtonTypes';
import { TopHeaderBar } from '../../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../../components/common/header/HeaderTypes';
import commonDispatchProps from '../../../state/common/commonDispatchProps';
import RouteNames from '../../../navigation/common/RouteNames';
import commonStateProps from '../../../state/common/commonStateProps';
import { UserFields } from '../../../services/api/helpers/users/userFields';

const Params = {
}

class CompletedPolarizersScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    componentDidMount() {
        this.props.updateLastScreen(this.props.user.id);
        this.props.fetchProfile(this.props.user.id);
    }
   
    componentDidUpdate() {
    }
    move = () => {
        this.props.navigation.navigate(RouteNames.HumorStyle);
    }
    render() {
        return (
            <>
                <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'The Meme App'} textSize={scale(24)} />
                <View style={styles.container}>
                    <Surface style={styles.surface}>
                        <Text style={styles.captionText}>
                            You finished the humor quiz!
                            Click below to find out your humor style.
                        </Text>
                        <Image style={styles.image} source={completedPolarizerImage} resizeMode={'contain'} />

                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {/* Fixme add vertical centers */}
                        </View>
                        <Button
                            type={ButtonTypes.Generic}
                            textStyle={styles.btnText}
                            buttonStyle={styles.btnStyle}
                            text="I'm Ready"
                            onPress={this.move} />
                    </Surface>
                </View>
            </>
        );
    }
}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.CompletedPolarizers);
    return {
        ...commonState,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.CompletedPolarizers),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompletedPolarizersScreen);