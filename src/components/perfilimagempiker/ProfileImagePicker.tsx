import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

type ProfileImagePickerProps = {
  width?: number;
  height?: number;
  borderRadius?: number;
  initialUri?: string; // opcional: imagem inicial
  onImagePicked?: (uri: string) => void; // callback pra enviar pro pai
};

export default function ProfileImagePicker({
  width = 170,
  height = 170,
  borderRadius = 100,
  initialUri,
  onImagePicked,
}: ProfileImagePickerProps) {
  const [image, setImage] = useState<string | null>(initialUri ?? null);

  useEffect(() => {
    // se a tela pai mudar a initialUri por algum motivo
    if (initialUri) {
      setImage(initialUri);
    }
  }, [initialUri]);

  async function pickImage() {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.status !== 'granted') {
      Alert.alert(
        'Permissão necessária',
        'Precisamos de acesso à galeria para escolher a foto.'
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      onImagePicked?.(uri); // 👈 avisa a tela pai
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} activeOpacity={0.7}>
        {image ? (
          <Image
            source={{ uri: image }}
            style={{ width, height, borderRadius }}
          />
        ) : (
          <View style={[styles.placeholder, { width, height, borderRadius }]} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  placeholder: {
    backgroundColor: '#f2f2f2',
    borderWidth: 2,
    borderColor: '#ddd',
  },
});
