import React from "react";
import { Text, View, TextInput, Image } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

export function Pesquisa() {
  return (
    <View style={styles.pesquisa}>
      <View style={styles.innerShadow}>
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.01)", "rgba(0, 0, 0, 0.01)"]}
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
          <Image
            source={require("../../../assets/images/Frame.png")}
            style={styles.imagem}
          />
        </View>
        <View style={styles.objfiltroapli}>
          <Text style={styles.text}>Todos</Text>
          <Image
            source={require("../../../assets/images/FrameTodos.png")}
            style={styles.imagem}
          />
        </View>
      </View>
    </View>
  );
}
