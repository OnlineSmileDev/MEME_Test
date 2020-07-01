import React from "react";
import { View, Text } from "react-native";
import PropTypes from 'prop-types';
import styles from './styles';
import { DoubleSlider, SingleSlider } from "../common/doubleSlider/DoubleSlider";
import { scale } from "react-native-size-matters";
import { fromHeightString } from "../../utils/dateUtils";

export default ProfilePreference = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Preferences</Text>
            <View style={{ marginTop: scale(40) }}>
                <View style={styles.textCenter}>
                    <Text style={styles.secondaryText}>Age Range</Text>
                </View>
                <View style={{ ...styles.bday, marginBottom: scale(100) }}>
                    <DoubleSlider
                        fetchValue={(val, submit) => { props.updateAgeRange(val, submit) }}
                        min={18}
                        max={69}
                        values={props.ageValues}
                        currentLeftValue={props.ageValues[0]}
                        currentRightValue={props.ageValues[1]} />

                </View>
            </View>

            <View style={{ marginTop: scale(-80) }}>
                <View style={styles.textCenter}>
                    <Text style={styles.secondaryText}>Distance Range</Text>
                </View>
                <View style={{ ...styles.bday }}>
                    <SingleSlider
                        fetchValue={(val, submit) => { props.updateDistanceRange(val, submit) }}
                        min={0}
                        max={100}
                        values={props.distanceValues}
                        currentValue={props.distanceValues[0]}
                    // currentRightValue={this.props[Params.distanceRange][1]}
                    />
                </View>
            </View>

            <View style={{ marginTop: 1 }}>
                <View style={styles.textCenter}>
                    <Text style={styles.secondaryText}>Height</Text>
                </View>
                <View style={{ ...styles.bday }}>
                    <DoubleSlider
                        fetchValue={(val, submit) => { props.updateHeightRange(val, submit) }}
                        min={fromHeightString('4\'0"')}
                        max={fromHeightString('7\'11"')}
                        isHeight
                        values={props.heightValues}
                        currentLeftValue={props.heightValues[0]}
                        currentRightValue={props.heightValues[1]} />
                </View>
            </View>
        </View>
    )
}



ProfilePreference.PropTypes = {
    updateAgeRange: PropTypes.func.isRequired,
    updateDistanceRange: PropTypes.func.isRequired,
    distanceValues: PropTypes.array.isRequired,
    ageValues: PropTypes.array.isRequired,
    heightValues: PropTypes.array.isRequired
}
ProfilePreference.defaultProps = {
    updateAgeRange: (val) => { },
    updateDistanceRange: (val) => { },
    updateHeightRange: (val) => { },
    ageValues: [18, 56],
    distanceValues: [10],
    heightValues: [fromHeightString('4\'11"'), fromHeightString('7\'11"')]
}