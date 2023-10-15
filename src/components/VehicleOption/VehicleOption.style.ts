import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#353535",
    justifyContent: "space-between",
    alignContent: "center",
    paddingTop: 15,
    flex: 1,
    margin: 10,
    borderRadius: 18,
    aspectRatio: 1,
  },
  header: {
    marginTop: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  middle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "95%",
    gap: 4,
  },
  creditText: {
    color: "#EF3838",
    fontWeight: "bold",
  },
  headerText: {
    color: "#BEBEBE",
    fontWeight: "bold",
    fontSize: 20,
  },
});
