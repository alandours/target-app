import React, { useEffect } from 'react';
import { arrayOf, bool, func, oneOfType, string } from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

const Input = ({ label, value, onChangeText, error, active, touched, createInput, ...props }) => {
  // Register field in the form
  useEffect(() => {
    onChangeText(value, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={[styles.inputContainer, createInput && styles.createInputContainer]}>
      {label && <Text style={[styles.label, createInput && styles.createInputLabel]}>{label}</Text>}
      <View>
        <TextInput
          style={[
            styles.input,
            createInput && styles.createInput,
            active && styles.inputActive,
            touched && !!error && styles.inputError,
          ]}
          value={value}
          onChangeText={onChangeText}
          {...props}
        />
        {touched && !!error && (
          <Text accessibilityLabel="form-error" style={styles.error}>
            {error}
          </Text>
        )}
      </View>
    </View>
  );
};

Input.propTypes = {
  label: string,
  value: string,
  onChangeText: func.isRequired,
  error: oneOfType([arrayOf(string), string]),
  active: bool.isRequired,
  touched: bool.isRequired,
  createInput: bool,
};

export default Input;
