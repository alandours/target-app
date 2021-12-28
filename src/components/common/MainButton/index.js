import React from 'react';
import { TouchableOpacity, Text, ViewPropTypes } from 'react-native';
import { string } from 'prop-types';

import styles from './styles';

const MainButton = ({ text, buttonStyles, ...props }) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, buttonStyles]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

MainButton.propTypes = {
  buttonStyles: ViewPropTypes.style,
  text: string.isRequired,
};

export default MainButton;
