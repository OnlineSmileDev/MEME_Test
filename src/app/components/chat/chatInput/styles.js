import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '5@s'
        // paddingHorizontal:'5@s'
    },
    input: {
        width: '86%',
        marginLeft: '5@s',
        // minHeight: '30@s',
        // maxHeight: '50@s',
        height: '30@s',
        // backgroundColor: 'red',
        borderRadius: '15@s',
        borderWidth: 3,
        borderColor: hexToRgba(colors.blackish, 0.3),
        padding: '15@s',
        // paddingLeft: '40@s',
        color: colors.blackish,
        fontFamily: 'Poppins-Regular',
        fontSize: '14@s'
    },
    cameraIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '10%',
        height: '10%',
        paddingHorizontal: '10@s'
        // position: 'absolute',
        // width: '35@s',
        // height: '35@s',
        // left: '8@s',
        // bottom: '1@s'
    }
});