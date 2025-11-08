import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../telas/WelcomeScreen';
import SignInScreen from '../telas/SignInScreen';
import { EscolhaPerf } from '../telas/telaEscolhaPerf/EscolhaPerf';
import { View } from 'react-native';

export type RootStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  EscolhaPerf: undefined; // Adicione esta linha
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function index() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="EscolhaPerf" component={EscolhaPerf} />
    </Stack.Navigator>
  );
}
