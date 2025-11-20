import React, { useState } from 'react';
import { router } from 'expo-router';
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
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../app';
import PrimaryButton from '../../components/buttonPrimario/PrimaryButton';
import { colors } from '../../theme';
import { saveDogProfile } from '@/lib/api';

type Props = NativeStackScreenProps<RootStackParamList, 'Cadastro4'>;

export default function Cadastro4({ navigation, route }: Props) {
  const { dogName, avatarUrl, breed, age } = route.params;

  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleFinishWithoutPost() {
    try {
      if (!dogName) {
        Alert.alert('Erro', 'Nome do dog não encontrado.');
        return;
      }

      setLoading(true);

      await saveDogProfile({
        dogName,
        breed: breed ?? null,
        age: age ? Number(age) : null,
        bio: bio || null,
        gender: null,
        avatarUrl: avatarUrl ?? null,
      });

      router.replace('/(tabs)/appindex');
    } catch (e: any) {
      Alert.alert('Erro ao salvar perfil', e.message ?? 'Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  function handleGoToPost() {
    navigation.navigate('CadastroPost', {
      dogName,
      avatarUrl,
      breed,
      age,
      bio,
    });
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View>
        <Image
          source={require('../../../assets/images/imagensCadastro/imgParte3.png')}
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
          source={require('../../../assets/images/imagensCadastro/imgcadastro6.png')}
          style={[
            styles.decoration,
            { width: '60%' },
            { bottom: -80, left: -80 },
          ]}
          resizeMode="contain"
        />

        <Image
          source={require('../../../assets/images/imagensCadastro/imgcadastro77.png')}
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
                <Text style={{ fontWeight: '600' }}>
                  Faça o cadastro do seu primeiro Dog! {'\n'}
                </Text>
                Adicione uma breve biografia sobre seu Dog
              </Text>

              <View
                style={{
                  width: '100%',
                  alignItems: 'flex-start',
                  marginTop: 15,
                }}
              >
                <Text style={[styles.label]}>Bio</Text>
                <TextInput
                  placeholder="Sou o primeiro da minha família a ser macho..."
                  placeholderTextColor={colors.textMuted}
                  keyboardType="default"
                  autoCapitalize="none"
                  multiline
                  numberOfLines={5}
                  textAlignVertical="top"
                  style={[
                    styles.input,
                    {
                      height: 150,
                      padding: 10,
                      fontSize: 16,
                    },
                  ]}
                  value={bio}
                  onChangeText={setBio}
                />
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginBottom: 10,
                gap: 5,
                width: '85%',
              }}
            >
              <Text
                style={[styles.subtitle, { fontSize: 16, fontWeight: '500' }]}
              >
                Que tal começar sua jornada com um post com uma foto?
              </Text>
              <PrimaryButton
                title="Vamos lá!"
                onPress={handleGoToPost}
                style={{
                  marginTop: 5,
                  paddingHorizontal: 20,
                  paddingVertical: 7,
                }}
              />
            </View>
            <PrimaryButton
              title={loading ? 'Salvando...' : 'Finalizar Perfil'}
              onPress={handleFinishWithoutPost}
              style={{ marginTop: 5 }}
              disabled={loading}
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
