import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
};

export default function PrimaryButton({
  title,
  onPress,
  style,
  disabled,
}: Props) {
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      style={({ pressed }) => [
        styles.btn,
        style,
        disabled && styles.disabled,
        pressed && !disabled && { opacity: 0.9 },
      ]}
    >
      <Text style={[styles.text, disabled && { opacity: 0.6 }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 48,
  },
  text: { fontSize: 16, fontWeight: '600', color: '#3B2F2A' },

  // Estilo quando o botão está desativado
  disabled: {
    opacity: 0.5,
  },
});
