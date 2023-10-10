import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#5E5E5E",
    paddingBottom: 20,
  },
  iconTitleArea: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  locationEllipse: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#101010",
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  destinationText: {
    fontWeight: "bold",
    color: "white",
  },
});
