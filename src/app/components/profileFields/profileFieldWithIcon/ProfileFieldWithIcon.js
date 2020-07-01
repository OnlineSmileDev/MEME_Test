import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { Text, TextInput } from 'react-native';
import { ProfileFieldWithIconTypes, ProfileFieldWithIconSize } from './profileFieldWithIconTypes';
import { View } from 'react-native-animatable';
import ImageIcon from '../../common/ImageIcon/ImageIcon';
import ImageIconTypes from '../../common/ImageIcon/ImageIconTypes';
import { scale } from 'react-native-size-matters';
import RNSelect from '../../common/RNSelect/RNSelect';

export const ProfileFieldWithIcon = (props) => {
    let textBox = '';
    const readonlyShort = () => {
        return (
            <View style={styles.profileInfoItemShort}>
                <View style={styles.icon} >
                    <ImageIcon type={props.icon} />
                </View>
                <View style={{ ...styles.textView, marginLeft: '20%' }}>
                    <Text style={styles.profileInfoItemText}>
                        {props.value}
                    </Text>
                </View>
            </View>
        );
    }
    const readonlyFull = () => {
        return (
            <View style={styles.profileInfoItem}>
                <View style={styles.icon} >
                    <ImageIcon type={props.icon} size={scale(24)} />
                </View>

                <View style={{ ...styles.textView, width: '70%' }}>
                    <Text style={styles.profileInfoItemText}>
                        {props.type === ProfileFieldWithIconTypes.MultiValue &&
                            props.valueList.map(x => {
                                return (x + ', ')
                            })
                        }
                        {
                            props.type === ProfileFieldWithIconTypes.TextInput && props.value
                        }
                        {
                            props.type === ProfileFieldWithIconTypes.Dropdown && props.value
                        }
                    </Text>
                </View>
            </View>
        );
    }
    editableTextInput = () => (
        <View style={styles.profileInfoItem}>
            <View style={{ ...styles.icon, width: '10%' }} >
                <ImageIcon type={props.icon} />
            </View>
            <View style={{ ...styles.textView, width: '75%' }}>
                <TextInput
                    placeholder={props.placeholder}
                    onChangeText={(val) => props.onValueChange(val, false)}
                    onEndEditing={(val) => props.onValueChange(val.nativeEvent.text, true)}
                    ref={(input) => { textBox = input; }}

                    style={{
                        ...styles.profileInfoItemText,
                        // backgroundColor: 'red',
                        width: '100%',
                        height: '90%',
                        // marginTop: '1%',
                        textAlignVertical: 'center'
                    }}
                    value={props.value}
                />
            </View>
            <View style={{ ...styles.editIcon, width: '10%' }}>
                {props.isDropdown && <ImageIcon type={ImageIconTypes.arrowDown.name} size={scale(45)} />}
                {!props.isDropdown && <ImageIcon type={ImageIconTypes.pencil.name} size={scale(45)} onPress={() => { textBox.focus() }} />}
            </View>
        </View>
    )
    editableMultiSelect = () => (
        <View style={styles.profileInfoItem}>
            <View style={{ ...styles.icon, width: '10%' }} >
                <ImageIcon type={props.icon} />
            </View>
            <View style={{ ...styles.textView, width: '75%' }}>
                {/* <RNSelect items={props.optionList} caption={props.caption} /> */}

                {/* <Text style={styles.profileInfoItemText}>
                    {props.type === ProfileFieldWithIconTypes.MultiValue &&
                        props.valueList.map(x => {
                            return (x + ', ')
                        })
                    }
                    {
                        props.type === ProfileFieldWithIconTypes.SingleValue && props.value
                    }
                </Text> */}
            </View>
            <View style={{ ...styles.editIcon, width: '10%' }}>
                {props.isDropdown && <ImageIcon type={ImageIconTypes.arrowDown.name} size={scale(45)} />}
                {!props.isDropdown && <ImageIcon type={ImageIconTypes.pencil.name} size={scale(45)} />}
            </View>
        </View >
    )
    const editFull = () => {
        return (
            <>
                {props.type === ProfileFieldWithIconTypes.Dropdown && editableDropdown()}
                {props.type === ProfileFieldWithIconTypes.TextInput && editableTextInput()}
            </>
        );
    }
    editableDropdown = () => (
        <View style={styles.profileInfoItem}>
            <View style={{ ...styles.icon, width: '10%' }} >
                <ImageIcon type={props.icon} />
            </View>
            <View style={{ ...styles.textView, width: '75%' }}>
                <RNSelect
                    currentValue={props.value}
                    items={props.optionList}
                    caption={props.caption}
                    showIcon={false}
                    onValueChange={props.onValueChange} />
            </View>
            <View style={{ ...styles.editIcon, width: '10%' }}>
                <ImageIcon type={ImageIconTypes.arrowDown.name} size={scale(45)} />
            </View>
        </View>
    )

    const editShort = () => {
        return (
            <View style={styles.profileInfoItemShort}>
                <View style={styles.icon} >
                    <ImageIcon type={props.icon} />
                </View>

                <View style={{ ...styles.textView, borderBottomWidth: 0, marginLeft: '13%' }}>
                    <RNSelect
                        currentValue={props.value}
                        items={props.optionList}
                        caption={props.caption}
                        onValueChange={props.onValueChange} />
                </View>
            </View >
        );
    }
    return (
        <>
            {!props.editable && props.size === ProfileFieldWithIconSize.Full && readonlyFull()}
            {!props.editable && props.size === ProfileFieldWithIconSize.Short && readonlyShort()}
            {props.editable && props.size === ProfileFieldWithIconSize.Full && editFull()}
            {props.editable && props.size === ProfileFieldWithIconSize.Short && editShort()}
        </>
    );
}

ProfileFieldWithIcon.propTypes = {
    caption: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    valueList: PropTypes.array.isRequired,
    editable: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    isDropdown: PropTypes.bool.isRequired,
    optionList: PropTypes.array,
    selectedValue: PropTypes.string,
    onValueChange: PropTypes.func.isRequired,
    activelyEditing: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired
}
ProfileFieldWithIcon.defaultProps = {
    caption: '',
    editable: false,
    type: ProfileFieldWithIconTypes.SingleValue,
    value: '',
    valueList: [''],
    size: ProfileFieldWithIconSize.Full,
    isDropdown: false,
    optionList: [],
    selectedValue: '',
    onValueChange: (val) => { console.log('changed ' + val) },
    activelyEditing: false,
    placeholder: ''
}