import React from 'react';
import { string, func, shape } from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const Topic = ({ topic, handlePress }) => {
  const { label, icon } = topic;
  return (
    <View style={styles.topic}>
      <TouchableOpacity style={styles.button} onPress={() => handlePress(topic)}>
        <Image style={styles.icon} source={{ uri: icon }} />
        <Text style={styles.name}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

Topic.propTypes = {
  topic: shape({ label: string, icon: string }).isRequired,
  handlePress: func.isRequired,
};

export default Topic;
