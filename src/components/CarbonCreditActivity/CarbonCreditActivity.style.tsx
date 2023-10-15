import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: 70,
    backgroundColor: "#070707",
    borderRadius: 8,
    shadowColor: "#777",
    shadowOffset: { width: 5, height: 7 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  right: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 1,
  },
  credits: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  creditsLabel: {
    color: "#D3D3D3",
    fontSize: 16,
  },
  description: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  date: {
    color: "#D3D3D3",
    fontSize: 16,
    marginTop: 5,
  },
});
