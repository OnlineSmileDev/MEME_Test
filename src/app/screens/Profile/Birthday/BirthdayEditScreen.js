import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";
import { ScaledSheet, moderateScale, scale } from 'react-native-size-matters';
import styles from './styles';
import NavButton from '../../../components/common/NavButton/NavButton';
import NavButtonTypes from '../../../components/common/NavButton/NavButtonTypes';
import ImageIconTypes from '../../../components/common/ImageIcon/ImageIconTypes';
import ImageIcon from '../../../components/common/ImageIcon/ImageIcon';
import { TopHeaderBar } from '../../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../../components/common/header/HeaderTypes';
import Select from '../../../components/common/select/Select';
import { monthList, dayList, yearList } from '../../../utils/dateUtils';
import commonDispatchProps from '../../../state/common/commonDispatchProps';
import RouteNames from '../../../navigation/common/RouteNames';
import commonStateProps from '../../../state/common/commonStateProps';
import { UserDB } from '../../../services/storage';
import { navigateOutWithReset } from '../../../navigation/common/NavigationHelper';
import { createUserUpdateItem } from '../../../services/api/helpers/users/userApiHelper';
import { UserFields } from '../../../services/api/helpers/users/userFields';
import { colors } from '../../../styles/base';

const Params = {
    month: 'month',
    day: 'day',
    year: 'year'
}

class BirthdayEditScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };

    init = () => {
        UserDB.fetchLoggedUser().then(u => {
            const bday = u.birthday.split('/');

            this.updateValue(Params.month, bday[0]);
            this.updateValue(Params.day, bday[1]);
            this.updateValue(Params.year, bday[2]);
        }).catch(e => {
            console.log(`error: ${e}`);
        })
    }
    componentDidMount() {
        this.init();
        this.props.updateLastScreen(this.props.user.id, '');
    }
    componentDidUpdate() {
    }
    updateValue = (key, val) => {
        this.props.updateScreenData(key, val);
    }
    updateField = () => {
        let data = createUserUpdateItem(UserFields.Birthday, `${this.props[Params.month]}/${this.props[Params.day]}/${this.props[Params.year]}`);
        this.props.updateUser(this.props.user.id, [data]);
        this.props.fetchProfile(this.props.user.id);
    }
    move = () => {
        this.updateField();
        navigateOutWithReset(this.props.navigation, RouteNames.ProfileBio);
    }
    render() {
        return (
            <>
                <View style={styles.container}>
                    <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'The Meme App'} textSize={scale(24)} />
                    <View style={styles.firstIcon}>
                        <ImageIcon type={ImageIconTypes.bday.name} size={scale(40)} />
                        <Text style={styles.secondaryText}>What's your birthday?</Text>
                    </View>
                    <View style={styles.outerView}>
                        <View style={styles.bday}>
                            <Select items={monthList} selectedValue={this.props.month} onValueChange={(val) => this.updateValue(Params.month, val)} />
                            <Select items={dayList()} selectedValue={this.props.day} onValueChange={(val) => this.updateValue(Params.day, val)} />
                            <Select items={yearList()} selectedValue={this.props.year} onValueChange={(val) => this.updateValue(Params.year, val)} />
                        </View>
                    </View>

                </View>
                <NavButton type={NavButtonTypes.right} onPress={() => this.move()} />
            </>
        );
    }
}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.BirthdayEdit);
    return {
        ...commonState,
        [Params.month]: commonState.thisScreen[Params.month] ?? monthList[0].value,
        [Params.day]: commonState.thisScreen[Params.day] ?? dayList()[0].value,
        [Params.year]: commonState.thisScreen[Params.year] ?? yearList()[0].value
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.BirthdayEdit)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BirthdayEditScreen);