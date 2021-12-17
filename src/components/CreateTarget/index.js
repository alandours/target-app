import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import strings from 'localization';
import targetIcon from 'assets/icons/target.png';

import styles from './styles';

const CreateTarget = () => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Image source={targetIcon} style={styles.targetIcon} />
      <Text style={styles.createTarget}>{strings.TARGET.create}</Text>
    </TouchableOpacity>
  </View>
);

export default CreateTarget;
