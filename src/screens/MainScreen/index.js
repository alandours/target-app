import React from 'react';
import { SafeAreaView, View } from 'react-native';
import MapView from 'react-native-maps';

import strings from 'localization';
import useMap from 'hooks/useMap';
import CreateTarget from 'components/CreateTarget';

import styles from './styles';

const MainScreen = () => {
  const { initialRegion } = useMap();

  return (
    initialRegion && (
      <SafeAreaView style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView style={styles.map} region={initialRegion} />
        </View>
        <CreateTarget />
      </SafeAreaView>
    )
  );
};

MainScreen.navigationOptions = {
  title: strings.MAIN.title,
};

export default MainScreen;
