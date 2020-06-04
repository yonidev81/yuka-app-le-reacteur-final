import React, { useState, useEffect } from "react";

import {
  AsyncStorage,
  Button,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";

// imports Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StatusBar } from "react-native";

/* import * as SplashScreen from "expo-splash-screen"; */

// icons
import { EvilIcons } from "@expo/vector-icons";

// // imports des containers (screens)
import ProductsScreen from "./Screens/ProductsScreen";
import ProductScreen from "./Screens/ProductScreen";
import FavoritesScreen from "./Screens/FavoritesScreen";
import CameraScreen from "./Screens/CameraScreen";
import SplashScreen from "./Screens/SplashScreen";
import SearchScreen from "./Screens/SearchScreen";
import BackIcon from "./components/BackIcon";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

// Déclaration de constantes/fonctions

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        style: {
          backgroundColor: "#47BA77",
        },
      }}
    >
      <Tab.Screen
        name="ProductsTab"
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="carrot" size={25} color="black" />
          ),
        }}
      >
        {(props) => <ProductsScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: () => <Fontisto name="search" size={24} color="black" />,
        }}
      >
        {(props) => <SearchScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="Favorites"
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-star-outline" size={24} color="black" />
          ),
        }}
      >
        {(props) => <FavoritesScreen {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

function App() {
  const [isLoading, setisLoading] = useState(true); // affichage conditionnel si on a récupéré les data
  const [userData, setUserData] = useState(null); // changer l'état de {headerTitle: props => <ProductsScreen {...props} />}

  const setData = async (data) => {
    if (data) {
      AsyncStorage.setItem("userData", data);
    } else {
      // Sinon je vais vers LogOut
      AsyncStorage.removeItem("userData");
    }

    // setUserData provoque un refresh qui va faire qu'on va passer dans les conditions plus bas (quid leboncoin exo)
    setUserData(data);
  };

  // fonction qui va être appelée une fois au chargement du composant
  useEffect(() => {
    const bootstrapAsync = async () => {
      // fonction va regarder s'il y a une Data au chargement de l'application et va récuperer ce qu'il y a dans l'asyncstorage de getItem
      const userData = await AsyncStorage.getItem("userData");

      setisLoading(false);

      // on fait un setUserData avec ce qu'a récupéré la fonction: soit il y a quelque chose et on met à jour avec la data de l'utilisateur
      // Soit il n'y a rien et le "userData" sera nul, ce qui va provoquer un rafraichissement et on va repasser dans les conditions (on fait cela une fois au chargement de l'app)

      setUserData(userData);
    };

    bootstrapAsync();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar hidden={true} />
        {isLoading ? (
          <Stack.Navigator>
            <Stack.Screen name="Splash">{() => <SplashScreen />}</Stack.Screen>
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="ProductsScreen" options={{ title: "" }}>
              {(props) => <HomeTabs {...props} />}
            </Stack.Screen>
            <Stack.Screen name="CameraScreen" options={{ title: "" }}>
              {(props) => <CameraScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen
              name="ProductScreen"
              options={({ navigation }) => ({
                title: null,
                headerStyle: {
                  backgroundColor: "#47BA77",
                },
                headerLeft: () => (
                  <BackIcon
                    onPress={() => navigation.navigate("CameraScreen")}
                  />
                ),
              })}
            >
              {(props) => <ProductScreen {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
