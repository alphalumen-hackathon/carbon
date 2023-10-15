import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#181818",
    paddingTop: 35,
    padding: 20,
    paddingBottom: 30,
  },
  headerArea: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    marginTop: 5,
  },
  socialText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  subtitle: {
    color: "white",
    fontSize: 16,
  },
  scrollAreaContainer: {
    display: "flex",
    width: "100%",
    height: "90%",
  },
  scrollContainer: {
    flex: 1,
    padding: 2,
    paddingBottom: 4,
  },
  topAreaText: {
    color: "#02D06D",
    fontWeight: "bold",
    fontSize: 20,
  },
  topAreaContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#BEBEBE",
    paddingBottom: 3,
  },
  scrollContainerView: {
    paddingTop: 8,
    gap: 20,
  },
});
