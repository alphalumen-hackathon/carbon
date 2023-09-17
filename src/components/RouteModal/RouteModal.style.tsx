import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 30,
    alignItems: "center",
    height: "50%",
    width: "100%",
    backgroundColor: "white",
  },
  modalActionButton: {
    borderWidth: 2,
    padding: 5,
    flex: 1,
    margin: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  vehicleIconsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    padding: 5,
    borderWidth: 1,
  },
  buttonAreaContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
});
