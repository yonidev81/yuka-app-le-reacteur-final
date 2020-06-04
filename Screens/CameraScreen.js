import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/core";

/* import { NavigationContainer } from "@react-navigation/native"; */

function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  /*   console.log(navigation); */
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const HandleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(data);
    /* alert(`Bar code with type ${type} and data ${data} has been scanned!`); */
    navigation.navigate("ProductScreen", {
      id: data,
    });
  };

  // navigation.navigate("ProductScreen")
  /*  console.log(
      `Bar code with type ${type} and data ${data} has been scanned!` */

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {/* <TouchableOpacity
        style={{
          backgroundColor: "darkmagenta",
          height: 100,
          width: 100,
          zIndex: 44,
        }}
        onPress={() =>
          navigation.navigate(
            "ProductPreview",
            {
              params: {
                id: "Ceci sera l'id",
                screen: "ProductPreviewTabScreen",
              },
              screen: "back",
            }
            // { screen: "ProductPreviewTabScreen", id: "Ceci sera l'id" }
          )
        }
      >
        <Text>CAMERAAAAAA</Text>
      </TouchableOpacity> */}
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : HandleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button
          style={styles.scan}
          title={"Tap to Scan Again"}
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  camera: {
    justifyContent: "center",
    backgroundColor: "#E67F22",
  },

  /* scan: {
    backgroundColor: "darkmagenta",
    height: 100,
    width: 50,
    marginTop: 50,
  }, */
});

export default CameraScreen;
