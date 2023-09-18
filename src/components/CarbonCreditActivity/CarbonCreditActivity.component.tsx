import { Text, View } from "react-native";
import ICarbonCreditActivityProps from "./CarbonCreditActivity.props";
import { styles } from "./CarbonCreditActivity.style";

const CarbonCreditActivity = ({ credits, description, date }: ICarbonCreditActivityProps) => {
	// Making the text red if it's negative credit
	const creditsTextColor = credits < 0 ? "#FF5E5E" : "white";
	
	return (
		<View style={styles.container}>
			<View style={styles.left}>
				<Text style={styles.description}>{description}</Text>
				<Text style={styles.date}>{date.toLocaleString().replace(" ", " • ")}</Text>
			</View>
			<View style={styles.right}>
				<Text style={styles.creditsLabel}>Credits</Text>
				<Text style={[styles.credits, { color: creditsTextColor }]}>{credits}</Text>
			</View>
		</View>
	)
}



export default CarbonCreditActivity