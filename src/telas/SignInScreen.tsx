import { login } from '@/lib/api';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../app';
import PrimaryButton from '../components/buttonPrimario/PrimaryButton';
import { colors, radius } from '../theme';

import { ActivityIndicator /* ...resto */ } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export default function SignInScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSignIn = async () => {
    try {
      setErrorMsg(null);
      if (!email || !/^\S+@\S+\.\S+$/.test(email))
        throw new Error('Informe um e-mail válido.');
      if (!password || password.length < 6)
        throw new Error('Senha mínima de 6 caracteres.');

      console.log('🔵 Enviando login para o servidor...');
      setLoading(true);

      await login(email.trim(), password);

      console.log('🟢 Servidor respondeu, login OK!');
      navigation.replace('EscolhaPerf'); // sua rota pós-login
    } catch (e: any) {
      console.log('🔴 Erro:', e.message);
      setErrorMsg(e.message ?? 'Erro ao entrar.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.safe}>
      {/* Decorações */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: -70,
          width: '100%',
          height: '10%',
        }}
      >
        <Image
          source={require('../../assets/images/imagensLogin/imgBolaTenisFundo.png')}
          style={[
            styles.decoration,
            { width: '130%' }, // Usando porcentagem
          ]}
          resizeMode="contain"
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', android: undefined })}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View
            style={{ alignItems: 'center', marginBottom: 10, marginTop: 20 }}
          >
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginTop: 16 }}
            >
              <Image
                source={require('../../assets/images/imagensLogin/imgmarcalogin.png')}
                style={{ width: 120, height: 120, marginBottom: 6 }}
              />
            </Pressable>
            <Image
              source={require('../../assets/images/imagensLogin/SnoutChat.png')}
              style={{ width: 200, height: 55, marginBottom: 6 }}
            />
            <Text style={styles.subtitle}>
              Bem-vindo de volta Aumigo{'\n'}Sentimos sua falta…
            </Text>
          </View>

          <View style={{ gap: 12, width: '100%' }}>
            <Text style={styles.label}>Nome do Usuário</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="email@exemplo.com"
              placeholderTextColor={colors.textMuted}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="********"
              placeholderTextColor={colors.textMuted}
              secureTextEntry
              style={styles.input}
            />
          </View>

          <PrimaryButton
            title="Entrar"
            onPress={onSignIn}
            style={{ marginTop: 16 }}
          />

          <Pressable
            onPress={() => console.log('Cadastrar')}
            style={{ marginTop: 10 }}
          >
            <Text
              onPress={() => navigation.navigate('Cadastro1')}
              style={styles.linkMuted}
            >
              Cadastrar
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.creme,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 24,
    alignItems: 'center',
  },
  decoration: {
    position: 'absolute',
    resizeMode: 'contain',
    opacity: 0.95,
  },
  title: {
    fontSize: 42,
    fontWeight: '700',
    color: colors.textDark,
    lineHeight: 46,
  },
  subtitle: {
    marginTop: 6,
    textAlign: 'center',
    color: colors.textMuted,
  },
  label: {
    color: colors.textDark,
    marginLeft: 6,
    marginBottom: -7,
    fontWeight: '400',
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 14,
    color: colors.textDark,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  linkMuted: {
    color: colors.textMuted,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  backLink: {
    color: colors.textDark,
    textAlign: 'center',
    fontWeight: '600',
  },
});
