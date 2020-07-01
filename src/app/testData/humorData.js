import { humorStyleTypes } from '../utils/MemeEnums';
export const humorData = {
    [humorStyleTypes.WORDSMITH]: {
        icon: require('../assets/icons/the_wordsmith.png'),
        title: 'Wordsmith',
        color: '#FFC562',
        caption: 'Witty - Bright',
        body: 'You are witty, clever and enjoy puns, plays on words and all kinds of linguistic gymnastics.'
    },
    [humorStyleTypes.EMPATH]: {
        icon: require('../assets/icons/the_empath.png'),
        title: 'Empath',
        color: '#4ECAC1',
        caption: 'Personable - relatable',
        body: 'You are very personable and relatable. You find situational humor to be hilarious and have no fear of making fun of yourself to lighten mood.'
    },
    [humorStyleTypes.SURREALIST]: {
        icon: require('../assets/icons/the_surrilist.png'),
        title: 'Surrealist',
        color: '#3D9FBC',
        caption: 'outlandish - creative',
        body: 'You relish everything that is ridiculous and absurd. You are not afraid to push envelope or think outside box.'
    },

    [humorStyleTypes.PROVOCATEUR]: {
        icon: require('../assets/icons/the_provocateur.png'),
        title: 'Provocateur',
        color: '#67449E',
        caption: 'adventurous - unrelenting',
        body: 'You love all things offensive and brash. You are willing to go over-the-line and test boundaries to expose true nature of things.'
    },

    [humorStyleTypes.PRANKSTER]: {
        icon: require('../assets/icons/the_prankster.png'),
        title: 'Prankster',
        color: '#F24B59',
        caption: 'wildcard - unpredictable',
        body: 'You gravitate toward physical humor. You are likely more of a risk-taker and do not shy away from danger and you live in moment.'
    },

    [humorStyleTypes.SATIRIST]: {
        icon: require('../assets/icons/the_satirist.png'),
        title: 'Satirist',
        color: '#FF9565',
        caption: 'Personable - relatable',
        body: 'You indulge in world of parody. You are great at critiquing social norms and challenging status quo.'
    },

    [humorStyleTypes.REALIST]: {
        icon: require('../assets/icons/the_realist.png'),
        title: 'Realist',
        color: '#BF3F4A',
        caption: 'outlandish - creative',
        body: 'You see world as it is. You have a dark sense of humor and are not easily offended or afraid of what many would consider to be taboo.'
    }
}