import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from "react-redux";
import { scale } from 'react-native-size-matters';
import { Avatar } from 'react-native-paper';
import { TopHeaderBar } from '../../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../../components/common/header/HeaderTypes';
import styles from './styles';
import ButtonTypes from '../../../components/common/button/ButtonTypes';
import Button from '../../../components/common/button/Button';
import RouteNames from '../../../navigation/common/RouteNames';
import commonDispatchProps from '../../../state/common/commonDispatchProps';
import commonStateProps from '../../../state/common/commonStateProps';
import Loader from '../../../components/loader/Loader';
import PropTypes from 'prop-types';
import ImageIconTypes from '../../../components/common/ImageIcon/ImageIconTypes';
import { hexToRgba } from '../../../utils/colorUtils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Params = {
    message: 'message'
}

class SendLikeScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };

    componentDidMount() {
        this.props.updateLastScreen(this.props.user.id);
    }
    componentDidUpdate() {
    }
    onTextChange = (val) => {
        this.props.updateScreenData(Params.message, val);
    }
    updateField = () => {

    }
    done = (includeMessage) => {
        const msg = includeMessage ? this.props[Params.message] : null;
        const { matchId, userId } = this.props.route.params;
        this.props.acceptMatch(userId, matchId, msg);
        this.props.navigation.navigate(RouteNames.Matches, { fromLikePageId: matchId });
    }
    render() {
        return (
            <>
                <View style={styles.container}>
                    <TopHeaderBar
                        bottomShadow
                        type={HeaderTypes.textWithIcons}
                        text={'Like Sent'}
                        textSize={scale(24)}
                        rightIcon={ImageIconTypes.dots.name}
                        leftOnPress={() => this.props.navigation.goBack()} />
                    <KeyboardAwareScrollView style={{ flex: 1, width: '100%' }}>
                        <View style={styles.profile}>
                            <View style={styles.avatar}>
                                <Avatar.Image
                                    size={scale(75)} source={{ uri: this.props.user.profilePicture }} />
                            </View>
                            <View style={styles.descView}>
                                <Text style={styles.surname}>{'Nelson'}</Text>
                                <Text style={styles.desc}>
                                    Add a note to send with your like to
                                    standout from the crowd!
                            </Text>
                            </View>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                onChangeText={(txt) => this.onTextChange(txt)}
                                value={this.props[Params.message]}
                                style={styles.input}
                                multiline
                                scrollEnabled
                                numberOfLines={8}
                                placeholder={`Hi ${this.props.matchfirstName}! Our memestry is so high, I absolutely had to message you!`}
                            />
                            <Text type='light' style={styles.counterIcon}>{this.props[Params.message].length}</Text>
                        </View>
                        <View style={styles.buttonView}>
                            <Button
                                type={ButtonTypes.Generic}
                                text='Send Message'
                                textStyle={styles.btnTextStyle}
                                buttonStyle={styles.btnStyle}
                                onPress={() => this.done(true)} />
                            <Button
                                type={ButtonTypes.Generic}
                                text='Send Like'
                                textStyle={{ ...styles.btnTextStyle, color: hexToRgba('#585858', 0.5) }}
                                buttonStyle={{ ...styles.btnStyle, backgroundColor: '#FFFFFC', borderColor: '#BFBFBF' }}
                                onPress={() => this.done(false)} />
                        </View>
                    </KeyboardAwareScrollView>
                </View>
                <Loader />
            </>
        );
    }
}


SendLikeScreen.propTypes = {
    matchfirstName: PropTypes.string.isRequired
}
SendLikeScreen.defaultProps = {
    matchfirstName: 'Nelson'
}
const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.SendLike);
    return {
        ...commonState,
        [Params.message]: commonState.thisScreen[Params.message] ?? ''
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.SendLike)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SendLikeScreen);