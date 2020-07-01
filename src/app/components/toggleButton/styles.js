import { colors, dimensions, fonts } from '../../styles/base';
import { ScaledSheet, scale } from 'react-native-size-matters';

export default ScaledSheet.create({
    gender_button: {
        backgroundColor: colors.primary,
        height: scale(38),
        width: scale(110),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(19),
        marginTop: scale(5),
        marginHorizontal: scale(3)
    },
    gender_text: {
        fontSize: scale(14),
        fontFamily: fonts.poppinsSemiBold,
        color: colors.white
    }
});
