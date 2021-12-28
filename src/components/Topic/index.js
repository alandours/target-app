import React from 'react';
import { string, func, shape } from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const Topic = ({ topic: { icon, label }, handlePress }) => (
  <View style={styles.topic}>
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Image style={styles.icon} source={{ uri: icon }} />
      <Text style={styles.name}>{label}</Text>
    </TouchableOpacity>
  </View>
);

Topic.propTypes = {
  topic: shape({ label: string, icon: string }).isRequired,
  handlePress: func.isRequired,
};

export default Topic;
