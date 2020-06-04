import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

function FavoritesScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text> Favorites products </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProductsScreen");
        }}
      >
        <Text style={styles.splash}> Go to Home Page </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavoritesScreen;
