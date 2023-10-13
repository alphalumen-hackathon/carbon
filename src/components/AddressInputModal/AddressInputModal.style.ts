import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalView: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "#181818",
    padding: 30,
    alignItems: "center",
  },
  inputBoxContainer: {
    width: "100%",
    height: "50%",
    maxHeight: "50%",
    display: "flex",
  },
  inputBoxTextArea: {
    backgroundColor: "#353535",
    height: 50,
    color: "white",
  },
  fromText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#02D06D",
  },
  inputArea: {
    width: "100%",
    height: "80%",
    gap: 15,
    marginTop: 20,
  },
  touchable: {
    padding: 10,
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  row: {
    backgroundColor: "#353535",
    color: "white",
  },
  description: {
    color: "white",
  },
});
