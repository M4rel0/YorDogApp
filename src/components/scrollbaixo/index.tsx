import { View, Text, ScrollView } from "react-native";
import { s } from "@/components/scrollbaixo/styles";
import { Card } from "./card";

export function Scrollbaixo() {
  return (
    <View style={s.container}>
      <ScrollView style={s.scrollwiew}>
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}
