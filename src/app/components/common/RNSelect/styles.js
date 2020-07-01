import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    container: {
        width: '100@s',
        height: '50@vs'
    },
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: '14@s',
        color: '#2C2C2C',
        // marginTop: '-1@vs',
        marginLeft: '2@s',
        textAlign: 'left',
        flexWrap: 'wrap',
    },
    textView: {
        // height: '30@s',
        // borderBottomWidth: 1,
        // borderColor: 'rgba(29,29,29,0.2)',
        // minWidth: '50%',
        // marginLeft: '7%',
        // flexDirection: 'row',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        textAlignVertical: 'center'
    },
    form: {
        // marginLeft: '-15%',
        // backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        height: '20@s',
        fontSize: 16,
        // paddingVertical: 12,
        // paddingHorizontal: 10,
        // borderBottomWidth: 1,
        // borderColor: 'gray',
        // borderRadius: 4,
        // paddingRight: 30,
    }
});