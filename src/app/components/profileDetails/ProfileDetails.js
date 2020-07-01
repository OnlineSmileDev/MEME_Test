import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from 'prop-types';
import { Surface } from "react-native-paper";
import styles from './styles';
import { DoubleSlider } from "../common/doubleSlider/DoubleSlider";
import profileDetailTypes from "./profileDetailTypes";
import { TextInputView } from "../profileFields/textInput/TextInputView";
import HumorStylePotrait from "../humorStyle/humorStylePotrait/HumorStylePotrait";
import humorStylePotraitTypes from "../humorStyle/humorStylePotrait/humorStylePotraitTypes";
import { humorData } from "../../testData/humorData";
import { ProfileFieldWithIcon } from "../profileFields/profileFieldWithIcon/ProfileFieldWithIcon";
import { ProfileFieldWithIconTypes, ProfileFieldWithIconSize } from "../profileFields/profileFieldWithIcon/profileFieldWithIconTypes";
import UserFieldTypes from "../profileFields/UserFieldTypes";
import { FireMemesView } from "../memesView/fireMemesView/FireMemesView";
import HumorStyleDescription from "../humorStyle/HumorStyleDescription/HumorStyleDescription";
import { CreateOptionList, CreateDisplayList, CreateHeightOptionList } from "../../utils/memeLists";
import { OptionsYesNo, OptionsDesiredRelationship, OptionsPolitics } from "../../utils/MemeEnums";
import Button from "../common/button/Button";
import ButtonTypes from "../common/button/ButtonTypes";
import RouteNames from "../../navigation/common/RouteNames";
import ProfilePreference from "../profilePreference/ProfilePreference";
import { scale } from "react-native-size-matters";
import { dimensions } from "../../styles/base";

