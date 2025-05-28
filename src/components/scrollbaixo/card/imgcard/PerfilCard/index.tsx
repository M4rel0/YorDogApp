import { View, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { s } from "@/components/scrollbaixo/card/imgcard/PerfilCard/styles";
import Entypo from "@expo/vector-icons/Entypo";

export function PerfilCard() {
  return (
    <View style={s.container}>
      <View style={s.perf}>
        <Image
          source={require("@/../assets/images/imagemMarcos.png")}
          style={s.img}
          resizeMode="cover"
        />
      </View>
      <View style={s.textContainer}>
        <Text style={s.nome}>Marcos Milos</Text>
        <Text style={s.raca}>chihuahua</Text>
      </View>
    </View>
  );
}
