import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function BackIcon({ onPress }) {
  return (
    <TouchableOpacity style={styles.back} onPress={onPress}>
      <FontAwesome name="arrow-circle-left" size={24} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  back: {
    marginLeft: 20,
  },
});
