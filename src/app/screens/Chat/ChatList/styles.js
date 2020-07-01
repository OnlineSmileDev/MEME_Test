import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    container: {
        backgroundColor: '#FFFFFC',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        // height: dimensions.fullHeight,
        // backgroundColor: 'red',
        // justifyContent: 'center'
    },
    chatView: {
        width: '100%',
        flex: 10
    },
    newMatchesText: {
        fontSize: '14@s',
        fontFamily: 'Montserrat-Regular',
        color: hexToRgba('#2E2E2E', 0.34),
        padding: '3@s'
    },
    topView: {
        // width: '100%',
        // width: dimensions.fullWidth,
        // height: '100%',
        paddingHorizontal: '20@s',
        // justifyContent: 'space-evenly',
        flex: 2
    },
    topViewScroll: {
        height: '80@s',
        flexDirection: 'row',
        width: dimensions.fullWidth
    },
    topViewText: {
        fontFamily: 'Poppins-Bold',
        fontSize: '18@s',
        fontWeight: '500',
        color: '#617FD2'
    },

});