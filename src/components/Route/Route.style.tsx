import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  carbonDisplayColumn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  vehicleTypeAndShowMoreColumn: {
    display: "flex",
    flexDirection: "column",
  },
  externContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#dbdbdb",
    margin: 5,
  },
  vehicleIconsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
});
