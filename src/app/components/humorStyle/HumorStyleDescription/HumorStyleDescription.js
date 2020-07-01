import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { IconButton } from "react-native-paper";
import { verticalScale } from "react-native-size-matters";
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import { humorData } from "../../../testData/humorData";
import HumorStylePotrait from "../humorStylePotrait/HumorStylePotrait";
import humorStylePotraitTypes from "../humorStylePotrait/humorStylePotraitTypes";
import { Code } from "react-content-loader/native";

export default class HumorStyleDescription extends Component {

    constructor(props) {
        super(props);
    }
    loadFirstRow = () => {
        return (
            <>
                {this.props.humorStyle.slice(0, 2).map(x => {
                    return (
                        <HumorStylePotrait
                            delay={1000} //{i++ * 2000}
                            icon={humorData[x.type].icon}
                            title={humorData[x.type].title}
                            color={humorData[x.type].color}
                            caption={humorData[x.type].caption}
                            body={humorData[x.type].body}
                            percentage={parseInt(x.score.toFixed(0))}
                            key={x.type}
                        />
                    );
                })}
            </>
        );
    }

    loadRest = () => {
        return (
            <>
                {this.props.showMoreHumorStyle && this.props.humorStyle.slice(2, 7).map(x => {
                    return (
                        <HumorStylePotrait
                            type={humorStylePotraitTypes.Landscape}
                            delay={100}
                            icon={humorData[x.type].icon}
                            title={humorData[x.type].title}
                            color={humorData[x.type].color}
                            caption={humorData[x.type].caption}
                            body={humorData[x.type].body}
                            percentage={x.score.toFixed(0)}
                            key={x.type}
                        />
                    );
                })}
            </>
        );
    }
    getUpDownArrow = () => {
        return !this.props.showMoreHumorStyle ? 'chevron-down' : 'chevron-up';
    }
    getUpDownText = () => {
        return !this.props.showMoreHumorStyle ? 'See More' : 'See Less';
    }
    getMatchCount = () => {
        return (
            <Animatable.View
                easing="ease-in-out-expo"
                duration={2000}
                delay={2000}
                animation="fadeIn" iterationCount={1} direction="normal" style={styles.bottomView}>
                <View style={styles.moreLess} onStartShouldSetResponder={() => this.props.toggleMoreLess()}>
                    <Text style={styles.moreLessText}>{this.getUpDownText()}</Text>
                    <IconButton
                        icon={this.getUpDownArrow()} size={20}
                        color={'#2C2C2C'}
                        style={{ marginTop: -1 }}
                        onPress={() => this.props.toggleMoreLess()}
                    />
                </View>
                {this.props.matchesCount > 0 && <Text style={styles.matchText}>Based on Your Humor Style,</Text>}
                {this.props.matchesCount > 0 && <Text style={styles.matchTextBold}>We found {this.props.matchesCount} Matches for You!</Text>}

                {this.props.showTitle && <View style={{ height: verticalScale(80), width: '100%' }}></View>}
            </Animatable.View>
        );
    }

    render() {
        if (this.props.humorStyle.length === 0) {
            return (
                <View style={styles.container}>
                    <Code />
                </View>)
        }
        const extraContainerStyle = this.props.showTitle ? {} : { borderWidth: 0 };
        return (
            <View style={{ ...styles.container, ...extraContainerStyle }} >
                {
                    this.props.showTitle &&
                    <View style={styles.top}>
                        <Animatable.Text duration={500} delay={500}
                            animation="fadeIn" iterationCount={2} style={styles.title}>{this.props.firstName} {this.props.lastName}'s Humor Style</Animatable.Text>
                    </View>
                }
                < View style={styles.firstRow}>
                    {this.props.humorStyle.length > 0 && this.loadFirstRow()}
                </View>
                <View style={styles.others}>
                    {this.props.humorStyle.length > 0 && this.loadRest()}
                </View>
                {this.getMatchCount()}
            </View >
        );
    }
}

HumorStyleDescription.defaultProps = {
    firstName: 'Charla',
    lastName: 'Doe',
    showMoreHumorStyle: false,
    showTitle: true,
    toggleMoreLess: () => { },
    matchesCount: 0
}
HumorStyleDescription.propTypes = {
    showTitle: PropTypes.bool.isRequired,
    humorStyle: PropTypes.array.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    showMoreHumorStyle: PropTypes.bool,
    toggleMoreLess: PropTypes.func,
    matchesCount: PropTypes.number
}