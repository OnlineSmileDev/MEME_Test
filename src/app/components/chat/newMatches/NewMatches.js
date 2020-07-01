import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';
import ChatAvatar from '../../avatar/ChatAvatar/ChatAvatar';

export default NewMatches = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.topHeaderView}>
                <Text style={styles.topHeaderText}>New Matches</Text>
            </View>
            <View style={styles.newMatchesView}>
                {props.items.map((x => (
                    <View style={styles.matchItem}>
                        <ChatAvatar key={x.id} onPress={() => props.onSelect(x.id)} uri={x.uri} />
                    </View>
                )))}
            </View>
        </View>
    )
}

NewMatches.propTypes = {
    items: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
}
NewMatches.defaultProps = {
    items: [],
    onSelect: () => { }
}