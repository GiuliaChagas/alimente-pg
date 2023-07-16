import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import Button from './Button';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Header />
      <Button title="Login" />
      <Button title="Registro" onPress={handleRegisterPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WelcomeScreen;
