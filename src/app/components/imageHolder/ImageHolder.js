import React, { Component } from "react";
import FastImage from 'react-native-fast-image'
import PropTypes from 'prop-types';
import { Image, View } from "react-native";
import { IconButton } from "react-native-paper";
import imagePlaceholder from '../../assets/images/upload_placeholder.png'
import styles from './styles';
import { TouchableOpacity } from "react-native-gesture-handler";
import ImagePicker from 'react-native-image-crop-picker';
import ImageIcon from "../common/ImageIcon/ImageIcon";
import ImageIconTypes from "../common/ImageIcon/ImageIconTypes";
import { scale } from "react-native-size-matters";

export default class ImageHolder extends Component {
    componentDidMount() {
    }
    componentDidUpdate() {
    }
    openPicker = (index) => {
        ImagePicker.openPicker({
            multiple: false,
            includeBase64: false,
            mediaType: 'photo',
            maxFiles: 1,
            forceJpg: true
        }).then(image => {
            const { path, mime, data } = image;

            const _upload = {
                isPlaceholder: false,
                path: path,
                mime: mime,
                // data: data,
                key: index
            };
            this.props.imageUpdate(index, _upload);
        });
    }
    loadReal = () => {
        return (
            <FastImage
                style={styles.image}
                source={{
                    uri: this.props.source,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover} />
        );
    }
    loadPlaceholder = () => {
        return (
            <Image source={imagePlaceholder} style={styles.image} resizeMode='stretch' />
        );
    }

    render() {
        const { isPlaceholder } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() => { this.openPicker(this.props.index) }}>

                {!isPlaceholder && this.props.forceUpdate >= 0 && this.loadReal()}
                {isPlaceholder && this.props.forceUpdate >= 0 && this.loadPlaceholder()}
                {!isPlaceholder && this.props.forceUpdate >= 0 && <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: scale(5),
                        width: scale(20),
                        height: scale(20)
                    }}>
                    <ImageIcon type={ImageIconTypes.cross.name} size={scale(20)} onPress={() => this.props.onDelete(this.props.index)} />
                </View>}
                {/* {this.props.canDelete && <IconButton color='white' icon='times-circle' style={{ ...styles.check }} />} */}
            </TouchableOpacity>
        );
    }
}

ImageHolder.defaultProps = {
    isPlaceholder: true,
    index: 0,
    imageUpdate: (value) => { }
};

ImageHolder.propTypes = {
    isPlaceholder: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    source: PropTypes.string,
    imageUpdate: PropTypes.func.isRequired,
    forceUpdate: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
}