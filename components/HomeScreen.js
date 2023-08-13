import React from 'react';
import { Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import FoodCard from './FoodCard';
import { useNavigation } from '@react-navigation/native';
import CustomCarousel from './CustomCarousel';
import SpacingLine from './SpacingLine';
import Banner from './Banner';
import ProfileButton from './ProfileButton';

const HomeScreen = () => {
  const blocoUm = [
    { id: '1', title: 'sacola arroz e feijao' },
    { id: '2', title: 'sacola de verduras' },
    { id: '3', title: 'sacola de banana e mamão' },
  ];

  const blocoDois = [
    { id: '1', title: 'cesta básica 2kg' },
    { id: '2', title: 'cesta básica 3kg' },
    { id: '3', title: 'cesta básica 4kg' },
  ];

  const blocoTres = [
    { id: '1', title: 'mistos padaria' },
    { id: '2', title: 'mistos confeitaria' },
  ];

  const navigation = useNavigation();

  const handleDetailsPress = () => {
    navigation.navigate('DetailsScreen');
  };

  const handleProfileScreen = () => {
    navigation.navigate('ProfileScreen');
  };

  const renderCarousel = ({ item }) => (
    <FoodCard title={item.title} onPress={() => handleDetailsPress()} />
  );

  return (
    <SafeAreaView contentContainerStyle={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Banner/>
      <ProfileButton onPress={handleProfileScreen}/>
      <Text style={styles.title}>Mais perto de você</Text>
      <CustomCarousel
        data={blocoUm}
        renderItem={renderCarousel}
        sliderWidth={300}
        itemWidth={150}
        layout="default"
      />
    <SpacingLine />
    <Text style={styles.title}>Supermercado Nonato</Text>
      <CustomCarousel
        data={blocoDois}
        renderItem={renderCarousel}
        sliderWidth={300}
        itemWidth={150}
        layout="default"
      />
    <SpacingLine />
    <Text style={styles.title}>Padaria da Samira</Text>
      <CustomCarousel
        data={blocoTres}
        renderItem={renderCarousel}
        sliderWidth={300}
        itemWidth={150}
        layout="default"
      />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;
