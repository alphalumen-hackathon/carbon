import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalView: {
    top: "60%",
    height: "40%",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#181818",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    padding: 20,
    alignItems: "center",
  },
  inputBox: {
    marginTop: 20,
    marginBottom: 10,
    height: "20%",
    width: "90%",
    textAlign: "left",
    paddingLeft: 22,
    borderRadius: 10,
    backgroundColor: "#353535",
    textDecorationColor: "#BEBEBE",
    justifyContent: "center",
  },

  favoriteLocationArea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
  },
});
