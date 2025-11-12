import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../telas/WelcomeScreen';
import SignInScreen from '../telas/SignInScreen';
import { EscolhaPerf } from '../telas/telaEscolhaPerf/EscolhaPerf';
import Cadastro1 from '../telas/telasCadastro/Cadastro1';
import Cadastro2 from '../telas/telasCadastro/Cadastro2';
import Cadastro3 from '../telas/telasCadastro/Cadastro3';
import Cadastro4 from '../telas/telasCadastro/Cadastro4';
import CadastroPost from '../telas/telasCadastro/CadastroPost';

export type RootStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  EscolhaPerf: undefined;
  Cadastro1: undefined;
  Cadastro2: undefined;
  Cadastro3: undefined;
  Cadastro4: undefined;
  CadastroPost: undefined;
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
      <Stack.Screen name="Cadastro3" component={Cadastro3} />
      <Stack.Screen name="Cadastro4" component={Cadastro4} />
      <Stack.Screen name="CadastroPost" component={CadastroPost} />
    </Stack.Navigator>
  );
}
