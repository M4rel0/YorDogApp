import { login } from '@/lib/api';
import React, { useState } from 'react';
import { router } from 'expo-router';
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
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../app';
import PrimaryButton from '../../components/buttonPrimario/PrimaryButton';
import { colors, radius } from '../../theme';

import { ActivityIndicator } from 'react-native';
import ProfileImagePicker from '../../components/perfilimagempiker/ProfileImagePicker';
import { Input } from '@/components/input';

export default function CadastroPost({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'CadastroPost'>) {
  return (
    <SafeAreaView style={styles.safe}>
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
          source={require('../../../assets/images/imagensCadastro/imgcadastro8.png')}
          style={[
            styles.decoration,
            { width: '60%' },
            { bottom: -80, left: -80 },
          ]}
          resizeMode="contain"
        />

        <Image
          source={require('../../../assets/images/imagensCadastro/imgcadastro5.png')}
          style={[
            styles.decoration,
            { width: '63%' },
            { bottom: 0, right: -47 },
          ]}
          resizeMode="contain"
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', android: undefined })}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View
              style={{
                alignItems: 'center',
                marginBottom: 10,
                marginTop: 0,
              }}
            >
              <Pressable
                onPress={() => navigation.goBack()}
                style={{ marginTop: 16 }}
              >
                <Image
                  source={require('../../../assets/images/imagensLogin/SnoutChat.png')}
                  style={{ width: 200, height: 55, marginBottom: 3 }}
                />
              </Pressable>
              <Text
                style={[
                  styles.subtitle,
                  { marginTop: 30, fontWeight: '600', fontSize: 17 },
                ]}
              >
                Augora Faça seu primeiro post!
              </Text>

              <Text style={[styles.subtitle, { marginTop: 10, fontSize: 17 }]}>
                Capriche na primeira Foto
              </Text>
              <View
                style={{
                  width: '100%',

                  marginTop: 15,
                }}
              >
                <ProfileImagePicker
                  width={300}
                  height={400}
                  borderRadius={20}
                />
              </View>
            </View>

            <PrimaryButton
              title="Postar"
              onPress={() => router.replace('/(tabs)/appindex')}
              style={{ marginTop: 5 }}
            />
          </View>
        </TouchableWithoutFeedback>
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
