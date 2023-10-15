import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalView: {
    bottom: 0,
    height: "40%",
    width: "100%",
    display: "flex",
    backgroundColor: "#101010",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    padding: 50,
    paddingBottom: 20,
    paddingTop: 20,
    alignItems: "center",
    position: "absolute",
    justifyContent: "space-between",
  },
  modalTopButton: {
    width: 100,
    height: 5,
    backgroundColor: "#353535",
    borderRadius: 10,
  },
  information: {
    maxHeight: "55%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statement: {
    width: "55%",
    justifyContent: "space-between",
  },
  image: {
    width: "40%",
    aspectRatio: 1,
    backgroundColor: "#353535",
    borderRadius: 15,
  },
  buttonArea: {
    width: "100%",
    height: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 5,
    justifyContent: "space-between",
  },
  confirmationButton: {
    width: "100%",
    height: "55%",
    backgroundColor: "#02D06D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  cancelButton: {
    width: "100%",
    height: "35%",
    backgroundColor: "#353535",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  confirmText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  cancelText: {
    color: "#BEBEBE",
    fontWeight: "bold",
    fontSize: 20,
  },
  productName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  values: {
    width: "100%",
    height: "60%",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  statementLine: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statementLineTitle: {
    color: "white",
    fontSize: 16,
  },
  divisor: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#353535",
    borderRadius: 50,
  },
});
