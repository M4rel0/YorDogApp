import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import { s } from "@/components/scrollbaixo/card/emotecard/styles";
import Entypo from "@expo/vector-icons/Entypo";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Emotecard() {
  return (
    <View style={s.container}>
      <View style={s.icons}>
        <Image
          style={s.iconsimg}
          source={require("@/../assets/images/coracao.png")}
        />
        <Text style={s.iconsText}>40 mil</Text>
      </View>
      <View style={s.icons}>
        <Image
          style={s.iconsimg}
          source={require("@/../assets/images/mensagem3.png")}
        />
        <Text style={s.iconsText}>23 mil</Text>
      </View>
      <View style={s.icons}>
        <Image
          style={s.iconsimg}
          source={require("@/../assets/images/compartilhado.png")}
        />
        <Text style={s.iconsText}>3 mil</Text>
      </View>
    </View>
  );
}
