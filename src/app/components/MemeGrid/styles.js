import { colors, dimensions, fonts, fontSizes } from '../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: dimensions.fullWidth - 20
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: '18@msr',
        color: '#426371',
        marginTop: '10%'
    },
    memeItemView: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    row: {
        marginTop: '3%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        maxWidth: dimensions.fullWidth
    }
});