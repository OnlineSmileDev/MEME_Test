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
import { updateUserMemeItem } from '../../../state/actions/api/memeItemActions';
import ImageIconTypes from '../../../components/common/ImageIcon/ImageIconTypes';
import Share from 'react-native-share';
import Loader from '../../../components/loader/Loader';
import LoaderTypes from '../../../components/loader/LoaderTypes';

const Params = {
    isPreloadComplete: 'isPreloadComplete',
    loadMemesTimer: 'loadMemesTimer'
}
const REGULAR_QUEUE_SIZE = 50;
const CUTOFF_SIZE = 30
const USERLIST_REFRESH_TIMEOUT = 15000;
class RegularMemeResponseScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    componentDidMount() {
        // this.props.updateLastScreen(this.props.user.id, { memeItemId: '' });
        // this.props.fetchUserMemes(this.props.user.id, INIT_QUEUE_SIZE, this.props.memeList, false);
        this.props.startTimer({ name: Params.loadMemesTimer, callbackFn: this.checkAndAddMemesIfNeeded, _this: this, timeout: USERLIST_REFRESH_TIMEOUT });
    }
    componentDidUpdate() {
        if (!this.props[Params.isPreloadComplete] && this.props.memeList.length > 0) {
            // this.props.updateScreenData(Params.memeList, this.props.memeList);
            const _this = this;
            setTimeout(() => { _this.preloadMemes(); }, 0);
            this.props.updateScreenData(Params.isPreloadComplete, true);
        }
    }
    preloadMemes() {
        console.log('preload complete::');
        let uris = [];
        this.props.memeList.forEach((value) => {
            uris.push({ uri: value.mediaLink });
        });
        FastImage.preload(uris);
    }
    checkAndAddMemesIfNeeded = (_this) => {
        if (_this.props.memeList.length < CUTOFF_SIZE) {
            console.log('fetching more memes:: ' + _this.props.memeList.length);
            _this.props.fetchUserMemes(_this.props.user.id, REGULAR_QUEUE_SIZE, _this.props.memeList, false);
            this.props.updateScreenData(Params.isPreloadComplete, false);
        }
    }
    next = (response) => {
        const meme = this.props.memeList[0];
        if (meme) {
            this.props.respondToMeme(meme.id, this.props.user.id, response);
            this.props.removeMemeFromQueue();
            if (response === 'fire') {
                //TODO: Use this later
                // var data = {
                //     id: -1,
                //     memeItemId: meme.id,
                //     profileId: this.props.user.id,
                //     response: response,
                //     mediaLink: meme.mediaLink
                // }
                // console.log(data);
                setTimeout(() => {
                    this.props.fetchFireMemes(this.props.user.id);
                }, 3000);
            }
        }
    }
    getPath = () => {
        if (this.props.memeList.length > 0) {
            const img = this.props.memeList[0];
            if (img) {
                const uri = img.mediaLink;
                // console.log(uri);
                return uri;
            }
            return '';
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TopHeaderBar
                    type={HeaderTypes.textWithRightIcon} text={'The Meme App'}
                    textSize={scale(24)}
                    rightIcon={ImageIconTypes.share.name}
                    rightOnPress={() => { 
                        Share.open({
                            url: this.getPath(),
                            title: 'The Meme App!',
                            subject: 'The Meme App: You got a new Meme!!'
                        }).then(() => {
                            this.props.navigation.goBack();
                        }).catch(() => {

                        });
                    }} />
                <Surface style={styles.surface}>
                    <View>

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
    const commonState = commonStateProps(state, RouteNames.RegularMemeResponse);
    const { memeItems } = state;
    return {
        ...commonState,
        memeList: memeItems.userList,
        [Params.isPreloadComplete]: commonState.thisScreen[Params.isPreloadComplete] ?? false
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.RegularMemeResponse),
        removeMemeFromQueue: () => {
            dispatch(updateUserMemeItem({}));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegularMemeResponseScreen);