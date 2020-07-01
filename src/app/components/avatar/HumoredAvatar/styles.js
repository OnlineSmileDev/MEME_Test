import { colors, dimensions, fonts } from '../../../styles/base';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { hexToRgba } from '../../../utils/colorUtils';

export default ScaledSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor:hexToRgba('#000000', 0.16),
    },
    pie: {
        // position: 'absolute',
        // right: '12.5%',
        // top: '10%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100//
    }
});