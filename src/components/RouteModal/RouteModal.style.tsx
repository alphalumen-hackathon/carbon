import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "100%",
    backgroundColor: "white",
  },
  modalCloseButton: {
    padding: 10,
    backgroundColor: "red",
  },
  vehicleIconsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
});
