import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ProductScreen from "./src/screens/ProductScreen";
import ProductDetail from "./src/screens/ProductDetail";
export default function App() {
  return (
    <View style={styles.container}>
      {/*<ProductScreen /> */}
      <ProductDetail />
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
