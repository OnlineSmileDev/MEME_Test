import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import ImageHolder from '../imageHolder/ImageHolder';

/**
 img format {isPlaceholder, path, key}
 * */

export default class ImageGrid extends Component {
    static navigationOptions = {
        header: null
    };
    componentDidMount() {
    }
    componentDidUpdate() {
    }
    imageUpdate = (row, index, value) => {
        this.props.imageUpdate(row, index, value);
    }
    getRow = (value, k) => {
        return (
            <View style={styles.row} key={k}>
                <ImageHolder isPlaceholder={value[0].isPlaceholder} index={value[0].key} source={value[0].path} imageUpdate={(index, value) => this.imageUpdate(k, index, value)} forceUpdate={this.props.forceUpdate} onDelete={(index) => this.props.onDelete(k, index)} />
                <ImageHolder isPlaceholder={value[1].isPlaceholder} index={value[1].key} source={value[1].path} imageUpdate={(index, value) => this.imageUpdate(k, index, value)} forceUpdate={this.props.forceUpdate} onDelete={(index) => this.props.onDelete(k, index)} />
                <ImageHolder isPlaceholder={value[2].isPlaceholder} index={value[2].key} source={value[2].path} imageUpdate={(index, value) => this.imageUpdate(k, index, value)} forceUpdate={this.props.forceUpdate} onDelete={(index) => this.props.onDelete(k, index)} />
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    {this.props.images.map((value, i) => {
                        return this.getRow(value, i);
                    })}
                </View>
            </View>
        );
    }
}
ImageGrid.defaultProps = {
}
ImageGrid.propTypes = {
    images: PropTypes.array.isRequired,
    imageUpdate: PropTypes.func.isRequired,
    forceUpdate: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
};