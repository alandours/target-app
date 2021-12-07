import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { string } from 'prop-types';

import styles from './styles';

const SignButton = ({ text, ...props }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity {...props}>
        <Text style={styles.button}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

SignButton.propTypes = {
  text: string.isRequired,
};

export default SignButton;
