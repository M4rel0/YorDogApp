import { ImageBackground, StyleSheet, View, Text } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    height: 0,
    backgroundColor: "rgb(153, 57, 57)",
    flexDirection: "row",
    zIndex: 1,
  },
  perf: {
    marginTop: 12,
    marginLeft: 12,
    width: 54,
    height: 54,
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 0,
    borderColor: "black",
    marginRight: 10,
    zIndex: 1,
  },
  img: {
    width: 54,
    height: 54,
  },
  textContainer: {
    height: 60,
    width: 260,
    backgroundColor: "transparent",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 0,
    padding: 0,
    marginTop: 9,
  },
  nome: {
    flexDirection: "column",
    color: "white",
    maxWidth: 200,
    fontSize: 17,
    fontWeight: "600",

    backgroundColor: "rgba(255, 255, 255, 0.03)",
  },

  raca: {
    color: "white",
    flexDirection: "column",

    backgroundColor: "rgba(255, 255, 255, 0.03)",
  },
  icon: {
    backgroundColor: "transparent",
    justifyContent: "center",

    flex: 1,
  },
  iconP: { alignSelf: "flex-end", marginRight: 10 },
});
