import React from 'react';
import { View, StyleSheet } from 'react-native';

const SpacingLine = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default SpacingLine;
