import React from 'react';
import Button from './Button';
import { View, Text, StyleSheet } from 'react-native';

const FoodCard = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button title="detalhes" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 170,
    backgroundColor: '#f1f1f1',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 12,
  },
});

export default FoodCard;
