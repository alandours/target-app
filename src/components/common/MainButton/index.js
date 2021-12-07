import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { string } from 'prop-types';

import styles from './styles';

const MainButton = ({ text, ...props }) => {
  return (
    <TouchableOpacity {...props} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

MainButton.propTypes = {
  text: string.isRequired,
};

export default MainButton;
