import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';

import { createTarget, deleteTarget } from 'actions/targetActions';
import { TARGETS_MAX } from 'constants/data';
import useGetTargets from 'hooks/useGetTargets';
import strings from 'localization';

const latitudeDelta = 0.05;
const longitudeDelta = 0.05;

const useTargets = (targets, mapCenter, setMapCenter) => {
  const [newTarget, setNewTarget] = useState(null);
  const [createFormVisible, setCreateFormVisible] = useState(false);
  const [selectedTarget, setSelectedTarget] = useState(null);

  const { targetsRequest } = useGetTargets();

  const dispatch = useDispatch();
  const createTargetRequest = useCallback(target => dispatch(createTarget(target)), [dispatch]);
  const deleteTargetRequest = useCallback(target => dispatch(deleteTarget(target)), [dispatch]);

  const changeTargetPosition = e => {
    const { latitude, longitude } = e.nativeEvent?.coordinate || {};
    setMapCenter({ latitude, longitude, latitudeDelta, longitudeDelta });
    setNewTarget({ latitude, longitude });
  };

  const deselectTarget = () => {
    setSelectedTarget(null);
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

  const onCreateTarget = target => {
    createTargetRequest({
      ...target,
      lat: mapCenter.latitude,
      lng: mapCenter.longitude,
    });
  };

  const onSuccess = action => {
    deselectTarget();
    targetsRequest();
    dispatch(action.reset());
  };

  useEffect(() => {
    if (selectedTarget) {
      const { lat: latitude, lng: longitude } = selectedTarget;
      setMapCenter({ latitude, longitude, latitudeDelta, longitudeDelta });
      setNewTarget(null);
    }
  }, [selectedTarget, setMapCenter]);

  const onDeleteTarget = () => {
    deleteTargetRequest(selectedTarget);
  };

  return {
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
  };
};

export default useTargets;
