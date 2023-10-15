import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    borderRadius: 20,
    justifyContent: "flex-end",
    flex: 1,
  },
  background: {
    backgroundColor: "#070707",
    aspectRatio: 0.95,
    borderRadius: 20,
    alignItems: "center",
    margin: 10,
  },
  name: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  bottom: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
    zIndex: 10,
  },
  tapToExchange: {
    color: "#353535",
  },
  image: {
    flex: 1,
    width: "100%",
    height: undefined,
    aspectRatio: 1.1,
    zIndex: 5,
    overflow: "visible",
    bottom: 10,
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
    zIndex: 10,
  },
});

export default styles;
