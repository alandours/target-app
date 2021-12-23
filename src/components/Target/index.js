import React from 'react';
import { View, Image } from 'react-native';
import { Marker } from 'react-native-maps';
import { shape, number, string } from 'prop-types';

import styles from './styles';

const Target = ({ coordinate, icon }) => (
  <Marker coordinate={coordinate}>
    <View style={styles.markerContainer}>
      {icon && <Image source={{ uri: icon }} style={styles.marker} />}
    </View>
  </Marker>
);

Target.propTypes = {
  coordinate: shape({ latitude: number.isRequired, longitude: number.isRequired }).isRequired,
  icon: string,
};

export default Target;
