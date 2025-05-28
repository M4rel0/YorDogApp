import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: "0%",
    height: 40,
    width: "100%",
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },

  imagemporf: {
    width: 35,
    height: 35,
    borderRadius: 30,
  },
  comentarioText: {
    color: "white",
    opacity: 0.6,
  },
  comentario: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  emogi: {
    flexDirection: "row",
    gap: 10,
  },
  tamanho: {
    height: 20,
    width: 20,
    fontSize: 17,
  },
});
