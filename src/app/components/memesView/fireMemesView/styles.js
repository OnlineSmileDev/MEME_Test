import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    container: {
        marginTop: '40@s',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: dimensions.fullWidth,
        minHeight: '100@s'
    },
    title: {
        marginBottom: '5%',
        fontFamily: 'Montserrat-Bold',
        fontSize: '18@msr',
        color: '#426371'
    }
});