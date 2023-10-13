import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#030303",
    display: "flex",
    height: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginTop: 25,
  },
  creditsArea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  carbonCreditsLabel: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
  },
  carbonCreditsValue: {
    color: "#02D06D",
    fontSize: 100,
    padding: 10,
    fontWeight: "bold",
  },
  activityArea: {
    gap: 15,
  },
  activityLabel: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 30,
  },
});
