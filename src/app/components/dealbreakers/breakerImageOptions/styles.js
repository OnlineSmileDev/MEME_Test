import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    check: {
        position: 'absolute',
        top: '5@s',
        right: '5@s',
        zIndex: 5
    }
});