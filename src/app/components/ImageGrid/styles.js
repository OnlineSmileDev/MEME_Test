import { colors, dimensions, fonts, fontSizes } from '../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    rowContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    row: {
        width: dimensions.fullWidth,
        height: '105@vs',
        flexDirection: 'row',
        justifyContent: 'center'
    }
});