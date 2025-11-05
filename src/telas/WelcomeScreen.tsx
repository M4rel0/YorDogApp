import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../app';
import PrimaryButton from '../components/buttonPrimario/PrimaryButton';
import { colors, radius } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Decorações */}
      <Image
        source={require('../../assets/images/imagensLogin/image 21.png')}
        style={[
          styles.decoration,
          { top: -20, left: -10, width: 120, height: 120 },
        ]}
      />
      <Image
        source={require('../../assets/images/imagensLogin/image 21.png')}
        style={[
          styles.decoration,
          { top: 12, right: -30, width: 180, height: 140 },
        ]}
      />
      <Image
        source={require('../../assets/images/imagensLogin/ingbrinquedo.png')}
        style={[
          styles.decoration,
          { bottom: 160, right: 14, width: 80, height: 80 },
        ]}
      />
      <Image
        source={require('../../assets/images/imagensLogin/image 14.png')}
        style={[
          styles.decoration,
          { bottom: 40, left: 24, width: 160, height: 120 },
        ]}
      />

      {/* Conteúdo */}
      <View style={styles.card}>
        <View>
          <Image
            source={require('../../assets/images/imagensLogin/imgmarcalogin.png')}
            style={{
              width: 182,
              height: 164,
              alignSelf: 'center',
              marginBottom: 12,
            }}
          />
          <Text style={styles.title}>SnoutChat</Text>
          <Text style={styles.desc}>
            Encontre, conecte e compartilhe momentos especiais do seu pet. Faça
            amizades, descubra novos amigos e encontre o par perfeito para o seu
            cachorro.
          </Text>

          <PrimaryButton
            title="Login"
            onPress={() => navigation.navigate('SignIn')}
            style={{ marginTop: 12 }}
          />
          <Image
            source={require('../../assets/images/imagensLogin/imgloginpote.png')}
            style={{
              width: 243,
              height: 178,
              alignSelf: 'center',
              marginTop: 30,
              backgroundColor: 'transparent',
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.bgPeach,
    alignItems: 'center',
    justifyContent: 'center',
  },
  decoration: {
    position: 'absolute',
    resizeMode: 'contain',
    opacity: 0.95,
  },
  card: {
    width: '86%',
    backgroundColor: colors.creme,
    paddingHorizontal: 24,
    paddingVertical: 60,
    borderRadius: radius.xl,
    alignSelf: 'center',
    zIndex: 2,
  },
  title: {
    fontSize: 44,
    lineHeight: 48,
    textAlign: 'center',
    color: colors.textDark,
    fontWeight: '700',
    marginBottom: 6,
  },
  desc: {
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: 32,
    color: colors.textMuted,
    marginBottom: 16,
  },
});
