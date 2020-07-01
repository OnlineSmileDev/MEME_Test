import { colors, dimensions, fonts, fontSizes } from '../../styles/base';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
    paginationStyle: {
        position: 'absolute',
        top: '-85%'
    },
    activeDot: {
        backgroundColor: 'rgba(255,255,255,.77)',
        width: 39,
        height: 6,
        borderRadius: 1,
        marginLeft: 3,
        marginRight: 3,
        marginTop: '20@s',
        marginBottom: 3,
    },
    dot: {
        backgroundColor: 'rgba(255,255,252,.50)',
        width: 39,
        height: 6,
        borderRadius: 1,
        marginLeft: 3,
        marginRight: 3,
        marginTop: '20@s',
        marginBottom: 3,
    },
    wrapper: {
        borderRadius: '30@s',
        backgroundColor: '#FFFFFF',
        // height: '1200@s'
    },
    matchImage: {
        width: '100%',
        height: '100%',
        // minHeight: '600@s', //updated this to change radius
        borderRadius: '30@s',

        // shadowRadius: '10@s',
        // shadowOffset: {
        //     width: '1@msr',
        //     height: '2@msr',
        // },
        // shadowColor: 'rgb(0,0,20)',
        // shadowOpacity: 0.15,
        backgroundColor: '#FFFFFF'
    },
    slide: {
        borderRadius: '30@s',
        // elevation: '6@msr',
        // shadowRadius: '10@s',
        // shadowOffset: {
        //     width: '1@msr',
        //     height: '2@msr',
        // },
        // shadowColor: 'rgb(0,0,20)',
        // shadowOpacity: 0.15,
        width: '100%',
        // minHeight:'600@s',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    name: {
        fontFamily: 'Montserrat-Bold',
        fontSize: '21@msr',
        color: '#FFFFFF',
        position: 'absolute',
        // backgroundColor: hexToRgba('#000000', 0.4),
        left: '6%%',
        top: '6%',
        zIndex: 102
    },
    container: {
        backgroundColor: '#FFFFFF',
        // flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'center',
        paddingHorizontal: '3%',
        height: '440@s', //prev=470
        // borderRadius: '30@s',

    },
    surface: {
        height: '100%',
        // width: 2,
        // borderRadius: '20@msr',
        // elevation: '6@msr',
        // shadowRadius: '10@msr',
        // shadowOffset: {
        //     width: '1@msr',
        //     height: '2@msr',
        // },
        shadowColor: 'rgb(0,0,20)',
        shadowOpacity: 0.15
    }
});