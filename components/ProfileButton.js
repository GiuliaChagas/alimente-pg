import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ProfileButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Perfil</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    position: 'absolute',
    top: 10,
    right: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileButton;
