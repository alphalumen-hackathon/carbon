import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalView: {
    top: "55%",
    height: "45%",
    display: "flex",
    backgroundColor: "#181818",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    padding: 20,
    alignItems: "center",
  },
  headerArea: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#02D06D",
    fontWeight: "bold",
    fontSize: 16,
  },
  scrollContainer: {
    width: "100%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
});
