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
    close: {
        position: 'absolute',
        top: '-60@s',
        left: '1@s',
        minWidth: '30@s',
        minHeight: '30@s'
    },
    image: {
        width: dimensions.fullWidth * 0.90,
        height: dimensions.fullWidth * 0.90,
        borderRadius: '20@s'
    },
    row: {
        marginTop: '3%',
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',

        maxWidth: dimensions.fullWidth
    },
    item: {
        height: '105@vs',
    }
});