import { verticalScale, scale } from 'react-native-size-matters';
import BreakerOptions from '../../../../components/dealbreakers/breakerImageOptions/BreakerOptions';

export default {
    drugs: {
        name: 'drugs',
        responseMode: 'tiplet',
        image: require('../../../../assets/images/drugs_image.png'),
        icon: require('../../../../assets/icons/weed_green.png'),
        title: 'Do you use drugs?',
        bottomText: 'How important is it for your match to answer the same?',
        bottomHeight: scale(50),
        options: ['no', 'rarely', 'yes'],
        showBottomButtons: true,
        viewType: BreakerOptions.threeHorizontalOption,
        fieldName: 'dl__use-drugs'
    },
    smoke: {
        name: 'smoke',
        responseMode: 'tiplet',
        image: require('../../../../assets/images/smoke_image.png'),
        icon: require('../../../../assets/icons/weed_green.png'),
        title: 'Do you smoke cigarettes?',
        bottomText: 'How important is it for your match to answer the same?',
        bottomHeight: scale(60),
        showBottomButtons: true,
        options: ['yes', 'no', 'rarely'],
        viewType: BreakerOptions.threeHorizontalOption,
        fieldName: 'dl__smoke'
    },
    politics: {
        name: 'politics',
        responseMode: 'tiplet',
        image: require('../../../../assets/images/politics_image.png'),
        icon: require('../../../../assets/icons/politics_icon.png'),
        title: 'What are your politics?',
        bottomText: 'How important is it for your match to answer the same?',
        bottomHeight: scale(10),
        showBottomButtons: true,
        options: ['liberal', 'conservative', 'centrist', 'other'],
        viewType: BreakerOptions.fourQuadrant,
        fieldName: 'dl__politics'
    },
    kids: {
        name: 'kids',
        responseMode: 'tiplet',
        image: require('../../../../assets/images/kids_image.png'),
        icon: require('../../../../assets/icons/weed_green.png'),
        title: 'Do you want kids?',
        bottomText: 'How important is it for your match to answer the same?',
        bottomHeight: verticalScale(50),
        showBottomButtons: true,
        options: ['yes', 'no'],
        viewType: BreakerOptions.twoHorizontalOption,
        fieldName: 'dl__kids'
    },
    height: {
        name: 'height',
        responseMode: 'tiplet',
        image: require('../../../../assets/images/height_image.png'),
        icon: require('../../../../assets/icons/weed_green.png'),
        title: 'Is height important to you?',
        bottomText: 'How important is it for your match to answer the same?',
        bottomText: 'What’s your preferred height?',
        bottomHeight: verticalScale(50),
        showBottomButtons: false,
        options: ['yes', 'no'],
        viewType: BreakerOptions.twoHorizontalOption,
        fieldName: 'dl__'
    },
    religion: {
        name: 'religion',
        responseMode: 'tiplet',
        image: require('../../../../assets/images/religion_image.png'),
        icon: require('../../../../assets/icons/weed_green.png'),
        title: 'How important is religion?',
        showBottomButtons: false,
        bottomText: '',
        bottomHeight: scale(45),
        options: ['extremely-important', 'somewhat-important', 'not-very-important', 'not-important'],
        viewType: BreakerOptions.fourQuadrant,
        fieldName: 'dl__religion'
    },
    work: {
        name: 'work',
        responseMode: 'tiplet',
        image: require('../../../../assets/images/work_image.png'),
        icon: require('../../../../assets/icons/weed_green.png'),
        title: 'Do you work?',
        bottomText: 'How important is it for your match to answer the same?',
        bottomHeight: scale(20),
        showBottomButtons: true,
        options: ['full-time', 'no', 'part-time', 'student'],
        viewType: BreakerOptions.fourQuadrant,
        fieldName: 'dl__work'
    },
    dealbreakerFinished: {
        name: 'dealbreakerFinished',
        responseMode: 'tiplet',
        image: require('../../../../assets/images/dealbreaker_finished.png'),
        icon: require('../../../../assets/icons/weed_green.png'),
        title: '',
        bottomText: '',
        bottomHeight: scale(20)
    }//dealbreaker_finished
}