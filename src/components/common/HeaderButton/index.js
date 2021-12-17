import { func, number } from 'prop-types';
import React from 'react';
import { TouchableOpacity, Image, ViewPropTypes } from 'react-native';

import styles from './styles';

const HeaderButton = ({ icon, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

HeaderButton.propTypes = {
  icon: number.isRequired,
  onPress: func.isRequired,
  style: ViewPropTypes.style,
};

export default HeaderButton;
