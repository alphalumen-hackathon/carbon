import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    width: "95%",
    padding: 6,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 6,
  },
  nameAdressContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 5,
    padding: 5,
    flexGrow: 1,
  },
  nameText: {
    fontWeight: "bold",
  },
});
