import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: colors.primary,
        // justifyContent: 'center'
    },
    topView: {
        alignItems: 'center',
        marginTop: '190@s',
        width: '50%',
        height: '150@s'
    },
    topText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 48,
        color: colors.white
    },
    subText: {
        fontFamily: 'Poppins-Light',
        fontSize: 16,
        textAlign: 'center',
        alignSelf: 'center',
        color: colors.white,
        fontWeight:'400'
    },
    avatar: {
        marginTop: '10%'
    },
    viewProfileBtn: {
        marginTop: '10@s',
        width: '200@s',
        height: '40@s'
    },
    viewProfileBtnText: {

    },
    moreMemesBtn: {
        width: '200@s',
        height: '40@s'

    },
    moreMemesBtnText: {

    }
});