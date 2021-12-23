import React from 'react';
import { View, Image } from 'react-native';
import { Marker } from 'react-native-maps';
import { shape, number, func } from 'prop-types';

import targetMarker from 'assets/images/target-marker.png';
import targetMarkerCircle from 'assets/images/target-marker-circle.png';

import styles from './styles';

const NewTarget = ({ coordinate, changeTargetPosition }) => (
  <Marker
    draggable
    coordinate={coordinate}
    onDragEnd={changeTargetPosition}
    onPress={e => e.stopPropagation()}>
    <View style={styles.markerContainer}>
      <Image source={targetMarkerCircle} style={styles.markerCircle} />
      <Image source={targetMarker} style={styles.marker} />
    </View>
  </Marker>
);

NewTarget.propTypes = {
  coordinate: shape({ latitude: number, longitude: number }).isRequired,
  changeTargetPosition: func,
};

export default NewTarget;
