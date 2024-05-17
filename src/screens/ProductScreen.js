import { FlatList, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../Store/productSlice";

const ProductScreen = () => {
  const products = useSelector((state) => state.products.products);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            //update selected products
            dispatch(productsSlice.actions.selectedProduct(item.id));

            navigation.navigate("Product Details");
          }}
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
