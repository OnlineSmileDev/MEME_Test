import React, { Component } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';
import PropTypes from 'prop-types';
import ImageIcon from '../ImageIcon/ImageIcon';
import ImageIconTypes from '../ImageIcon/ImageIconTypes';
import { scale } from 'react-native-size-matters';
import { Form, Item, Picker } from 'native-base';
import { View } from 'react-native';
import { fonts } from '../../../styles/base';
import { hexToRgba } from '../../../utils/colorUtils';

export const RNSelectTypes = {
    Top: 'top',
    Bottom: 'bottom'
}

export default class RNSelect extends Component {
    componentDidMount() {
    }
    renderBottomSelect = (currentValue) => (
        <RNPickerSelect
            style={{
                fontSize: 16,
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 4,
                paddingRight: 30,
                viewContainer: {
                    width: '90%',
                    height: '100%',
                },
                inputIOS: {
                    borderBottomWidth: 1,
                    borderColor: 'rgba(29,29,29,0.2)',
                    minWidth: '25%',
                    maxWidth: '50%',
                    height: '100%',
                    // marginLeft: '2%',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    fontFamily: 'Poppins-Regular',
                    fontSize: scale(14),
                    color: '#2C2C2C',
                    marginLeft: scale(2),
                    textAlign: 'left',
                    flexWrap: 'wrap',
                },
                iconContainer: {
                    top: 5,
                    right: 10,
                }
            }}
            placeholder={{
                label: this.props.caption,
                value: undefined,
                color: '#9EA0A4',
            }}
            useNativeAndroidPickerStyle={false}
            // onValueChange={(val) => { this.props.onValueChange(val, true) }}
            onValueChange={(val) => { !val ? (() => { })() : this.props.onValueChange(val, true) }}
            itemKey={currentValue}
            value={currentValue}
            items={this.props.items}
            Icon={() => {
                if (this.props.showIcon) {
                    return (<View style={{ marginTop: scale(-10) }}><ImageIcon type={ImageIconTypes.arrowDown.name} size={scale(45)} /></View >);
                }
                else {
                    return (<></>)
                }
            }}
        />
    )
    renderTopSelect = () => (
        <Form style={styles.form}>
            {/* {console.log(props)} */}
            <Item picker style={{ width: '100%', height: '100%', borderWidth: 0, borderBottomWidth: 0, }} >
                <Picker
                    note
                    mode="dialog"
                    // iosIcon={
                    //     <View style={{
                    //         marginTop: '-45%',
                    //         width: '90%',
                    //         height: '100%',
                    //         // backgroundColor: 'red'
                    //     }}>
                    //         <ImageIcon type={ImageIconTypes.arrowDown.name} size={scale(45)} />
                    //     </View>}
                    // style={styles.textView}
                    itemStyle={{
                        ...styles.textView,
                        width: '100%',
                        borderBottomWidth: 0,
                        borderWidth: 0
                    }}
                    itemTextStyle={{
                        ...styles.text,
                        margin: 0,
                        textAlignVertical: 'center',
                        color: hexToRgba('#426371', 0.80),
                        borderBottomWidth: 0,
                        fontFamily: fonts.poppinsRegular,
                        fontSize: scale(12)
                    }}
                    placeholder=""
                    placeholderStyle={{ color: hexToRgba('#426371', 0.80), textAlignVertical: 'center', borderBottomWidth: 0, margin: 0 }}
                    placeholderIconColor={hexToRgba('#426371', 0.80)}
                    selectedValue={this.props.currentValue}
                    onValueChange={(val) => { !val ? (() => { })() : this.props.onValueChange(val) }}>
                    {this.props.items.map((x) => (
                        <Picker.Item label={x.label} value={x.value} />
                    ))}
                </Picker>
            </Item>
        </Form>
    )
    render() {
        return (
            <>
                {this.props.type === RNSelectTypes.Bottom && this.renderBottomSelect(this.props.currentValue)}
                {this.props.type === RNSelectTypes.Top && this.renderTopSelect(this.props.currentValue)}
            </>
        );
    }
}

RNSelect.propTypes = {
    type: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    currentValue: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    showIcon: PropTypes.bool.isRequired
}

RNSelect.defaultProps = {
    currentValue: '',
    caption: '',
    items: [],
    type: RNSelectTypes.Bottom,
    showIcon: true
}