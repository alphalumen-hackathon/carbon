import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  creditsArea: {
    backgroundColor: "#030303",
    width: "100%",
    height: "25%",
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
    fontWeight: "bold",
  },
  activityArea: {
    backgroundColor: "#0D0D0D",
    width: "100%",
    height: "75%",
  },
  activityLabel: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    padding: 30,
  },
  scrollableActivitiesArea: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
  },
});
