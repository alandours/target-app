import React from 'react';
import { View, Image } from 'react-native';
import { Marker } from 'react-native-maps';
import { shape, number, string, func, bool } from 'prop-types';

import styles from './styles';

const Target = ({ coordinate, icon, selectTarget, selected }) => {
  const onSelectTarget = e => {
    selectTarget();
    e.stopPropagation();
  };

  return (
    <Marker coordinate={coordinate} onPress={onSelectTarget}>
      <View style={[styles.markerContainer, selected && styles.markerSelected]}>
        {icon && <Image source={{ uri: icon }} style={styles.marker} />}
      </View>
    </Marker>
  );
};

Target.propTypes = {
  coordinate: shape({ latitude: number.isRequired, longitude: number.isRequired }).isRequired,
  icon: string,
  selectTarget: func,
  selected: bool,
};

export default Target;
