import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

import { s } from "./styles";

const Loader = () => {
  return (
    <View style={styles.container}>
      <View>
        <ActivityIndicator size="large" color="#60a5fa" />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
  },
};

export default Loader;
