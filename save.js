<Stack.Navigator headerMode="none">
  <Stack.Screen name="Homepage">
    {(props) => (
      <Tab.Navigator
        headerMode="none"
        //tabBarOptions={{
        //  showIcon: true,
        //  showLabel: false,
        //  style: {
        //    backgroundColor: "#47BA77",
        //  },
        //  }}
      >
        <Tab.Screen
          name="Products"
          options={({ route }) => {
            console.log("yololohihyou ==>", route);
            if (route.state.routes.length < 3) {
              return {
                tabBarIcon: () => (
                  <FontAwesome5 name="carrot" size={25} color="black" />
                ),
              };
            } else {
              return null;
            }
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="ProductsScreen">
                {() => <ProductsScreen {...props} />}
              </Stack.Screen>
              <Stack.Screen name="CameraScreen">
                {() => <CameraScreen {...props} />}
              </Stack.Screen>
              <Stack.Screen
                name="ProductScreen"
                options={({ navigation }) => ({
                  title: null,
                  headerLeft: () => (
                    <BackIcon
                      onPress={() => navigation.navigate("CameraScreen")}
                    />
                  ),
                })}
              >
                {() => <ProductScreen {...props} />}
              </Stack.Screen>
              <Stack.Screen name="Favorites">
                {() => <FavoritesScreen {...props} />}
              </Stack.Screen>
            </Stack.Navigator>
          )}
        </Tab.Screen>

        {/*  <Tab.Screen
                    name="Camera"
                    options={{
                      tabBarIcon: () => (
                        <MaterialCommunityIcons
                          name="barcode-scan"
                          size={24}
                          color="black"
                        />
                      ),
                    }}
                  >
                    {(props) => (
                      <Stack.Navigator>
                        <Stack.Screen name="CameraScreen">
                          {() => <CameraScreen {...props} />}
                        </Stack.Screen>
                        <Stack.Screen name="ProductScreen">
                          {() => <ProductScreen {...props} />}
                        </Stack.Screen>
                      </Stack.Navigator>
                    )}
                  </Tab.Screen> */}

        {/* <Tab.Screen
                    name="Favorites"
                    options={{
                      tabBarIcon: () => (
                        <Ionicons
                          name="ios-star-outline"
                          size={24}
                          color="black"
                        />
                      ),
                    }}
                  >
                    {(props) => (
                      <Stack.Navigator>
                        <Stack.Screen name="FavoritesScreen">
                          {() => <FavoritesScreen {...props} />}
                        </Stack.Screen>
                      </Stack.Navigator>
                    )}
                  </Tab.Screen> */}

        <Tab.Screen
          name="Search"
          headerMode="none"
          options={{
            tabBarIcon: () => (
              <Fontisto name="search" size={24} color="black" />
            ),
          }}
        >
          {(props) => (
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="SearchScreen">
                {() => <SearchScreen {...props} />}
              </Stack.Screen>
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    )}
  </Stack.Screen>

  {/* <Stack.Screen name="ProductPreview">
              {(props) => (
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
                    name="back"
                    headerMode="none"
                    options={({ navigation }) => ({
                      tabBarIcon: () => (
                        <BackIcon
                          onPress={() => {
                            console.log("coucou");
                            navigation.navigate("Products");
                          }}
                        />
                      ),
                    })}
                  >
                    {() => (
                      <Stack.Navigator headerMode="none">
                        <Stack.Screen name="ProductsTabScreen">
                          {() => <ProductsScreen {...props} />}
                        </Stack.Screen>
                        
                      </Stack.Navigator>
                    )}
                  </Tab.Screen>
                  <Tab.Screen
                    name="Favorites"
                    options={{
                      tabBarIcon: () => (
                        <Ionicons
                          name="ios-star-outline"
                          size={24}
                          color="black"
                        />
                      ),
                    }}
                  >
                    
                  </Tab.Screen>
                </Tab.Navigator>
              )}
            </Stack.Screen> */}
</Stack.Navigator>;
