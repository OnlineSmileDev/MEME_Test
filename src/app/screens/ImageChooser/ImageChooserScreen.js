import { View, Text } from "react-native";
import React, { Component } from "react";
import PropTypes from 'prop-types'
import commonStateProps from "../../state/common/commonStateProps";
import RouteNames from "../../navigation/common/RouteNames";
import commonDispatchProps from "../../state/common/commonDispatchProps";
import { connect } from "react-redux";
import { TopHeaderBar } from "../../components/common/header/TopHeaderBar";
import HeaderTypes from "../../components/common/header/HeaderTypes";
import ImageIcon from "../../components/common/ImageIcon/ImageIcon";
import ImageIconTypes from "../../components/common/ImageIcon/ImageIconTypes";
import styles from './styles';
import Loader from "../../components/loader/Loader";
import NavButton from "../../components/common/NavButton/NavButton";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import { scale } from "react-native-size-matters";
import NavButtonTypes from "../../components/common/NavButton/NavButtonTypes";
import { storageUploadBegin } from "../../state/actions/api/storageApiActions";
import RNFetchBlob from "rn-fetch-blob";
import { createUserUpdateItem } from "../../services/api/helpers/users/userApiHelper";
import { UserFields } from "../../services/api/helpers/users/userFields";
import { navigateOutWithReset } from "../../navigation/common/NavigationHelper";

const Params = {
    forceUpdate: 'forceUpdate',
    imageList: 'imageList',
    uploadQueue: 'uploadQueue',
    uploadHandler: 'uploadHandler',
    waitingQueue: 'waitingQueue' //DOnt change me!!!! needed in screenReducer
}
class ImageChooserScreen extends Component {
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
    prepImageList = () => {
        const source = this.props.route.params?.source ?? 'onboarding';
        const images = this.props.route.params?.images ?? [];
        if (source === 'user-profile') {
            let flatArray = [];
            images.forEach((value, index) => {
                flatArray.push({
                    isPlaceholder: false,
                    path: value,
                    mime: 'image/jpg',
                    data: '',
                    key: index
                })
            })
            return this.getImageIndex(flatArray);
        }
        else if (source === 'onboarding') {
            // let flatArray = [];
            return this.loadImages(images);
        }
    }
    loadUploadHandler = () => {
        var _this = this;
        const handler = setInterval(() => {
            // console.log('loadUploadHandler <> ' + _this.props[Params.uploadQueue].length);
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
        setTimeout(() => {
            this.props.fetchProfile(this.props.user.id);
        }, 2000);
    }
    componentDidMount() {
        this.props.updateScreenData(Params.imageList, this.prepImageList());
        this.loadUploadHandler();
    }
    componentDidUpdate() {

    }
    loadImages = (images) => {
        let array = [];
        images.forEach((img, index) => {
            const { path, mime, data } = img;

            const _upload = {
                isPlaceholder: false,
                path: path,
                mime: mime,
                data: '',
                key: index,
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
        // this.props.updateScreenData(Params.forceUpdate, ++this.props[Params.forceUpdate]);
        console.log(array);
        console.log(this.getImageIndex(array));
        return this.getImageIndex(array);
    }
    updateImages = (row = null, index = null, value = null) => {
        // console.log(row);
        // console.log(index);
        // console.log(value);
        if (row === null, index === null || value === null) {
            this.props.updateScreenData(Params.imageList, this.loadImages());
        }
        else {
            console.log(`row=${row}, index=${index}`);
            const images = this.props[Params.imageList];
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
            this.props.updateScreenData(Params.imageList, images);
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
    useBackButton = () => {
        const source = this.props.route.params?.source ?? 'onboarding';
        return source !== 'onboarding';
    }
    move = () => {
        navigateOutWithReset(this.props.navigation, RouteNames.BirthdayEdit);
    }
    onDelete = (row, index) => {
        console.log('Deleted: row=' + row + ' index=' + index);
        const img = {
            isPlaceholder: true,
            key: index,
            path: ''
        };
        const images = this.props[Params.imageList];
        // this.addToQueue(img);
        delete img.data;
        images[row][index - 3 * row] = img;
        this.props.updateScreenData(Params.imageList, images);

        let data = createUserUpdateItem(UserFields.DeleteProfilePicture, index.toString());
        this.props.updateUser(this.props.user.id, [data]);
    }
    render() {
        return (
            <>
                {this.useBackButton() && <TopHeaderBar
                    type={HeaderTypes.textWithLeftIcon}
                    text={'The Meme App'}
                    textSize={scale(24)}
                    leftOnPress={() => {
                        this.props.navigation.goBack();
                    }} />}
                {!this.useBackButton() && <TopHeaderBar type={HeaderTypes.centerTextOnly} text={'The Meme App!'} textSize={scale(24)} />}
                <View style={styles.container}>
                    <View style={styles.firstIcon}>
                        <ImageIcon type={ImageIconTypes.camera.name} size={scale(35)} />
                        <Text style={styles.secondaryText}>Use your best photos</Text>
                    </View>
                    <View style={styles.outerView}>
                        <View style={styles.grid}>
                            <ImageGrid
                                onDelete={this.onDelete}
                                images={this.props[Params.imageList]}
                                imageUpdate={this.updateImages}
                                forceUpdate={this.props[Params.forceUpdate]} />
                        </View>
                        {/* <Text style={styles.reorderView}>Drag to reorder</Text> */}
                    </View>
                    <Loader />
                    {!this.useBackButton() && <NavButton type={NavButtonTypes.right} onPress={() => { this.move() }} />}
                </View>
            </>
        )
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
        // array[index].push({
        //     isPlaceholder: false,
        //     path: 'https://picsum.photos/300',
        //     mime: 'image/jpg',
        //     data: '',
        //     key: index
        // })
    });
    return array;
}

ImageChooserScreen.defaultProps = {
    images: initialImages()
}
ImageChooserScreen.propTypes = {
    images: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    const commonState = commonStateProps(state, RouteNames.ImageChooser);
    return {
        ...commonState,
        [Params.forceUpdate]: commonState.thisScreen[Params.forceUpdate] ?? 0,
        [Params.imageList]: commonState.thisScreen[Params.imageList] ?? [],
        [Params.uploadQueue]: commonState.thisScreen[Params.uploadQueue] ?? [],
        [Params.waitingQueue]: commonState.thisScreen[Params.waitingQueue] ?? [],
        [Params.uploadHandler]: commonState.thisScreen[Params.uploadHandler] ?? 0

    }
};

const mapDispatchToProps = dispatch => {
    return {
        ...commonDispatchProps(dispatch, RouteNames.ImageChooser),
        uploadImage: (requestId, profileId, img) => {
            const uploadData = {
                originalName: 'img_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                type: img.mime,
                extension: ".jpg",
                objectId: '',
                itemType: 1,
                userId: profileId,
                requestId: requestId
                // path: img.path
            };

            dispatch(storageUploadBegin(uploadData));
            let data = '';
            RNFetchBlob.fs.readStream(
                img.path,
                'base64',
                4095)
                .then((ifstream) => {
                    ifstream.open()
                    ifstream.onData((chunk) => {
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageChooserScreen);