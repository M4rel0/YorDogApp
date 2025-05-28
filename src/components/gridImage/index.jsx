import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ss } from "./styles";
import MasonryList from "react-native-masonry-list";

const image = [
  {
    source: require("@/../assets/images/Cachorro1.png"),
    dimensions: { width: 216, height: 170 },
  },
  {
    source: require("@/../assets/images/cachorro2.png"),
    dimensions: { width: 159, height: 239 },
  },
  {
    source: require("@/../assets/images/cachorro3.png"),
    dimensions: { width: 216, height: 185 },
  },
  {
    source: require("@/../assets/images/cachorro4.png"),
    dimensions: { width: 159, height: 142 },
  },
  {
    source: require("@/../assets/images/cachorro5.png"),
    dimensions: { width: 216, height: 210 },
  },
  {
    source: require("@/../assets/images/cachorro6.png"),
    dimensions: { width: 160, height: 128 },
  },
];

export function GridImage() {
  return (
    <View style={ss.containerfora}>
      <View style={ss.container}>
        <View style={StyleSheet.absoluteFill} />
        <MasonryList
          images={image}
          columns={2}
          spacing={3}
          backgroundColor="#FFF3E8"
          contentContainerStyle={{ padding: 4 }}
          style={{ backgroundColor: "transparent" }}
          customImageComponent={({ source, style }) => (
            <View style={[style, ss.imageWrapper]}>
              <Image
                source={source}
                style={[StyleSheet.absoluteFill, ss.image]}
                resizeMode="cover"
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}
