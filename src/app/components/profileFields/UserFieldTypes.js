import { ProfileFieldWithIconTypes } from "./profileFieldWithIcon/profileFieldWithIconTypes";
import ImageIconTypes from "../common/ImageIcon/ImageIconTypes";

export default {
    Work: {
        name: 'work',
        type: ProfileFieldWithIconTypes.SingleValue,
        icon: ImageIconTypes.work.name
    },
    School: {
        name: 'school',
        type: ProfileFieldWithIconTypes.SingleValue,
        icon: ImageIconTypes.school.name
    },
    Politics: {
        name: 'politics',
        type: ProfileFieldWithIconTypes.SingleValue,
        icon: ImageIconTypes.politics.name
    },
    Height: {
        name: 'height',
        type: ProfileFieldWithIconTypes.SingleValue,
        icon: ImageIconTypes.height.name
    },
    Alcohol: {
        name: 'alcohol',
        type: ProfileFieldWithIconTypes.SingleValue,
        icon: ImageIconTypes.alcohol.name
    },
    DesiredInterest: {
        name: 'desiredinterest',
        type: ProfileFieldWithIconTypes.MultiValue,
        icon: ImageIconTypes.binoculars.name
    },
    Marijuana: {
        name: 'marijuana',
        type: ProfileFieldWithIconTypes.SingleValue,
        icon: ImageIconTypes.marijuana.name
    },
    Drugs: {
        name: 'drugs',
        type: ProfileFieldWithIconTypes.SingleValue,
        icon: ImageIconTypes.pill.name
    },
}