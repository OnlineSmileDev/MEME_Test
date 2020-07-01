import { colors, dimensions, fonts, fontSizes } from '../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../utils/colorUtils';

export default ScaledSheet.create({
    container: {
        // flex: 1,
        width: dimensions.fullWidth,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        borderTopWidth: 2,
        borderTopColor: hexToRgba('#707070', 0.21),
        height: '200@s'
    },
    listItemText: {
        color: '#2A2A2A',
        fontFamily: 'Poppins-Medium',
        fontSize: '14@s',
        fontWeight: '500',
        alignSelf: 'center',
    }
});