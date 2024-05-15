import { FlatList, Image, StyleSheet, Pressable } from "react-native";
import products from "../data/products";
import { useNavigation } from "@react-navigation/native";

const ProductScreen = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("Product Details")}
          style={styles.itemcontainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemcontainer: {
    width: "50%",
    padding: 1,
  },
});

export default ProductScreen;
