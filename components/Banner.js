import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Banner = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Promoção imperdível!</Text>
          <Text style={styles.subText}>Aproveite nossas ofertas especiais.</Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#b2dfdb', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 10,
        marginTop: 15,
        borderRadius: 5,
      },
      text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
      subText: {
        fontSize: 14,
        color: '#333', 
      },
    });

export default Banner;
