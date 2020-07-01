import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';
import ImageIcon from '../../common/ImageIcon/ImageIcon';
import ImageIconTypes from '../../common/ImageIcon/ImageIconTypes';
import { scale } from 'react-native-size-matters';
import RNSelect, { RNSelectTypes } from '../../common/RNSelect/RNSelect';
import { CreateOptionList } from '../../../utils/memeLists';
import { GenderInterestTypeList, EthnicityList, ReligionList } from '../../../utils/MemeEnums';

export default SettingPreferences = (props) => {
    const getItem = (name, key, value, valueList) => (
        <View style={styles.itemView}>
            {console.log(`key=${key},value=${value}`)}
            <View style={styles.itemView1st}>
                <View style={{ width: '100%' }}>
                    <Text style={styles.itemMainText}>{name}</Text>
                </View>
                {/* <Text style={styles.itemSubtext}>{value}</Text> */}
                <View style={{ width: '100%', height: scale(30), padding: 0 }}>
                    <RNSelect
                        type={RNSelectTypes.Top}
                        currentValue={value}
                        items={valueList}
                        caption={value}
                        onValueChange={(val) => { props.onPreferenceChange(key, val) }} />
                </View>

            </View>
            <View style={styles.preferenceIcon}>
                <ImageIcon type={ImageIconTypes.arrowRightPrimary.name} size={scale(40)} />
            </View>
        </View>
    )
    const getItemList = () => (
        <>
            {getItem("I'm interested in", 'interestedIn', props.interestedIn, CreateOptionList(GenderInterestTypeList))}
            {/* {getItem("Enthnicity", 'ethnicity', props.ethnicity, CreateOptionList(EthnicityList))} */}
            {/* {getItem("Religion", 'religion', props.religion, CreateOptionList(ReligionList))} */}
        </>
    )
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.topText}>Preferences</Text>
            </View>
            {getItemList()}
        </View>
    )
}

SettingPreferences.propTypes = {
    interestedIn: PropTypes.string.isRequired,
    ethnicity: PropTypes.string.isRequired,
    religion: PropTypes.string.isRequired,
    onPreferenceChange: PropTypes.func.isRequired
}

SettingPreferences.defaultProps = {
    interestedIn: 'girls',
    ethnicity: 'open',
    religion: 'other',
    onPreferenceChange: (field, value) => { }
}