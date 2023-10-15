import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#070707",
    paddingLeft: "7%",
    paddingRight: "7%",
    borderRadius: 15,

    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    height: "50%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  thinText: {
    fontSize: 24,
    fontWeight: "300",
    color: "#02D06D",
  },
  balance: {
    fontWeight: "bold",
    color: "#02D06D",
  },
});
