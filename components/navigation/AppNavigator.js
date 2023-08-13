import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../WelcomeScreen';
import RegisterScreen from '../RegisterScreen';
import LoginScreen from '../LoginScreen';
import HomeScreen from '../HomeScreen';
import DetailsScreen from '../DetailsScreen';
import PessoaJuridicaScreen from '../PessoaJuridicaScreen';
import AddProductScreen from '../AddProductScreen';
import ProfileScreen from '../ProfileScreen'; 

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
                    <Stack.Screen name="PessoaJuridicaScreen" component={PessoaJuridicaScreen} />
                    <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
                    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        margin: 8, // Define a margem padrão para as telas
      },
});

export default AppNavigator;