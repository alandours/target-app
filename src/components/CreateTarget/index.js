import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { bool, func } from 'prop-types';

import strings from 'localization';
import targetIcon from 'assets/icons/target.png';
import TargetForm from 'components/TargetForm';

import styles from './styles';

const CreateTarget = ({
  createFormVisible = false,
  showCreateForm,
  submitTarget,
  onCreateSuccess,
}) => (
  <View style={styles.container}>
    {createFormVisible ? (
      <TargetForm onSubmit={submitTarget} onCreateSuccess={onCreateSuccess} />
    ) : (
      <TouchableOpacity onPress={showCreateForm}>
        <Image source={targetIcon} style={styles.targetIcon} />
        <Text style={styles.createTarget}>{strings.TARGET.create}</Text>
      </TouchableOpacity>
    )}
  </View>
);

CreateTarget.propTypes = {
  createFormVisible: bool,
  showCreateForm: func,
  submitTarget: func,
  onCreateSuccess: func,
};

export default CreateTarget;
