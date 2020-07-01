import { colors, dimensions, fonts, fontSizes } from '../../styles/base';
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters';

export default ScaledSheet.create({
    container: {
        backgroundColor: '#FFFFFC',
        height: dimensions.fullHeight,
        flex: 1
        // paddingBottom: '27%'
        // backgroundColor: 'red',
        // justifyContent: 'center'
    },
    chatView: {
        width: '100%',
        flex: 10
    },
    topView: {
        width: '100%',
        flex: 1,
        // height: '40@s',
        flexDirection: 'row',
        paddingHorizontal: '20@s',
        justifyContent: 'space-between'
    },
    topViewText: {
        fontFamily: 'Poppins-Bold',
        fontSize: '18@s',
        fontWeight: '500',
        color: '#617FD2'
    },
    scrollView: {
        width: dimensions.fullWidth,
        alignItems: 'center',
        // height: '200@s'
        flex: 3
    },
    bottomView: {
        width: '99%',
        alignItems: 'center',
        marginVertical: 0
        // position: 'absolute',
        // bottom: 0,
        // height: '120@s'
    },
    ///
    sendBtn: {
        marginTop: '10@s',
        width: '100%',
        height: '40%',
        borderRadius: 0
    },
    sendBtnText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins-Bold',
        fontSize: '18@s',
        fontWeight: '600',
    },
    shareBtn: {
        width: '100%',
        height: '40%',
        backgroundColor: '#53D2A3',
        borderRadius: 0,
        marginHorizontal: '10@s'

    },
    shareBtnText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins-Bold',
        fontSize: '18@s',
        fontWeight: '600',
    }
});