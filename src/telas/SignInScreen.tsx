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

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export default function SignInScreen({ navigation }: Props) {
  const [email, setEmail] = useState('Designer@gmail.com');
  const [password, setPassword] = useState('');

  const onSignIn = () => {
    // TODO: autenticação real
    console.log({ email, password });
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Decorações */}
      <Image
        source={require('../../assets/images/imagensLogin/image 22.png')}
        style={[
          styles.decoration,
          { bottom: -40, right: -60, width: 260, height: 200 },
        ]}
      />
      <Image
        source={require('../../assets/images/imagensLogin/image 24.png')}
        style={[styles.decoration, { top: 0, left: 20, width: 90, height: 90 }]}
      />

      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', android: undefined })}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ alignItems: 'center', marginBottom: 10 }}>
            <Image
              source={require('../../assets/images/imagensLogin/image 25.png')}
              style={{ width: 70, height: 70, marginBottom: 6 }}
            />
            <Text style={styles.title}>SnoutChat</Text>
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
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="********"
              secureTextEntry
              style={styles.input}
            />
          </View>

          <PrimaryButton
            title="Entrar"
            onPress={onSignIn}
            style={{ marginTop: 16, width: '100%' }}
          />

          <Pressable
            onPress={() => console.log('Cadastrar')}
            style={{ marginTop: 10 }}
          >
            <Text style={styles.linkMuted}>Cadastrar</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginTop: 16 }}
          >
            <Text style={styles.backLink}>← Voltar</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bgPeach,
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
    marginBottom: 4,
    fontWeight: '600',
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
