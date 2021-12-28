import React from 'react';
import { SafeAreaView, View } from 'react-native';
import MapView from 'react-native-maps';

import strings from 'localization';
import useGetTargets from 'hooks/useGetTargets';
import useMap from 'hooks/useMap';
import useCreateTarget from 'hooks/useCreateTarget';
import CreateTarget from 'components/CreateTarget';
import EditTarget from 'components/EditTarget';
import NewTarget from 'components/NewTarget';
import Target from 'components/Target';

import styles from './styles';

const MainScreen = () => {
  const { targets, topics } = useGetTargets();
  const { initialRegion, mapCenter, setMapCenter } = useMap();

  const {
    newTarget,
    createFormVisible,
    selectedTarget,
    setSelectedTarget,
    changeTargetPosition,
    deselectTarget,
    showCreateForm,
    onCreateTarget,
    onDeleteTarget,
    onSuccess,
  } = useCreateTarget(targets, mapCenter, setMapCenter);

  return (
    initialRegion && (
      <SafeAreaView style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView
            initialRegion={initialRegion}
            region={mapCenter}
            onPress={deselectTarget}
            onRegionChangeComplete={setMapCenter}
            style={styles.map}>
            {targets &&
              topics &&
              targets.map(({ target }) => {
                const { id, lat: latitude, lng: longitude, topicId } = target;

                return (
                  <Target
                    key={id}
                    coordinate={{ latitude, longitude }}
                    icon={topics[topicId].icon}
                    selectTarget={() => setSelectedTarget(target)}
                    selected={id === selectedTarget?.id}
                  />
                );
              })}
            {newTarget && (
              <NewTarget coordinate={newTarget} changeTargetPosition={changeTargetPosition} />
            )}
          </MapView>
        </View>
        {mapCenter && !selectedTarget && (
          <CreateTarget
            onSuccess={onSuccess}
            createFormVisible={createFormVisible}
            showCreateForm={showCreateForm}
            onCreateTarget={onCreateTarget}
          />
        )}
        {mapCenter && selectedTarget && (
          <EditTarget
            selectedTarget={selectedTarget}
            onDeleteTarget={onDeleteTarget}
            onSuccess={onSuccess}
          />
        )}
      </SafeAreaView>
    )
  );
};

MainScreen.navigationOptions = {
  title: strings.MAIN.title,
};

export default MainScreen;
