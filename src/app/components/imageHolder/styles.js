import { colors, dimensions, fonts, fontSizes } from '../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    container: {
        width: '108@s',
        height: '105@vs',
        borderRadius: '20@msr'
    },
    image: {
        width: '104@s',
        height: '99@vs',
        borderRadius: '14@msr',
        borderWidth: 1,
        borderColor: 'white',
    },
    check: {
        position: 'absolute',
        top: '-11@vs',
        right: 0,
        bottom: 0,
        left: '67@vs',
        zIndex: 2
    }
});