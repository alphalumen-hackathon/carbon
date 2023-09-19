import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    margin: 5,
    alignItems: "center",
    height: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  mapContainer: {
    width: "90%",
    height: "60%",
    borderWidth: 2,
  },
  routeSelectionContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
    height: "45%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  routeSelectionTitle: {
    margin: 3,
    fontWeight: "bold",
    marginBottom: 25,
  },
});