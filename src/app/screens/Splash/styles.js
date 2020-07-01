import { colors, dimensions } from '../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    },
    logo: {
        height: dimensions.fullWidth * 0.50,
        width: dimensions.fullWidth * 0.50
    },
});
