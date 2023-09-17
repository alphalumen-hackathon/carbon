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
    shadowColor: "black",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 10,
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
});
