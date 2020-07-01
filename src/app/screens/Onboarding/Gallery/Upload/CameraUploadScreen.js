import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";
import { scale } from 'react-native-size-matters';
import styles from './styles';

import ImageIconTypes from '../../../../components/common/ImageIcon/ImageIconTypes';
import { TopHeaderBar } from '../../../../components/common/header/TopHeaderBar';
import HeaderTypes from '../../../../components/common/header/HeaderTypes';
import ImageIcon from '../../../../components/common/ImageIcon/ImageIcon';
import NavButton from '../../../../components/common/NavButton/NavButton';
import NavButtonTypes from '../../../../components/common/NavButton/NavButtonTypes';
import ImageGrid from '../../../../components/ImageGrid/ImageGrid';
import commonDispatchProps from '../../../../state/common/commonDispatchProps';
import RouteNames from '../../../../navigation/common/RouteNames';
import commonStateProps from '../../../../state/common/commonStateProps';
import { navigateOutWithReset } from '../../../../navigation/common/NavigationHelper';
import { storageUploadBegin } from '../../../../state/actions/api/storageApiActions';
import Loader from '../../../../components/loader/Loader';
import { UserFields } from '../../../../services/api/helpers/users/userFields';
import { createUserUpdateItem } from '../../../../services/api/helpers/users/userApiHelper';
import { localImageToBase64 } from '../../../../services/fs/downloads';
import RNFetchBlob from 'rn-fetch-blob';

const Params = {
    images: 'images',
    uploadQueue: 'uploadQueue',
    forceUpdate: 'forceUpdate',
    uploadHandler: 'uploadHandler',
    waitingQueue: 'waitingQueue' //DOnt change me!!!! needed in screenReducer
};

class CameraUploadScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    loadImages = () => {
        const images = this.props.route.params.images ?? [];
        let array = [];
        images.forEach((img, index) => {
            const { path, mime, data } = img;

            const _upload = {
                isPlaceholder: false,
                path: path,
                mime: mime,
                data: data,
                key: index
            };
            this.addToQueue(_upload);

            array.push({
                isPlaceholder: false,
                path: path,
                mime: mime,
                key: index
            });
            // console.log('Name: ' + img.filename);
        })
        // console.log(array);
        // console.log(this.getImageIndex(array));
        return this.getImageIndex(array);
    }
    getImageIndex = (array) => {
        if (array.length < 6) {
            for (let i = array.length; i < 6; ++i) {
                array.push({
                    isPlaceholder: true,
                    key: i,
                    path: ''
                })
            }
        }
        let i, j, chunk = 3;
        let temparray = [];
        for (i = 0, j = array.length; i < j; i += chunk) {
            temparray.push(array.slice(i, i + chunk));
        }
        return temparray;
    }
    updateImages = (row = null, index = null, value = null) => {
        if (row === null, index === null || value === null) {
            this.props.updateScreenData(Params.images, this.loadImages());
        }
        else {
            console.log(`row=${row}, index=${index}`);
            const images = this.props[Params.images];
            const img = {
                isPlaceholder: false,
                path: value.path,
                mime: value.mime,
                data: value.data,
                key: index
            };
            this.addToQueue(img);

            delete img.data;
            images[row][index - 3 * row] = img;
            this.props.updateScreenData(Params.images, images);
        }
        this.props.updateScreenData(Params.forceUpdate, ++this.props[Params.forceUpdate]);
    }
    addToQueue = (image) => {
        let item = this.props[Params.uploadQueue];
        item.push({
            profileId: this.props.user.id,
            isUploaded: false,
            image: image
        });
        this.props.updateScreenData(Params.uploadQueue, item);
    }
    componentDidMount() {
        this.props.updateLastScreen(this.props.user.id);
        this.updateImages();
        this.loadUploadHandler();

    }
    loadUploadHandler = () => {
        var _this = this;
        const handler = setInterval(() => {
            // console.log('handler <> ' + _this.props[Params.uploadQueue].length);
            if (_this.props[Params.uploadQueue].length > 0) {
                let image = _this.props[Params.uploadQueue].shift().image;
                const requestId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                let waitingQ = this.props[Params.waitingQueue];
                waitingQ.push({
                    requestId: requestId,
                    image: {
                        index: image.key
                    },
                    isComplete: false,
                    isUpdated: false
                })
                this.props.updateScreenData(Params.waitingQueue, waitingQ);
                _this.props.uploadImage(requestId, _this.props.user.id, image);
            }
            let waitQ = _this.props[Params.waitingQueue];
            if (waitQ.length > 0) {
                let index = 0;
                let _completed = waitQ.find((val, ind) => {
                    index = ind;
                    return val.isComplete && !val.isUpdated;
                });
                if (_completed) {
                    waitQ[index].isUpdated = true;
                    this.updateProfilePicture(_completed.image);
                    this.props.updateScreenData(Params.waitingQueue, waitQ);
                }
            }
        }, 3000);
        this.props.updateScreenData(Params.uploadHandler, handler);
    }
    updateProfilePicture = (item) => {
        let data = createUserUpdateItem(UserFields.ProfilePicture, JSON.stringify({
            mediaLink: item.mediaLink,
            index: item.index,
            storageId: item.objectId,
            userId: parseInt(this.props.user.id)
        }));
        this.props.updateUser(this.props.user.id, [data]);
    }
    componentDidUpdate() {
        // console.log('MAIN UPDATED');
    }
    move = () => {
        navigateOutWithReset(this.props.navigation, RouteNames.BirthdayEdit);
    }
    render() {
        return (
            <>
                <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'The Meme App'} textSize={scale(24)} />
                <View style={styles.container}>
                    <View style={styles.firstIcon}>
                        <ImageIcon type={ImageIconTypes.camera.name} size={scale(35)} />
                        <Text style={styles.secondaryText}>Use your best photos</Text>
                    </View>
                    <View style={styles.outerView}>
                        <View style={styles.grid}>
                            <ImageGrid images={this.props[Params.images]} imageUpdate={this.updateImages} forceUpdate={this.props[Params.forceUpdate]} />
                        </View>
                        {/* <Text style={styles.reorderView}>Drag to reorder</Text> */}
                    </View>
                    <Loader />
                    <NavButton type={NavButtonTypes.right} onPress={() => { this.move() }} />
                </View>
            </>
        );
    }
}

