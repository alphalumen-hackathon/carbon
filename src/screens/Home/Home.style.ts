import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  modal: {
    display: "flex",
    justifyContent: "flex-end",
    margin: 0,
  },
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
  topButton: {
    width: 100,
    height: 5,
    backgroundColor: "#353535",
    borderRadius: 10,
  },
  inputBox: {
    marginTop: 20,
    height: 50,
    width: "85%",
    textAlign: "left",
    paddingLeft: 22,
    borderRadius: 10,
    backgroundColor: "#353535",
    textDecorationColor: "#BEBEBE",
  },
  openModal: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 50,
    backgroundColor: "#181818",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    padding: 20,
  },
});
