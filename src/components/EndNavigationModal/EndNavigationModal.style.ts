import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalView: {
    top: "82%",
    height: "18%",
    width: "100%",
    display: "flex",
    backgroundColor: "#181818",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    padding: 20,
    alignItems: "center",
    gap: 20,
  },
  endButton: {
    width: "95%",
    backgroundColor: "#EF3838",
    height: 55,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
