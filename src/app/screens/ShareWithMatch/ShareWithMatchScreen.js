import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { connect } from "react-redux";
import { Text, Surface } from 'react-native-paper';
import { scale } from 'react-native-size-matters';
import styles from './styles';
import mainImage from '../../assets/images/share_image.png';
import { TopHeaderBar } from '../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../components/common/header/HeaderTypes';
import Button from '../../components/common/button/Button';
import ButtonTypes from '../../components/common/button/ButtonTypes';
import DevicePermissions from '../../services/permissions/DevicePermissions';
import Share from 'react-native-share';
import commonStateProps from '../../state/common/commonStateProps';
import RouteNames from '../../navigation/common/RouteNames';
import commonDispatchProps from '../../state/common/commonDispatchProps';
import ImageIconTypes from '../../components/common/ImageIcon/ImageIconTypes';
import ImageIcon from '../../components/common/ImageIcon/ImageIcon';
import ChatList from '../../components/chat/chatList/ChatList';
import { chatListItemMode } from '../../components/chat/chatListItem/ChatListItem';
import { memeDownload, getFileExtFromUri } from '../../services/fs/downloads';
import { GenerateGuid } from '../../utils/stringUtils';
import RNFS from 'react-native-fs';

const Params = {
    recipients: 'recipients',
    shareData: 'shareData'
}

class ShareWithMatchScreen extends Component {
    onDownloadProgress = (data) => {
        // console.log(data);
    }
    updateShareData = (data) => {
        let uri = data.uri;
        const fileName = GenerateGuid() + '.' + getFileExtFromUri(uri);
        this.props.updateScreenData(Params.shareData, { ...data, fileName: fileName });

        memeDownload(uri, fileName, this.onDownloadProgress);
    }
    componentDidMount() {
        this.props.fetchChatSummary(this.props.user.id);
        const data = this.props.route.params?.data ?? null;
        if (data) {
            this.updateShareData(data);
        }

    }
    componentDidUpdate(prevProps) {
        const prev_data = prevProps?.route?.params?.data ?? null;
        if (prev_data && prev_data !== this.props.route.params?.data) {
            this.updateShareData(this.props.route.params.data);
        }
    }
    send = () => {

    }
    share = () => {
        console.log(this.props[Params.shareData]);
        const url = RNFS.TemporaryDirectoryPath + '/' + this.props[Params.shareData].fileName;
        console.log('url: ' + url);
        DevicePermissions.request.contactPermission();
        Share.open({
            url: url,
            title: 'The Meme App!',
            subject: 'The Meme App: You got a new Meme!!'
        }).then(() => {
            this.props.navigation.goBack();
        }).catch(() => {

        });
    }
    toggleSelection = (matchId) => {
        let arr = this.props[Params.recipients];
        var index = arr.indexOf(matchId);
        if (index >= 0) {
            arr.splice(index, 1);
        }
        else {
            arr.push(matchId);
        }
        this.props.updateScreenData(Params.recipients, arr);
    }
    render() {
        return (
            <>
                <TopHeaderBar
                    type={HeaderTypes.textWithIcons}
                    text={'The Meme App'}
                    textSize={scale(24)}
                    leftOnPress={() => this.props.navigation.goBack()}
                    rightIcon={ImageIconTypes.share.name} />
                <View style={styles.container}>
                    <View style={styles.topView}>
                        <Text style={styles.topViewText}>Send to a Match</Text>
                        <ImageIcon type={ImageIconTypes.cross.name} />
                    </View>
                    <View style={styles.chatView}>
                        <ChatList
                            selectList={this.props[Params.recipients]}
                            onSelected={this.toggleSelection}
                            chats={this.props.chatListSummary}
                            chatListItemMode={chatListItemMode.share} />
                    </View>
                    <View style={styles.scrollView}>
                        <View style={styles.bottomView}>
                            <Button
                                type={ButtonTypes.Facebook}
                                text={'SEND'}
                                textStyle={styles.sendBtnText}
                                buttonStyle={styles.sendBtn}
                                onPress={this.send}
                            />
                            <Button
                                type={ButtonTypes.Generic}
                                text={'Share with a Friend'}
                                textStyle={styles.shareBtnText}
                                buttonStyle={styles.shareBtn}
                                onPress={this.share}
                            />
                        </View>
                    </View>
                </View>
            </>
        )
    }
}


ShareWithMatchScreen.propTypes = {

}
ShareWithMatchScreen.defaultProps = {

}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.ShareWithMatch);
    const { chats } = state;
    return {
        ...commonState,
        chatListSummary: chats.chatListSummary,
        [Params.recipients]: commonState.thisScreen[Params.recipients] ?? [],
        [Params.shareData]: commonState.thisScreen[Params.shareData] ?? {},
    }
};

const mapDispatchToProps = dispatch => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.ShareWithMatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShareWithMatchScreen);