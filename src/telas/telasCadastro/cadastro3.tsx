import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../app';
import PrimaryButton from '../../components/buttonPrimario/PrimaryButton';
import { colors } from '../../theme';
import { Input } from '@/components/input';

type Props = NativeStackScreenProps<RootStackParamList, 'Cadastro3'>;

export default function Cadastro3({ navigation, route }: Props) {
  const { dogName, avatarUrl } = route.params;

  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  // os outros campos ainda podem existir só visualmente, se quiser

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
              Continue seu cadastro do primeiro Dog! {'\n'} Adicione algumas
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
            {/* Raça */}
            <View style={{ width: '48%', marginBottom: 12 }}>
              <Text style={styles.label}>Raça</Text>
              <Input
                placeholder="Cusco"
                placeholderTextColor={colors.textMuted}
                keyboardType="default"
                autoCapitalize="none"
                style={styles.input}
                value={breed}
                onChangeText={setBreed}
              />
            </View>

            {/* Pelagem (visual, ainda não salva) */}
            <View style={{ width: '48%', marginBottom: 12 }}>
              <Text style={styles.label}>Pelagem</Text>
              <Input
                placeholder="Longa"
                placeholderTextColor={colors.textMuted}
                keyboardType="default"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>

            {/* Peso */}
            <View style={{ width: '48%', marginBottom: 12 }}>
              <Text style={styles.label}>Peso</Text>
              <Input
                placeholder="4kg"
                placeholderTextColor={colors.textMuted}
                keyboardType="default"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>

            {/* Porte */}
            <View style={{ width: '48%', marginBottom: 12 }}>
              <Text style={styles.label}>Porte</Text>
              <Input
                placeholder="Médio"
                placeholderTextColor={colors.textMuted}
                keyboardType="default"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>

            {/* Idade (ligada ao banco) */}
            <View style={{ width: '48%', marginBottom: 12 }}>
              <Text style={styles.label}>Idade</Text>
              <Input
                placeholder="5"
                placeholderTextColor={colors.textMuted}
                keyboardType="numeric"
                autoCapitalize="none"
                style={styles.input}
                value={age}
                onChangeText={setAge}
              />
            </View>

            {/* Comportamento */}
            <View style={{ width: '48%', marginBottom: 12 }}>
              <Text style={styles.label}>Comportamento</Text>
              <Input
                placeholder="Brabo"
                placeholderTextColor={colors.textMuted}
                keyboardType="default"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>
          </View>

          <PrimaryButton
            title="Adicionar"
            onPress={() =>
              navigation.navigate('Cadastro4', {
                dogName,
                avatarUrl,
                breed,
                age,
              })
            }
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
});
