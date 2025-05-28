import { View, Text } from "react-native";

import { s } from "@/components/scrollbaixo/card/styles";
import { Footercard } from "./footercard";
import { Imgcard } from "./imgcard";
import { Emotecard } from "./emotecard";
export function Card() {
  return (
    <View style={s.margin}>
      <View style={s.container}>
        <Imgcard />
        <Emotecard />
        <Footercard />
      </View>
    </View>
  );
}
