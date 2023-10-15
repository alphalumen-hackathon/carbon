import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E1E",
    display: "flex",
    height: "100%",
    paddingTop: 30,
  },
  creditsArea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  carbonCreditsLabel: {
    color: "white",
    fontSize: 24,
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
