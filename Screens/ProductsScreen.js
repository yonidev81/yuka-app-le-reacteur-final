import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ProductsScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.scan}>
      <MaterialCommunityIcons
        name="barcode-scan"
        size={40}
        color="black"
        onPress={() => {
          navigation.navigate("CameraScreen");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  products: {
    alignItems: "center",
    justifyContent: "center",
  },

  scan: {
    marginLeft: 30,
    position: "absolute",
    bottom: 0,
    right: 20,
    marginBottom: 60,
    marginRight: 30,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ff9234",
  },
});

export default ProductsScreen;
