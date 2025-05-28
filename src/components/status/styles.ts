import { StyleSheet } from "react-native";
import { styles } from "../input/styles";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    maxHeight: "12%",
    flexDirection: "row",
    padding: 10,
    gap: 10,
    backgroundColor: "rgb(107, 126, 48)",
    marginTop: 0,
  },
  storys: {
    width: 70,
    height: 70,
    borderRadius: "100%",
    backgroundColor: "rgb(188, 109, 123)",
    borderWidth: 1,
    borderBlockColor: "black",
    marginRight: 10,
  },
  storysP: {
    width: 70,
    height: 70,
    borderRadius: "100%",
    backgroundColor: "rgb(114, 62, 72)",
    marginRight: 10,
  },
});
