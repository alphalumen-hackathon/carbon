import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
  margin: {
    margin: 20,
    marginBottom: 5,
    paddingTop: 20,
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  balanceContainer: {
    width: "100%",
    height: "16%",
  },
  productsContainer: {
    width: "100%",
    height: "65%",
  },
  flatList: {
    height: "100%",
    width: "100%",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#BEBEBE",
    fontSize: 20,
    fontWeight: "200",
  },
  featuredProductsLabel: {
    color: "#02D06D",
    fontWeight: "bold",
    fontSize: 24,
  },
});
