import React from 'react';
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
import { s } from '../scrollbaixo/styles';
import { colors } from '@/theme';

type TituloTextProps = {
  Texto: string;
};

export const TituloText = ({ Texto }: TituloTextProps) => {
  return <Text style={styles.container}>{Texto}</Text>;
};
const styles = StyleSheet.create({
  container: {
    color: '#312416',
    fontWeight: '500',
    fontSize: 34,
  },
});
