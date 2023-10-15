import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 75,
    paddingBottom: 15,
    backgroundColor: "#0A0A0A",
    justifyContent: "center",
    alignItems: "center",
  },
  margin: {
    width: "80%",
    height: "70%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  unselected: {
    backgroundColor: "#161616",
    height: "100%",
    aspectRatio: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  selected: {
    width: "32%",
    height: "100%",
    backgroundColor: "#091E14",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 8,
  },
  routeName: {
    color: "white",
    paddingRight: "20%",
    fontWeight: "bold",
  },
  selectedSvg: {
    marginLeft: "10%",
  },
});

export default styles;
