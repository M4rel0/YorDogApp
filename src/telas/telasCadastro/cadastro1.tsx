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

import { RootStackParamList } from '../../app';
import PrimaryButton from '../../components/buttonPrimario/PrimaryButton';
import { colors, radius } from '../../theme';

import { ActivityIndicator /* ...resto */ } from 'react-native';

export default function Cadastro1({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Cadastro1'>) {
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
          source={require('../../../assets/images/imagensCadastro/imgcadastro1.png')}
          style={[
            styles.decoration,
            { width: '50%' },
            { bottom: -15, left: -30, transform: [{ rotate: '19deg' }] },
          ]}
          resizeMode="contain"
        />

        <Image
          source={require('../../../assets/images/imagensCadastro/imgcadastro2.png')}
          style={[
            styles.decoration,
            { width: '52%' },
            { bottom: 33, right: -26, transform: [{ rotate: '350deg' }] },
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
            style={{
              alignItems: 'center',
              marginBottom: 70,
              marginTop: 20,
            }}
          >
            <Image
              source={require('../../../assets/images/imagensLogin/SnoutChat.png')}
              style={{ width: 200, height: 55, marginBottom: 6 }}
            />
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginTop: 16 }}
            >
              <Image
                source={require('../../../assets/images/imagensLogin/imgmarcalogin.png')}
                style={{ width: 120, height: 120, marginBottom: 6 }}
              />
            </Pressable>
            <Text style={styles.subtitle}>Faça seu cadastro de tutor!</Text>
          </View>

          <View style={{ gap: 12, width: '100%' }}>
            <Text style={styles.label}>email do tutor</Text>
            <TextInput
              placeholder="email@exemplo.com"
              placeholderTextColor={colors.textMuted}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
              placeholder="********"
              placeholderTextColor={colors.textMuted}
              secureTextEntry
              style={styles.input}
            />
          </View>

          <PrimaryButton
            title="Cadastrar"
            onPress={() => navigation.navigate('Cadastro2')}
            style={{ marginTop: 16 }}
          />
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
    fontWeight: '400',
    fontSize: 17,
  },
  label: {
    color: colors.textDark,
    marginLeft: 6,
    marginBottom: -7,
    fontWeight: '600',
    fontSize: 15,
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
