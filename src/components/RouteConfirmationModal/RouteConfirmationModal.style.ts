import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    backgroundColor: "#181818",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    padding: 20,
    alignItems: "center",
  },
  headerArea: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  infoRow: {
    display: "flex",
    flexDirection: "row",
  },

  vehicleContainer: {
    backgroundColor: "#353535",
    justifyContent: "space-around",
    alignContent: "center",
    flex: 1,
    margin: 10,
    borderRadius: 18,
    aspectRatio: 1,
  },
  vehicleHeader: {
    marginTop: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  vehicleHeaderText: {
    color: "#BEBEBE",
    fontWeight: "bold",
    fontSize: 20,
  },
  vehicleMiddle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  destinationInfo: {
    flex: 1.8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 2,
    alignItems: "center",
  },
  locationInfoArea: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  carbonCreditsInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  carbonIconValue: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  locationInfoTextArea: {
    display: "flex",
    flexDirection: "column",
  },
  locationEllipse: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#101010",
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  destinationText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  distanceText: {
    color: "#BEBEBE",
    fontSize: 16,
  },
  confirmationButton: {
    width: "100%",
    height: 63,
    backgroundColor: "#02D06D",
    borderRadius: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  cancelButton: {
    width: "100%",
    height: 45,
    backgroundColor: "#353535",
    marginTop: 10,
    borderRadius: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonArea: {
    width: "95%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 5,
  },
  confirmText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  cancelText: {
    color: "#BEBEBE",
    fontWeight: "bold",
    fontSize: 16,
  },
});
