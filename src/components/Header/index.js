import React from 'react';
import { View, Text } from 'react-native';

import { APP_NAME } from 'constants/screens';

import styles from './styles';

const Header = () => {
  return (
    <>
      <View style={[styles.circle, styles.yellow]} />
      <View style={[styles.circle, styles.blue]} />
      <Text style={styles.welcome}>{APP_NAME}</Text>
    </>
  );
};

export default Header;
