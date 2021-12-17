import { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';

const latitudeDelta = 0.05;
const longitudeDelta = 0.05;

const useMap = () => {
  const [initialRegion, setInitialRegion] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      const initialCoords = {
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta,
      };

      setInitialRegion(initialCoords);
    });
  }, []);

  return { initialRegion };
};

export default useMap;
