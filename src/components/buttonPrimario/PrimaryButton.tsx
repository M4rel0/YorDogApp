import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';

type Props = { title: string; onPress: () => void; style?: ViewStyle };

export default function PrimaryButton({ title, onPress, style }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.btn, style, pressed && { opacity: 0.9 }]}
    >
      <Text style={styles.text}>{title}</Text>
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
});
