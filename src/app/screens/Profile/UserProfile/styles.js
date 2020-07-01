import { colors, dimensions, fonts, fontSizes } from '../../../styles/base';
import { ScaledSheet, scale } from 'react-native-size-matters';

export default ScaledSheet.create({
    container: {
        backgroundColor: '#FFFFFC',
        flex: 1
    },
    scene: {
        flex: 1,
        backgroundColor: '#FFFFFC'
    },
    tabStyle: {
        backgroundColor: '#FFFFFC',
    },
    activeTabText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: '16@s',
        color: '#51D3A3',
        fontWeight: '500',
    },
    inactiveTabText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: '16@s',
        color: '#98A8AF',
        fontWeight: '500'
    },
    dot: {
        backgroundColor: 'rgba(255,255,255,.77)',
        width: 39,
        height: 6,
        borderRadius: 1,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    activeDot: {
        backgroundColor: 'rgba(255,255,252,.50)',
        width: 39,
        height: 6,
        borderRadius: 1,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    wrapper: {
        borderRadius: '30@msr'
    },
    matchImage: {
        width: 400,
        height: 380,
        borderRadius: '30@msr',
        shadowRadius: '10@msr',
        shadowOffset: {
            width: '1@msr',
            height: '2@msr',
        },
        shadowColor: 'rgb(0,0,20)',
        shadowOpacity: 0.15,
    },
    slide: {
        borderRadius: '30@msr',
        elevation: '6@msr',
        shadowRadius: '10@msr',
        shadowOffset: {
            width: '1@msr',
            height: '2@msr',
        },
        shadowColor: 'rgb(0,0,20)',
        shadowOpacity: 0.15,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#9DD6EB'
    }
});