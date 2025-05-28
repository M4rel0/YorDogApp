import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import { s } from "@/components/scrollbaixo/card/footercard/styles";

export function Footercard() {
  return (
    <View style={s.container}>
      <View style={s.comentario}>
        <Image
          style={s.imagemporf}
          source={require("@/../assets/images/imagemMarcos.png")}
          resizeMode="cover"
        />
        <Text style={s.comentarioText}> Adicione um comentario</Text>
      </View>
      <View style={s.emogi}>
        <Text style={s.tamanho}>😍</Text>
        <Text style={s.tamanho}>😭</Text>
        <Image
          style={s.tamanho}
          source={require("@/../assets/images/Plus Button.png")}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}
