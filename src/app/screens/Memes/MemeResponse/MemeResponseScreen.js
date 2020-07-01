import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";
import { scale } from 'react-native-size-matters';
import { Surface } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import HeaderTypes from '../../../components/common/header/HeaderTypes';
import { TopHeaderBar } from '../../../components/common/header/TopHeaderBar';
import RatingBar, { RatingBarType } from '../../../components/memes/RatingBar/RatingBar';
import commonDispatchProps from '../../../state/common/commonDispatchProps';
import RouteNames from '../../../navigation/common/RouteNames';
import commonStateProps from '../../../state/common/commonStateProps';
import { fetchMemeItemBegin } from '../../../state/actions/api/memeItemActions';
import Loader from '../../../components/loader/Loader';
import LoaderTypes from '../../../components/loader/LoaderTypes';
import memeResponseModes from './memeResponseModes';
import { UserDB } from '../../../services/storage';

const Params = {
    currentIndex: 'current_index',
    memeList: 'memeList',
    isPreloadComplete: 'isPreloadComplete'
}
class MemeResponseScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    componentDidMount() {
        if ((this.props.user.id?.length ?? 0) === 0) {
            UserDB.fetchLoggedUser()
                .then(user => {
                    this.props.loadUserFromLocal(user)
                })
                .catch(() => {
                    console.log('failed to load user');
                });
        }
        const currentIndex = parseInt(this.props.route.params?.currentIndex ?? 0);
        this.props.updateScreenData(Params.currentIndex, currentIndex);

        const mode = this.props.route.params?.mode ?? memeResponseModes.Polarizer;

        this.props.updateLastScreen(this.props.user.id, { currentIndex: currentIndex });
        this.props.fetchMemes(mode);
    }
    componentDidUpdate() {
        if (!this.props[Params.isPreloadComplete] && this.props.memeList.length > 0) {
            this.props.updateScreenData(Params.memeList, this.props.memeList);
            this.preloadMemes();
            this.props.updateScreenData(Params.isPreloadComplete, true);
        }
    }
    preloadMemes() {
        let uris = [];
        this.props[Params.memeList].forEach((value) => {
            uris.push({ uri: value.mediaLink });
        });
        FastImage.preload(uris);
    }
    next = (response) => {
        const meme = this.props[Params.memeList][this.props[Params.currentIndex]];
        this.props.respondToMeme(meme.id, this.props.user.id, response);
        if (this.props[Params.currentIndex] + 1 === this.props[Params.memeList].length) {
            if ((this.props.route.params?.mode ?? memeResponseModes.Polarizer) === memeResponseModes.Polarizer) {
                this.props.navigation.navigate(RouteNames.CompletedPolarizers)
            }
            else {
                console.log('Regular Mode ');
            }
        }
        else {
            this.props.updateScreenData(Params.currentIndex, parseInt(this.props[Params.currentIndex]) + 1);
            this.props.updateLastScreen(this.props.user.id, { currentIndex: this.props[Params.currentIndex] });
        }
    }
    getPath = () => {
        if (this.props[Params.memeList].length > 0) {
            const img = this.props[Params.memeList][this.props[Params.currentIndex]];
            if (img) {
                const uri = img.mediaLink;
                // console.log(uri);
                return uri;
            }
            return '';
        }
    }
    getHeader = () => {
        return `${this.props[Params.memeList].length - this.props[Params.currentIndex]} Remaining`;
    }
    render() {
        return (
            <View style={styles.container}>
                <TopHeaderBar type={HeaderTypes.centerTextOnly} text={this.getHeader()} textSize={scale(24)} />
                <Surface style={styles.surface}>
                    <View style={{}}>
                        <FastImage
                            style={styles.image}
                            source={{ uri: this.getPath() }}
                            resizeMode={FastImage.resizeMode.contain} />
                    </View>
                </Surface>
                <View style={styles.ratings}>
                    <RatingBar
                        type={RatingBarType.Narrow}
                        dislikePress={() => { this.next('dislike') }}
                        likePress={() => { this.next('like') }}
                        firePress={() => { this.next('fire') }}
                        showTutorial={parseInt(this.props[Params.currentIndex]) < 3}
                    />
                    <TouchableOpacity onPress={() => this.next('skip')}>
                        <Text style={styles.skip}>Skip</Text>
                    </TouchableOpacity>
                </View>
                <Loader type={LoaderTypes.primaryColor} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.MemeResponse);
    const { memeItems } = state;
    return {
        ...commonState,
        memeList: memeItems.polarizers,
        [Params.memeList]: commonState.thisScreen[Params.memeList] ?? memeItems.polarizers,
        [Params.currentIndex]: commonState.thisScreen[Params.currentIndex] ?? 0,
        [Params.isPreloadComplete]: commonState.thisScreen[Params.isPreloadComplete] ?? false
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.MemeResponse),
        fetchMemes: (mode) => {
            dispatch(fetchMemeItemBegin({ by: mode }));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemeResponseScreen);