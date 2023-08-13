import React from 'react';
import { Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import FoodCard from './FoodCard';
import { useNavigation } from '@react-navigation/native';
import CustomCarousel from './CustomCarousel';
import SpacingLine from './SpacingLine';
import Banner from './Banner';
import ProfileButton from './ProfileButton';

const HomeScreen = () => {
  const carnes = [
    { id: '1', title: 'acém' },
    { id: '2', title: 'patinho' },
    { id: '3', title: 'paleta' },
  ];

  const frutas = [
    { id: '1', title: 'banana' },
    { id: '2', title: 'manga' },
    { id: '3', title: 'uva' },
  ];

  const bebidas = [
    { id: '1', title: 'água 150ml' },
    { id: '2', title: 'chá gelado' },
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
      <Text style={styles.title}>Frutas</Text>
      <CustomCarousel
        data={frutas}
        renderItem={renderCarousel}
        sliderWidth={300}
        itemWidth={150}
        layout="default"
      />
    <SpacingLine />
    <Text style={styles.title}>Carnes</Text>
      <CustomCarousel
        data={carnes}
        renderItem={renderCarousel}
        sliderWidth={300}
        itemWidth={150}
        layout="default"
      />
    <SpacingLine />
    <Text style={styles.title}>Bebidas</Text>
      <CustomCarousel
        data={bebidas}
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
