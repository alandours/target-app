import { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';

const latitudeDelta = 0.05;
const longitudeDelta = 0.05;

const useMap = () => {
  const [initialRegion, setInitialRegion] = useState(null);
  const [mapCenter, setMapCenter] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      const initialCoords = {
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta,
      };

      setInitialRegion(initialCoords);
      setMapCenter(initialCoords);
    });
  }, []);

  return {
    initialRegion,
    mapCenter,
    setMapCenter,
  };
};

export default useMap;
