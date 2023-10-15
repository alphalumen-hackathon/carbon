import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  infoColumn: {
    flex: 1,
  },
  followColumn: {
    flex: 0.6,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  topInfoArea: {
    display: "flex",
    flexDirection: "row",
  },
  userText: {
    color: "white",
    fontWeight: "normal",
    fontSize: 16,
  },
  bottomInfoArea: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    right: 2,
  },
});
