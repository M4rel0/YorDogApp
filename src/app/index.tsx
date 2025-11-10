import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../telas/WelcomeScreen';
import SignInScreen from '../telas/SignInScreen';
import { EscolhaPerf } from '../telas/telaEscolhaPerf/EscolhaPerf';
import { View } from 'react-native';
import Cadastro1 from '../telas/telasCadastro/Cadastro1';
import Cadastro2 from '../telas/telasCadastro/Cadastro2';
export type RootStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  EscolhaPerf: undefined; // Adicione esta linha
  Cadastro1: undefined;
  Cadastro2: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function index() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="EscolhaPerf" component={EscolhaPerf} />
      <Stack.Screen name="Cadastro1" component={Cadastro1} />
      <Stack.Screen name="Cadastro2" component={Cadastro2} />
    </Stack.Navigator>
  );
}
