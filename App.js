import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navigation from "./src/Navigation";

import { Provider } from "react-redux";
import { store } from "./src/Store/Store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />

        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
