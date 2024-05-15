import { FlatList, View, StyleSheet, Text, Pressable } from "react-native";
import CartListItem from "../components/CartListItem";
import card from "../data/cart";

const shopingCartTotal = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.txt}>SubTotal</Text>
      <Text style={styles.txt}>410,00 $</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.txt}>SubTotal</Text>
      <Text style={styles.txt}>10,00 $</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.txtBold}>Total</Text>
      <Text style={styles.txtBold}>420,00 $</Text>
    </View>
  </View>
);
const ShoppingCart = () => {
  return (
    <>
      <FlatList
        style={{ marginTop: 25 }}
        data={card}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={shopingCartTotal}
      />
      <Pressable style={styles.btn}>
        <Text style={styles.btnTxt}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  txt: {
    fontSize: 16,
    color: "gray",
  },
  txtBold: {
    fontSize: 16,
    fontWeight: "500",
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

export default ShoppingCart;
