import React from "react";
import { StyleSheet, Text, Button, Image, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
/* import { useNavigation } from "@react-navigation/core"; */

function SearchScreen() {
  /*  const navigation = useNavigation(); */
  return (
    <View /* style={{ backgroundColor: "#49C17C" }} */>
      <ActivityIndicator />
      {/*   <Image source={require("../assets/logoyuka.png")} style={styles.logo} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    justifyContent: "center",
    height: 100,
    width: 300,
  },
});

export default SearchScreen;
