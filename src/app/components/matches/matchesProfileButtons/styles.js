import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    profileBtns: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: '-10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        // zIndex:-100
    },
    memestry: {
        width: '96@s',
        height: '96@s',
        borderRadius: '48@s',
        borderColor: 'rgba(255,255,254,1)',
        borderWidth: '5@s',
        backgroundColor: colors.primary,


    },
    memeScore: {
        position: 'absolute',
        top: '20@s',
        left: '21@s',
        fontSize: '24@s',
        fontFamily: 'Montserrat-Light',
        color: '#FFFFFF'
    },
    memestryText: {
        fontFamily: 'Poppins-Regular',
        fontSize: '11@msr',
        color: 'white',
        position: 'absolute',
        top: '45@s',
        left: '17@s',
    },
});