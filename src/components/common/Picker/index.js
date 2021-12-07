import React from 'react';
import { arrayOf, bool, oneOfType, string, shape } from 'prop-types';
import { View, Text } from 'react-native';
import RNPickerModule from 'react-native-picker-select';

import styles from './styles';

const Picker = ({ label, items, error, active, touched, testID, ...props }) => {
  return (
    <View style={styles.pickerContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNPickerModule
        textInputProps={{
          style: [styles.picker, touched && !!error && styles.pickerError],
        }}
        useNativeAndroidPickerStyle={false}
        items={items}
        Icon={() => null}
        {...props}
      />
      {touched && !!error && <Text accessibilityLabel="form-error">{error}</Text>}
    </View>
  );
};

Picker.propTypes = {
  label: string,
  items: arrayOf(shape({ label: string, value: string })),
  error: oneOfType([arrayOf(string), string]),
  active: bool.isRequired,
  touched: bool.isRequired,
  testID: string,
};

export default Picker;
