import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  modalContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalErrorArea: {
    width: "80%",
    height: "30%",
    backgroundColor: "#101010",
    padding: 20,
    borderRadius: 20,
  },
  modalErrorText: {
    color: "white",
    flex: 2,
    textAlign: "center",
    fontSize: 20,
  },
  modalButton: {
    backgroundColor: "#353535",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
