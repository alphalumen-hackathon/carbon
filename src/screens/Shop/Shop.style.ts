import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
  margin: {
    margin: 20,
    paddingTop: 20,
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    width: "100%",
    height: "12%",
  },
  balanceContainer: {
    width: "100%",
    height: "16%",
  },
  productsContainer: {
    width: "100%",
    height: "65%",
    justifyContent: "space-between",
  },
  flatList: {
    height: "95%",
    width: "100%",
    flexGrow: 0,
  },
  title: {
    color: "#02D06D",
    width: "100%",
    fontSize: 60,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#BEBEBE",
    width: "100%",
    fontSize: 18,
    fontWeight: "200",
  },
  featuredProductsLabel: {
    color: "#02D06D",
    fontWeight: "bold",
    fontSize: 24,
  },
});
