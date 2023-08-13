import React from 'react';
import Button from './Button';
import ProfileButton from './ProfileButton';
import { View, Text, StyleSheet } from 'react-native';

const PessoaJuridicaScreen = ({ navigation }) => {
  const handleAddProduct = () => {
    navigation.navigate('AddProductScreen');
  };

  const handleProfileScreen = () => {
    navigation.navigate('ProfileScreen');
  };

return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Button title="Adicionar novo produto" onPress={handleAddProduct} />
      <ProfileButton onPress={handleProfileScreen}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PessoaJuridicaScreen;
