import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import { s } from "@/components/scrollbaixo/card/imgcard/styles";
import { PerfilCard } from "./PerfilCard";

export function Imgcard() {
  return (
    <View style={s.container}>
      <PerfilCard />
      <Image
        source={require("@/../assets/images/Dogimagecard.png")}
        style={s.img}
        resizeMode="cover"
      />
    </View>
  );
}
