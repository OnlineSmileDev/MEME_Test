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
import { navigateOutWithReset } from '../../../navigation/common/NavigationHelper';
import { UserFields } from '../../../services/api/helpers/users/userFields';
import { createUserUpdateItem } from '../../../services/api/helpers/users/userApiHelper';
import { colors } from '../../../styles/base';

const Params = {
    bio: 'bio'
}

class ProfileBioScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };

    componentDidMount() {
        this.props.updateLastScreen(this.props.user.id, '');
    }
    componentDidUpdate() {
    }
    onTextChange = (val) => {
        this.props.updateScreenData(Params.bio, val);
    }
    updateField = () => {
        let data = createUserUpdateItem(UserFields.ProfileBio, this.props[Params.bio]);
        this.props.updateUser(this.props.user.id, [data]);
    }
    done = () => {
        this.updateField();
        navigateOutWithReset(this.props.navigation, RouteNames.ReadyToSwipe)
    }
    render() {
        return (
            <>
                <View style={styles.container}>
                    <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'Create your Bio!'} textSize={scale(27)} bottomShadow textStyle={{ color: colors.blackish }} />
                    <View style={styles.profile}>
                        <View style={styles.avatar}>
                            <Avatar.Image
                                size={scale(75)} source={{ uri: this.props.user.profilePicture }} />
                        </View>
                        <View style={styles.descView}>
                            <Text style={styles.surname}>{this.props.user.firstName}</Text>
                            <Text style={styles.desc}>
                                Make a good first impression with a short bio!
                            </Text>
                        </View>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            onChangeText={(txt) => this.onTextChange(txt)}
                            // value={this.props.bio}
                            style={styles.input}
                            multiline
                            scrollEnabled
                            numberOfLines={5}
                            placeholder='Three interesting facts about me!'
                        />
                        <Text type='light' style={styles.counterIcon}>{this.props.bio.length}</Text>
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            type={ButtonTypes.Generic}
                            text='Done'
                            textStyle={styles.btnTextStyle}
                            buttonStyle={styles.btnStyle}
                            onPress={() => this.done()} />
                    </View>
                </View>
                {/* <MemeDarkLoader /> */}
            </>
        );
    }
}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.ProfileBio);
    return {
        ...commonState,
        [Params.bio]: commonState.thisScreen[Params.bio] ?? ''
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.ProfileBio)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileBioScreen);