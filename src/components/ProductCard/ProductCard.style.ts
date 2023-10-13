import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 430,
    borderRadius: 20,
    justifyContent: "flex-end",
  },
  background: {
    backgroundColor: "#070707",
    width: 300,
    height: 400,
    borderRadius: 20,
    alignItems: "center",
  },
  name: {
    color: "white",
    fontSize: 45,
    fontWeight: "bold",
  },
  bottom: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
  tapToExchange: {
    color: "#353535",
  },
  image: {
    width: 400,
    height: 400,
    position: "absolute",
    top: -30,
  },
  touchable: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  priceTag: {
    width: 100,
    height: 40,
    backgroundColor: "#353535",
    position: "absolute",
    bottom: 90,
    right: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
