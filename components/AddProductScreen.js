import Button from './Button';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const AddProductScreen = ({ navigation }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productAddress, setProductAddress] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const handleAddProduct = () => {
    console.log('New product added:', {
      name: productName,
      price: productPrice,
      address: productAddress,
      quantity: productQuantity,
    });

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Novo Produto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={productPrice}
        onChangeText={setProductPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={productAddress}
        onChangeText={setProductAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={productQuantity}
        onChangeText={setProductQuantity}
        keyboardType="numeric"
      />

      <Button title="Adicionar Produto" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddProductScreen;
