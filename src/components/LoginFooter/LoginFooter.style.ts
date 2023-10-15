import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bottomText: {
    color: "#BEBEBE",
    fontSize: 20,
  },
  bottomTextGreen: {
    fontSize: 20,
    color: "#02D06D",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  bottomAreaContainer: {
    flex: 0.05,
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 15,
  },
});
