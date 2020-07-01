import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    container: {
        backgroundColor: hexToRgba('#000000', 0.85)
    },
    contentView: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '95%',
        height: dimensions.fullWidth * 0.75,
        borderRadius: '20@s'
    },
    row: {
        marginTop: '3%',
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        maxWidth: dimensions.fullWidth
    }
});