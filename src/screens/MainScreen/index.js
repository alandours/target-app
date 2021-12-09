import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import strings from 'localization';
import CreateTarget from 'components/CreateTarget';

import styles from './styles';

const MainScreen = () => {
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCurrentPosition({
        latitude,
        longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView style={styles.map} region={currentPosition} />
      </View>
      <CreateTarget />
    </SafeAreaView>
  );
};

MainScreen.navigationOptions = {
  title: strings.MAIN.title,
};

export default MainScreen;
