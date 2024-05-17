import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "./screens/ProductScreen";
import ProductDetail from "./screens/ProductDetail";
import ShoppingCart from "./screens/ShoppingCart";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./Store/cartSlice";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={({ navigation }) => ({
            headerTitleAlign: "center",
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate("Cart")}>
                <Text
                  style={{
                    marginLeft: 5,
                    marginTop: 3,
                    position: "absolute",
                    fontSize: 10,
                    width: 15,
                    height: 15,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: "black",
                    borderStyle: "solid",
                    backgroundColor: "red",
                    color: "white",
                    textAlign: "center",
                    lineHeight: 13,
                  }}
                >
                  {numberOfItems}
                </Text>

                <FontAwesome
                  name="shopping-cart"
                  size={20}
                  style={{ marginTop: 14 }}
                />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Product Details" component={ProductDetail} />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
