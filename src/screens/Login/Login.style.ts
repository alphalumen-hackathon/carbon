import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    display: "flex",
    paddingTop: 25,
  },
  topAreaContainer: {
    flex: 0.8,
  },
  bottomAreaContainer: {
    flex: 0.3,
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 15,
  },
  titleArea: {
    flex: 0.25,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 10,
  },
  subtitle: {
    color: "#BEBEBE",
    fontSize: 20,
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
  confirmButton: {
    height: 70,
    backgroundColor: "#02D06D",
    width: "90%",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
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
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  bottomText: {
    color: "#BEBEBE",
    fontSize: 19,
  },
  bottomTextGreen: {
    fontSize: 20,
    color: "#02D06D",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
