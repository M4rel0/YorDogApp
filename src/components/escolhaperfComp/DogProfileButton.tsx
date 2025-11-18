import React from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface DogProfileButtonProps {
  name: string;
  imageUri?: any;
  onPress: () => void;
  containerStyle?: ViewStyle;
}

export function DogProfileButton({
  name,
  imageUri,
  onPress,
  containerStyle,
}: DogProfileButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Image
        source={
          imageUri || require('@/../assets/images/imagensLogin/imgperf4.png')
        }
        style={imageUri ? styles.image : styles.addIcon}
      />
      {name && name.toLowerCase() !== 'criar' ? (
        <Text style={styles.name}>{name}</Text>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    elevation: 3,
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 50,
  },
  addIcon: {
    width: 60,
    height: 60,
    opacity: 0.8,
  },
  name: {
    marginTop: 8,
    fontWeight: '600',
    fontSize: 15,
    color: '#333',
  },
});
