import React, { useState } from 'react';
import { router } from 'expo-router';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
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
import ProfileImagePicker from '../../components/perfilimagempiker/ProfileImagePicker';
import { saveDogProfile } from '@/lib/api';

type Props = NativeStackScreenProps<RootStackParamList, 'CadastroPost'>;

export default function CadastroPost({ navigation, route }: Props) {
  const { dogName, avatarUrl, breed, age, bio } = route.params;

  const [postImage, setPostImage] = useState<string | undefined>(avatarUrl);
  const [loading, setLoading] = useState(false);

  async function handlePost() {
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
        bio: bio ?? null,
        gender: null,
        avatarUrl: postImage ?? avatarUrl ?? null,
      });

      // aqui, depois você pode também criar a lógica de salvar o "post" em outra tabela
      router.replace('/(tabs)/appindex');
    } catch (e: any) {
      Alert.alert(
        'Erro ao salvar perfil/post',
        e.message ?? 'Tente novamente.'
      );
    } finally {
      setLoading(false);
    }
  }

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
                Agora faça seu primeiro post!
              </Text>

              <Text style={[styles.subtitle, { marginTop: 10, fontSize: 17 }]}>
                Capriche na primeira foto
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
                  initialUri={avatarUrl}
                  onImagePicked={(uri) => setPostImage(uri)}
                />
              </View>
            </View>

            <PrimaryButton
              title={loading ? 'Postando...' : 'Postar'}
              onPress={handlePost}
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
});
