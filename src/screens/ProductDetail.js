import {
  View,
  Image,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import products from "../data/products";
import { useSelector } from "react-redux";
const ProductDetail = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const { width } = useWindowDimensions();
  const addToCard = () => [console.warn("ikram")];
  return (
    <View>
      <ScrollView>
        {/*Image Carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          {/*Title*/}
          <Text style={styles.title}>{product.name}</Text>

          {/*Price*/}
          <Text style={styles.price}>${product.price}</Text>

          {/*Description*/}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable onPress={addToCard} style={styles.btn}>
        <Text style={styles.btnTxt}>Add to Cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500s",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "300",
  },
  btn: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  btnTxt: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
