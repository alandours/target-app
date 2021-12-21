import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';

import { createTarget } from 'actions/targetActions';
import { TARGETS_MAX } from 'constants/data';
import useGetTargets from 'hooks/useGetTargets';
import strings from 'localization';

const latitudeDelta = 0.05;
const longitudeDelta = 0.05;

const useCreateTarget = (targets, mapCenter, setMapCenter) => {
  const [newTarget, setNewTarget] = useState(null);
  const [createFormVisible, setCreateFormVisible] = useState(false);

  const { targetsRequest } = useGetTargets();

  const dispatch = useDispatch();
  const createTargetRequest = useCallback(target => dispatch(createTarget(target)), [dispatch]);

  const changeTargetPosition = e => {
    const { latitude, longitude } = e.nativeEvent?.coordinate;
    setMapCenter({ latitude, longitude, latitudeDelta, longitudeDelta });
    setNewTarget({ latitude, longitude });
  };

  const deselectTarget = () => {
    setNewTarget(null);
    setCreateFormVisible(false);
  };

  const showCreateForm = () => {
    if (targets.length >= TARGETS_MAX) {
      Alert.alert(strings.TARGET.length);
    } else {
      setNewTarget(mapCenter);
      setCreateFormVisible(true);
    }
  };

  const submitTarget = target => {
    createTargetRequest({
      ...target,
      lat: mapCenter.latitude,
      lng: mapCenter.longitude,
    });
  };

  const onCreateSuccess = () => {
    deselectTarget();
    targetsRequest();
    dispatch(createTarget.reset());
  };

  return {
    newTarget,
    createFormVisible,
    changeTargetPosition,
    deselectTarget,
    showCreateForm,
    submitTarget,
    onCreateSuccess,
  };
};

export default useCreateTarget;
