import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
/* import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/native"; */
import axios from "axios";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const ProductScreen = ({ route }) => {
  console.log("route ? ==>", route);

  /*   const route = useRoute(); */
  /* const { id } = route.params; */
  /* console.log(id); */
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [finishLoading, setFinishLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${route.params.id}`
      );
      /*  console.log(response.data.product.brands); */

      setData(response.data.product);
      setisLoading(false);
    };

    fetchData();
  }, []);

  //route.state.routes[1].params.id
  useEffect(() => {
    const storeData = async () => {
      let storage = await AsyncStorage.getItem("userData");
      if (!storage) {
        let dataArray = [
          {
            name: data.product_name_fr,
            brand: data.brands,
            image: data.image_url,
            quality: "excellent",
          },
        ];
        console.log(dataArray);

        let dataString = JSON.stringify(dataArray);
        console.log(dataString);

        AsyncStorage.setItem("userData", dataString);
        setFinishLoading(true);
      }
    };
    if (data.brands) {
      storeData();
    }
  }, [data, isLoading]);

  return !finishLoading ? (
    <ActivityIndicator />
  ) : (
    <>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          paddingBottom: 20,
          borderBottomWidth: 10,
          borderBottomColor: "lightgrey",
        }}
      >
        <View>
          <Image
            style={styles.image}
            source={{ uri: data.image_url }}
            style={{ height: 120, width: 120 }}
          />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.name}> {data.product_name_fr} </Text>
          {/*  <Text style={styles.name}> {data.generic_name} </Text> */}
          <Text style={styles.brands}> {data.brands} </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-between",
        }}
      >
        <Text> Qualités </Text>
        <Text> Pour 100g </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Entypo name="leaf" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ marginBottom: 10 }}> Bio </Text>
            <Text> Produit naturel </Text>
          </View>
        </View>

        <View>
          <AntDesign name="checkcircle" size={24} color="black" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name="fish" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ marginBottom: 10 }}> Protéines </Text>
            <Text> Excellente qualité </Text>
          </View>
        </View>

        <View>
          <Text> {data.nutriments.proteins} </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name="seedling" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ marginBottom: 10 }}> Fibres </Text>
            <Text> Quelques fibres </Text>
          </View>
        </View>

        <View>
          <Text> {data.nutriments.fiber} </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name="seedling" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ marginBottom: 10 }}> Calories </Text>
            <Text> Peu calorique </Text>
          </View>
        </View>

        <View>
          <Text> {data.nutriments.energy_100g} </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name="seedling" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ marginBottom: 10 }}> Calories </Text>
            <Text> Peu calorique </Text>
          </View>
        </View>

        <View>
          <Text> </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name="seedling" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ marginBottom: 10 }}> Calories </Text>
            <Text> Peu calorique </Text>
          </View>
        </View>

        <View>
          <Text> </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    fontSize: 17,
    fontWeight: "bold",
    paddingBottom: 10,
  },

  brands: {
    fontSize: 14,
    color: "grey",
  },

  image: {
    resizeMode: "contain",
    marginRight: 20,
  },
});

export default ProductScreen;
