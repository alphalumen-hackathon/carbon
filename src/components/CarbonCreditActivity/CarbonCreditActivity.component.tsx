import { Text, View } from "react-native";

import CarbonCreditActivityProps from "./CarbonCreditActivity.props";
import { styles } from "./CarbonCreditActivity.style";

const CarbonCreditActivity = ({
  credits,
  description,
  date,
}: CarbonCreditActivityProps) => {
  // Making the text red if it's negative credit
  const creditsTextColor = credits < 0 ? "#FF5E5E" : "#02D06D";

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.description}>
          {description}
        </Text>
        <Text style={styles.date} adjustsFontSizeToFit numberOfLines={1}>
          {date.toLocaleString().replace(",", "").replace(" ", " • ")}
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.creditsLabel}>Credits</Text>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={[styles.credits, { color: creditsTextColor }]}
        >
          {credits}
        </Text>
      </View>
    </View>
  );
};

export default CarbonCreditActivity;
