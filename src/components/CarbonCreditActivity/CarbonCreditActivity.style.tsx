import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
		height: 70,
		backgroundColor: "#1E1E1E",
		borderRadius: 8,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
  },
	left: {
		height: "100%",
		width: "60%",
		display: "flex",
		justifyContent: "center",
		marginLeft: 15,
	},
	right: {
		height: "100%",
		width: "30%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderLeftWidth: 1,
	},
	credits: {
		fontSize: 30,
		color: "white",
		fontWeight: "bold",
	},
	creditsLabel: {
		color: "#D3D3D3",
		fontSize: 10,
	},
	description: {
		color: "white",
		fontWeight: "bold",
		fontSize: 24,
	},
	date: {
		color: "#D3D3D3",
		fontSize: 15,
		marginTop: 5,
	}
});
