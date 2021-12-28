import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { bool, func } from 'prop-types';

import strings from 'localization';
import targetIcon from 'assets/icons/target.png';
import TargetForm from 'components/TargetForm';

import styles from './styles';

const CreateTarget = ({ createFormVisible = false, showCreateForm, onCreateTarget, onSuccess }) => (
  <View style={styles.container}>
    {createFormVisible ? (
      <TargetForm onSubmit={onCreateTarget} onSuccess={onSuccess} />
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
  onCreateTarget: func,
  onSuccess: func,
};

export default CreateTarget;
