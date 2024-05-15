import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ProductScreen from "./src/screens/ProductScreen";
import ProductDetail from "./src/screens/ProductDetail";
import ShoppingCart from "./src/screens/ShoppingCart";
export default function App() {
  return (
    <View style={styles.container}>
      {/*<ProductScreen /> */}
      {/* <ProductDetail />*/}
      <ShoppingCart />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
