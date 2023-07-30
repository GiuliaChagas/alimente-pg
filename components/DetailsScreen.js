import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DetailsScreen = () => {
  const product = {
    id: '1',
    title: 'Exemplo de Produto',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus dui sed dolor varius, et volutpat enim tristique. Nullam id libero eget velit volutpat malesuada. Donec consectetur nisi ac odio cursus, ut euismod ipsum luctus. In ullamcorper tristique turpis, sit amet malesuada purus sollicitudin nec. Cras vel urna ut metus finibus auctor quis a enim. Vivamus blandit venenatis erat, non tempor velit.',
    imageUrl: 'https://via.placeholder.com/300', // URL de exemplo para a imagem
  };

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Lógica para adicionar o produto ao carrinho
    console.log('Produto adicionado ao carrinho:', product.title, 'Quantidade:', quantity);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />

      <Text style={styles.title}>{product.title}</Text>

      <Text style={styles.description}>{product.description}</Text>

      <View style={styles.quantityContainer}>
        <Text style={styles.quantityLabel}>Quantidade:</Text>
        <View style={styles.quantityControls}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
        <Text style={styles.addButtonLabel}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'blue', 
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

export default DetailsScreen;
