import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    display: "flex",
    paddingTop: 25,
  },
  topAreaContainer: {
    flex: 1,
  },

  textInput: {
    width: "90%",
    backgroundColor: "#353535",
    borderRadius: 17,
    margin: 5,
    marginBottom: 10,
    height: 60,
    justifyContent: "center",
    paddingLeft: 15,
    fontSize: 17,
    color: "#BEBEBE",
  },
  inputArea: {
    display: "flex",
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  inputAreaHeaderArea: {
    justifyContent: "flex-end",
    flex: 0.18,
    width: "90%",
    padding: 10,
  },
  inputAreaMainArea: {
    flex: 0.82,
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  loginText: {
    color: "#02D06D",
    fontWeight: "bold",
    fontSize: 24,
  },
});
