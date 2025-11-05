import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { colors } from '@/styles/colors';

import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { Separador } from '@/components/separador';

import { Marca } from '@/components/marca';
import { Status } from '@/components/status';
import { Card } from '@/components/scrollbaixo/card';
import { Scrollbaixo } from '@/components/scrollbaixo';
import { Imgcard } from '@/components/scrollbaixo/card/imgcard';

export default function appindex() {
  return (
    <View style={styles.container}>
      <Marca />

      <Scrollbaixo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(131, 168, 19)',
    padding: 0,
    maxWidth: 1200,
    position: 'relative',
    margin: 0,
  },
  title: {
    color: 'red',
    fontSize: 24,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
