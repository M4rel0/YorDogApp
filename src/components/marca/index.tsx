import { View, Text, Image } from "react-native";

import { s } from "./styles";
import Svg, { Path } from "react-native-svg";

export function Marca() {
  return (
    <View style={s.container}>
      <Image
        source={require("../../../assets/images/tituloMarca.png")}
        style={s.imagem}
      />
    </View>
  );
}

export function MarcaMarrom() {
  return (
    <View style={s.container2}>
      <Image
        source={require("../../../assets/images/tituloMarcaMarrom.png")}
        style={s.imagem}
      />
    </View>
  );
}
