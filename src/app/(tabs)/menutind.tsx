import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { Marca, MarcaMarrom } from "@/components/marca";
import { useFonts } from "expo-font";
import { Pesquisa } from "@/components/pesquisa";
import { GridImage } from "@/components/gridImage";

export default function Menutind() {
  return (
    <View style={styles.container}>
      <MarcaMarrom />
      <View style={styles.imgText}>
        <Image
          source={require("@/../assets/images/Encontre seu parceiro ideal faça novos Aumigo.png")}
          style={styles.img}
        />

        <Image
          source={require("@/../assets/images/CachorrosFoto.png")}
          style={styles.caFT}
        />

        <Pesquisa />
        <GridImage />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF3E8",
    padding: 0,

    margin: 0,
  },
  imgText: {
    height: 128,
    backgroundColor: "#FFE7DB",
    position: "relative",
  },
  img: {
    resizeMode: "cover",

    marginTop: 16,
    marginLeft: 30,
    borderWidth: 0,
    justifyContent: "center",
    alignContent: "center",
  },
  caFT: {
    position: "absolute",
    right: -70,
    top: -12,
    zIndex: 2,
  },
});
