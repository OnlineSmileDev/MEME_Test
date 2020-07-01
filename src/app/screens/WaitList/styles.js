import { colors, dimensions, fonts, fontSizes } from '../../styles/base';
import { ScaledSheet, verticalScale, scale, moderateScale } from 'react-native-size-matters';
import { hexToRgba } from '../../utils/colorUtils';
export default ScaledSheet.create({
    imgSize: {
        width: '290@s',
        height: '310@s'
    },
    container: {
        backgroundColor: colors.whitish,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'center'
    },
    input: {
        width: '298@s',
        height: '50@vs',
        fontFamily: 'Poppins-Medium',
        backgroundColor: colors.white,
        textAlign: 'center',
        fontSize: '18@msr',
        marginBottom: '10@vs'
    },
    mainDialog: {
        width: '300@s',
        borderRadius: '30@msr',

    },
    contentDialog: {
        backgroundColor: colors.gray,
        borderRadius: '30@msr',
    },
    dialogCover: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '10@msr'
    },
    dialogView: {
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: colors.gray
    },
    dialogText: {
        fontSize: '12@msr',
        fontWeight: '600',
        fontFamily: fonts.poppinsSemiBold,
        color: '#6180D3'
    },
    img: {
        // marginTop:'3%',
        padding: '6@msr',
        paddingBottom: '20@s',
        marginHorizontal: '5@s',
        marginTop: '10@vs',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20@msr',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.58,
        shadowRadius: 8.00,
        elevation: 10,
        // borderColor:'#707070',
    },
    secondaryText: {
        fontFamily: fonts.montserratSemiBold,
        alignSelf: 'center',
        fontSize: '26@msr',
        fontWeight: '600',
        marginTop: '15@vs',
        // marginBottom: '-19@vs',
        color: hexToRgba(colors.black, 0.8)
    },
    passView: {
        marginTop: '30@s',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    passViewText: {
        color: colors.primary,
        fontSize: '14@msr',
        fontFamily: 'Poppins-Medium'
    }
});