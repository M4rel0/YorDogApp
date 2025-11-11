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

import { ActivityIndicator } from 'react-native';
import ProfileImagePicker from '../../components/perfilimagempiker/ProfileImagePicker';
import { Input } from '@/components/input';

export default function Cadastro3({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Cadastro3'>) {
  return (
    <SafeAreaView style={styles.safe}>
      <View>
        <Image
          source={require('../../../assets/images/imagensCadastro/imgParte2.png')}
          style={[styles.decoration, { width: '100%', marginTop: 5 }]}
          resizeMode="contain"
        />
      </View>
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
          source={require('../../../assets/images/imagensCadastro/imgcadastro5.png')}
          style={[
            styles.decoration,
            { width: '70%' },
            { bottom: 40, left: -70, transform: [{ rotate: '355deg' }] },
          ]}
          resizeMode="contain"
        />

        <Image
          source={require('../../../assets/images/imagensCadastro/imgcadastro1.png')}
          style={[
            styles.decoration,
            { width: '55%' },
            { bottom: -45, right: -10 },
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
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            <Image
              source={require('../../../assets/images/imagensLogin/SnoutChat.png')}
              style={{ width: 200, height: 55, marginBottom: 3 }}
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
            <Text style={styles.subtitle}>
              Continue seu cadastro de seu primeiro Dog! {'\n'} Adicione algumas
              curiosidades
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              width: '90%',
            }}
          >
            {[
              { placeholder: 'Cusco', label: 'Raça' },

              { placeholder: 'Longa', label: 'Pelagem' },

              { placeholder: '4kg', label: 'Peso' },

              { placeholder: 'Medio', label: 'Porte' },

              { placeholder: '5', label: 'Idade' },

              { placeholder: 'Brabo', label: 'Comportamento' },
            ].map((item, idx) => (
              <View key={idx} style={{ width: '48%', marginBottom: 12 }}>
                {item.label && <Text style={styles.label}>{item.label}</Text>}
                <Input
                  placeholder={item.placeholder}
                  placeholderTextColor={colors.textMuted}
                  keyboardType="default"
                  autoCapitalize="none"
                  style={styles.input}
                />
              </View>
            ))}
          </View>

          <PrimaryButton
            title="Adicionar"
            onPress={() => navigation.navigate('EscolhaPerf')}
            style={{ marginTop: 5 }}
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
  },
  label: {
    color: colors.textDark,
    marginLeft: 20,
    marginBottom: 3,
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
