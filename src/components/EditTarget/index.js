import React from 'react';
import { View } from 'react-native';
import { shape, number, string, func } from 'prop-types';

import TargetForm from 'components/TargetForm';

import styles from './styles';

const EditTarget = ({ selectedTarget, onDeleteTarget, onSuccess }) => {
  return (
    <View style={styles.container}>
      <TargetForm
        selectedTarget={selectedTarget}
        onDeleteTarget={onDeleteTarget}
        onSuccess={onSuccess}
        onSubmit={() => {}}
      />
    </View>
  );
};

EditTarget.propTypes = {
  selectedTarget: shape({ id: number, title: string, radius: number, topicId: number }),
  onDeleteTarget: func,
  onSuccess: func,
};

export default EditTarget;
