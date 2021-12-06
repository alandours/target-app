import React from 'react';
import { Image, Text } from 'react-native';
import background from 'assets/images/background.png';

import { APP_NAME } from 'constants/screens';

import styles from './styles';

const Header = () => {
  return (
    <>
      <Image source={background} style={styles.circles} />
      <Text style={styles.welcome}>{APP_NAME}</Text>
    </>
  );
};

export default Header;
