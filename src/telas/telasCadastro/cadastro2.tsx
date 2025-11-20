import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../app';
import PrimaryButton from '../../components/buttonPrimario/PrimaryButton';
import { colors } from '../../theme';
import ProfileImagePicker from '../../components/perfilimagempiker/ProfileImagePicker';

type Props = NativeStackScreenProps<RootStackParamList, 'Cadastro2'>;

export default function Cadastro2({ navigation }: Props) {
  const [dogName, setDogName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(undefined);

  function handleNext() {
    if (!dogName) {
      Alert.alert('Atenção', 'Informe o nome do Dog.');
      return;
    }

    navigation.navigate('Cadastro3', {
      dogName,
      avatarUrl,
    });
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View>
        <Image
          source={require('../../../assets/images/imagensCadastro/imgParte1.png')}
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
          source={require('../../../assets/images/imagensCadastro/imgcadastro3.png')}
          style={[
            styles.decoration,
            { width: '110%' },
            { bottom: -35, left: -170, transform: [{ rotate: '19deg' }] },
          ]}
          resizeMode="contain"
        />

        <Image
          source={require('../../../assets/images/imagensCadastro/imgcadastro4.png')}
          style={[
            styles.decoration,
            { width: '65%' },
            { bottom: -80, right: -100, transform: [{ rotate: '350deg' }] },
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
              Faça seu cadastro de seu primeiro Dog! {'\n'} Rápido, ele quer
              brincar...
            </Text>
          </View>

          <View style={{ gap: 12, width: '100%' }}>
            <Text style={styles.label}>Nome de Usuário</Text>
            <TextInput
              placeholder="Atila Rei Dos Unos"
              placeholderTextColor={colors.textMuted}
              keyboardType="default"
              autoCapitalize="none"
              style={styles.input}
              value={dogName}
              onChangeText={setDogName}
            />
            <Text
              style={[
                styles.subtitle,
                {
                  marginBottom: -10,
                  marginTop: -5,
                  color: colors.textDark,
                  fontSize: 16,
                },
              ]}
            >
              Foto Perfil
            </Text>

            <ProfileImagePicker
              width={170}
              height={170}
              borderRadius={100}
              onImagePicked={(uri) => setAvatarUrl(uri)}
            />
          </View>

          <PrimaryButton
            title="Adicionar"
            onPress={handleNext}
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
    marginLeft: 50,
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
    marginHorizontal: 40,
  },
});