export default class ProfileDetails extends Component {
    constructor(props) {
        super(props);
    }
    isEditMode = () => {
        return this.props.mode === profileDetailTypes.OwnProfileEdit;
    }
    profilePreferences = () => {
        return (
            <View style={styles.profilePreference}>
                {/* <Text></Text> */}
                <View>
                    <DoubleSlider />
                </View>
            </View>
        );
    }
    canShowField = (hideable, predicate) => {
        return !hideable || (hideable && predicate);
    }
    render() {
        let details = this.props.details;
        const relationshipType = details.matchDesires?.relationshipType;
        const canHideFields = this.props.mode !== profileDetailTypes.OwnProfileEdit;
        if (this.props.mode === profileDetailTypes.OwnProfileEdit) {
            details = this.props.editDetails;
        }
        // console.log(details);
        return (
            <Surface style={styles.surface}>
                {this.canShowField(canHideFields, (this.props.details.profileBio ?? '').length > 0) &&
                    <TextInputView
                        onValueChange={(val, submit) => this.props.updateFieldFn('bio', val, submit)}
                        editable={this.isEditMode()}
                        text={details.profileBio} />}
                <View style={{
                    // borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderColor: '#rgba(112,112,112,0.21)',
                    width: dimensions.fullWidth,
                    // height: scale(40),
                    paddingVertical: scale(5),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginLeft: scale(-15)
                    // paddingRight: '2%'
                }}>

                    {(this.props.mode === profileDetailTypes.MatchProfileView || this.props.mode === profileDetailTypes.OwnProfileView) && <Text style={styles.humorStyleTitle}>
                        Humor Style
                    </Text>}
                </View>
                <View style={styles.humorStyleView}>
                    {this.props.mode === profileDetailTypes.MatchProfileView && this.props.details.humorStyle.humorStyle.map(x => {
                        return (
                            <HumorStylePotrait
                                type={humorStylePotraitTypes.Light}
                                caption={humorData[x.type].caption}
                                title={humorData[x.type].title}
                                color={humorData[x.type].color}
                                percentage={x.score.toFixed(0)}
                                key={x.type}
                            />
                        );
                    })}

                    {this.props.mode === profileDetailTypes.OwnProfileView &&
                        <HumorStyleDescription
                            showTitle={false}
                            showMoreHumorStyle={this.props.showMoreHumorStyle}
                            humorStyle={this.props.details.humorStyle}
                            toggleMoreLess={this.props.toggleMoreLess} />
                    }
                </View>

                {this.canShowField(canHideFields, relationshipType?.length > 0) && <View style={styles.profileInfo}>
                    <ProfileFieldWithIcon
                        type={ProfileFieldWithIconTypes.MultiValue}
                        valueList={CreateDisplayList(OptionsDesiredRelationship, relationshipType)}
                        optionList={CreateOptionList(OptionsDesiredRelationship)}
                        isDropdown={true}
                        editable={this.isEditMode()}
                        onValueChange={(val, submit) => this.props.updateFieldFn('relationship-type', val, submit)}
                        icon={UserFieldTypes.DesiredInterest.icon}
                        size={ProfileFieldWithIconSize.Full} />
                </View>}

                {this.canShowField(canHideFields, (this.props.details.work?.length > 0)) && <View style={styles.profileInfo}>
                    <ProfileFieldWithIcon
                        placeholder={'WORK'}
                        type={ProfileFieldWithIconTypes.TextInput}
                        value={details.work}
                        onValueChange={(val, submit) => this.props.updateFieldFn('work', val, submit)}
                        editable={this.isEditMode()}
                        icon={UserFieldTypes.Work.icon}
                        size={ProfileFieldWithIconSize.Full} />
                </View>}

                {this.canShowField(canHideFields, (this.props.details.school?.length > 0)) && <View style={styles.profileInfo}>
                    <ProfileFieldWithIcon
                        type={ProfileFieldWithIconTypes.TextInput}
                        placeholder={'SCHOOL'}
                        value={details.school}
                        editable={this.isEditMode()}
                        onValueChange={(val, submit) => this.props.updateFieldFn('school', val, submit)}
                        icon={UserFieldTypes.School.icon}
                        size={ProfileFieldWithIconSize.Full} />
                </View>}


                {this.canShowField(canHideFields, (this.props.details.politics?.length > 0)) && <View style={styles.profileInfo}>
                    <ProfileFieldWithIcon
                        type={ProfileFieldWithIconTypes.Dropdown}
                        value={details.politics ?? 'other'}
                        optionList={CreateOptionList(OptionsPolitics)}
                        // placeholder={'POLITICS'}
                        editable={this.isEditMode()}
                        onValueChange={(val, submit) => this.props.updateFieldFn('politics', val, submit)}
                        icon={UserFieldTypes.Politics.icon}
                        size={ProfileFieldWithIconSize.Full} />
                </View>}

                <View style={styles.profileInfoItemShortView}>
                    {this.canShowField(canHideFields, (this.props.details.smokeWeed?.length > 0)) && <ProfileFieldWithIcon
                        type={ProfileFieldWithIconTypes.SingleValue}
                        optionList={CreateOptionList(OptionsYesNo)}
                        value={details.smokeWeed ?? 'no'}
                        // value={OptionsYesNo[details.smokeWeed ?? 'no'].name}
                        onValueChange={(val, submit) => this.props.updateFieldFn('smoke-weed', val, submit)}
                        isDropdown={true}
                        editable={this.isEditMode()}
                        icon={UserFieldTypes.Marijuana.icon}
                        size={ProfileFieldWithIconSize.Short} />}

                    {this.canShowField(canHideFields, (this.props.details.useDrugs?.length > 0)) && <ProfileFieldWithIcon
                        type={ProfileFieldWithIconTypes.SingleValue}
                        optionList={CreateOptionList(OptionsYesNo)}
                        // selectedValue={details.useDrugs ?? 'no'}
                        value={details.useDrugs ?? 'no'}
                        isDropdown={true}
                        editable={this.isEditMode()}
                        onValueChange={(val, submit) => this.props.updateFieldFn('use-drugs', val, submit)}
                        icon={UserFieldTypes.Drugs.icon}
                        size={ProfileFieldWithIconSize.Short} />}
                </View>

                <View style={styles.profileInfoItemShortView}>
                    {this.canShowField(canHideFields, (this.props.details.height?.length > 0)) && <ProfileFieldWithIcon
                        type={ProfileFieldWithIconTypes.SingleValue}
                        optionList={CreateHeightOptionList()}
                        value={details.height}
                        isDropdown={true}
                        editable={this.isEditMode()}
                        onValueChange={(val, submit) => this.props.updateFieldFn('height', val, submit)}
                        icon={UserFieldTypes.Height.icon}
                        size={ProfileFieldWithIconSize.Short} />}
                    {this.canShowField(canHideFields, (this.props.details.drinkAlcohol?.length) > 0) && <ProfileFieldWithIcon
                        type={ProfileFieldWithIconTypes.SingleValue}
                        optionList={CreateOptionList(OptionsYesNo)}
                        value={details.drinkAlcohol ?? 'no'}
                        // value={OptionsYesNo[details.drinkAlcohol ?? 'no'].name}
                        isDropdown={true}
                        editable={this.isEditMode()}
                        onValueChange={(val, submit) => this.props.updateFieldFn('drink-alcohol', val, submit)}
                        icon={UserFieldTypes.Alcohol.icon}
                        size={ProfileFieldWithIconSize.Short} />}

                </View>
                {this.isEditMode() && <ProfilePreference
                    ageValues={this.props.agePreferenceValues}
                    heightValues={this.props.heightPreferenceValues}
                    distanceValues={this.props.distancePreferenceValues}
                    updateAgeRange={(values, submit) => this.props.updatePreferenceFn('age', values, submit)}
                    updateDistanceRange={(values, submit) => this.props.updatePreferenceFn('distance', values, submit)}
                    updateHeightRange={(values, submit) => this.props.updatePreferenceFn('height', values, submit)}
                />}
                {(this.props.fireMemes?.length ?? 0) > 0 && <FireMemesView
                    onSelect={this.props.onFireMemeSelect}
                    images={this.props.fireMemes}
                    name={this.props.details.firstName} />}
            </Surface>
        );
    }
}

ProfileDetails.propTypes = {
    mode: PropTypes.string.isRequired,
    details: PropTypes.object.isRequired,
    editDetails: PropTypes.object,
    toggleMoreLess: PropTypes.func,
    onFireMemeSelect: PropTypes.func,
    showMoreHumorStyle: PropTypes.bool,
    fireMemes: PropTypes.array.isRequired
}
ProfileDetails.defaultProps = {
    mode: profileDetailTypes.MatchProfileView,
    onFireMemeSelect: () => { },
    details: {},
    fireMemes: [],
    editDetails: {}
    // showMoreHumorStyle: false,
    // toggleMoreLess: () => { }
}