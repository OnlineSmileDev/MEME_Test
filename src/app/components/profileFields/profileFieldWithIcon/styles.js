import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet, scale } from 'react-native-size-matters';

export default ScaledSheet.create({
    icon: {
        width: '9%',
        height: '30@s',
        // marginTop: '1%',
        marginLeft: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileInfoItem: {
        flexDirection: 'row',
        width: '100%',
        marginTop: '2.5%',
        // minHeight: '60@s'
    },
    profileInfoItemShort: {
        flexDirection: 'row',
        width: '45%',
        marginLeft: '5.5%',
        minHeight: '40@s'
    },
    profileInfoItemShortView: {
        flexDirection: 'row',
        marginTop: '2.5%'
    },
    textView: {
        borderBottomWidth: 1,
        height: '30@s',
        borderColor: 'rgba(29,29,29,0.2)',
        minWidth: '25%',
        marginLeft: '3.5%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    profileInfoItemText: {
        fontFamily: 'Poppins-Regular',
        fontSize: '14@s',
        color: '#2C2C2C',
        // marginTop: '-1@vs',
        marginLeft: '2@s',
        textAlign: 'left',
        flexWrap: 'wrap',

    },
    editIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: '15@s',
        height: '40@s',
        marginTop:'-10@s'
        // height: '100%',
        // width: '100%'
        // width: '10%',
        // position: 'absolute',
        // bottom: '12.5%',
        // right: 0
    }
});