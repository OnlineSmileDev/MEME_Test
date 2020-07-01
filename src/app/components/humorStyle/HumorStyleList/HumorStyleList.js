import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import ContentLoader, { Facebook, BulletList } from 'react-content-loader/native';

import HumorStyleLineItem from "../HumorStyleLineItem/HumorStyleLineItem";
import styles from './styles';
import { humorData } from "../../../testData/humorData";

export default class HumorStyleList extends Component {
    // displayLoader = () => {
    //     return (<BulletList />);
    // }
    componentDidUpdate() {
    }
    loadHumorStyleItems = () => {
        let i = 0;
        return (
            <ScrollView style={styles.humorList}>
                {this.props.humorStyle.map(x => {
                    return (<HumorStyleLineItem
                        delay={500} //{i++ * 2000}
                        color={humorData[x.type].color} caption={humorData[x.type].title}
                        percentage={parseInt(x.score.toFixed(0))} key={x.type} />);
                })}
            </ScrollView>
        );
    }
    render() {
        return (
            <>
                {this.loadHumorStyleItems()}
            </>
        );
    }
}