const initialImages = () => {
    let array = [[], []];
    let val = 0;
    array.forEach((item, index) => {
        for (let i = 0; i < 3; ++i) {
            array[index].push({
                isPlaceholder: true,
                key: val++,
                path: ''
            });
        }
    });
    return array;
}
const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.CameraUpload);
    return {
        ...commonState,
        [Params.images]: commonState.thisScreen[Params.images] ?? initialImages(),
        [Params.forceUpdate]: commonState.thisScreen[Params.forceUpdate] ?? 0,
        [Params.uploadQueue]: commonState.thisScreen[Params.uploadQueue] ?? [],
        [Params.waitingQueue]: commonState.thisScreen[Params.waitingQueue] ?? [],
        [Params.uploadHandler]: commonState.thisScreen[Params.uploadHandler] ?? 0
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.CameraUpload),
        uploadImage: (requestId, profileId, img) => {
            console.log('**************************');
            console.log(img.path);
            console.log('**************************');
            const uploadData = {
                originalName: 'img_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                type: img.mime,
                extension: ".jpg",
                objectId: '',
                itemType: 1,
                userId: profileId,
                requestId: requestId
            };
            if (img.data) {
                setTimeout(() => {
                    uploadData.content = img.data;
                    dispatch(storageUploadBegin(uploadData));
                }, 10);
            }
            else if (img.path) {
                let data = '';
                RNFetchBlob.fs.readStream(
                    // file path
                    img.path,
                    // encoding, should be one of `base64`, `utf8`, `ascii`
                    'base64',
                    // (optional) buffer size, default to 4096 (4095 for BASE64 encoded data)
                    // when reading file in BASE64 encoding, buffer size must be multiples of 3.
                    4095)
                    .then((ifstream) => {
                        ifstream.open()
                        ifstream.onData((chunk) => {
                            // when encoding is `ascii`, chunk will be an array contains numbers
                            // otherwise it will be a string
                            data += chunk
                        })
                        ifstream.onError((err) => {
                            console.log('oops', err)
                        })
                        ifstream.onEnd(() => {
                            setTimeout(() => {
                                uploadData.content = data;
                                dispatch(storageUploadBegin(uploadData));
                            }, 10);
                        })
                    })
            }

        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CameraUploadScreen);