import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

export function Pesquisa() {
  const [categoria, setCategoria] = useState('todos');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categorias = [
    { label: 'Todos', value: 'todos' },
    { label: 'Medio Porte', value: 'medioporte' },
    { label: 'Pequeno Porte', value: 'pequenoporte' },
    { label: 'Grande Porte', value: 'grandeporte' },
  ];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const selectAll = () => {
    setCategoria('todos');
    setDropdownOpen(false);
  };

  const selectCategoria = (value: string) => {
    const selected = categorias.find((item) => item.value === value);
    if (selected) {
      setCategoria(selected.label);
    }
    setDropdownOpen(false);
  };
  return (
    <View style={styles.pesquisa}>
      <View style={styles.innerShadow}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.01)', 'rgba(0, 0, 0, 0.01)']}
          style={styles.gradientOverlay}
        />
        <TextInput
          style={styles.pesquisaInput}
          placeholder="Pesquisar..."
          placeholderTextColor="#888"
        />
      </View>
      <View style={styles.filtros}>
        <View style={styles.objfiltro}>
          <Text style={styles.text}>Filtros</Text>
          {/* Botão do filtro */}
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={toggleDropdown}
          ></TouchableOpacity>

          {/* Lista de opções */}
          {dropdownOpen && (
            <View style={styles.dropdown}>
              {categorias.map((item) => (
                <TouchableOpacity
                  key={item.value}
                  style={styles.dropdownItem}
                  onPress={() => selectCategoria(item.value)}
                >
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <Image
            source={require('../../../assets/images/Frame.png')}
            style={styles.imagem}
          />
        </View>
        <View style={styles.objfiltroapli}>
          <Text style={styles.text}>
            {categoria === 'todos' ? 'Todos' : categoria}
          </Text>
          <TouchableOpacity style={styles.imagem} onPress={selectAll}>
            <Image
              source={require('../../../assets/images/FrameTodos.png')}
              style={styles.imagem}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
