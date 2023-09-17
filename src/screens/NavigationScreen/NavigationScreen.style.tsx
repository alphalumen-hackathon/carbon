import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  inputContainer: {
    display: "flex",
    padding: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.02)",
    borderBottomWidth: 1,
  },
  textInput: {
    margin: 5,
  },
  locationScrollView: {
    width: "100%",
    padding: 5,
  },
  locationScrollViewContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  commonLocationsTitleContainer: {
    display: "flex",
    margin: 4,
    borderWidth: 2,
    width: "98%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
