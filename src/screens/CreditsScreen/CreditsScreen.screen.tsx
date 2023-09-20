import { ScrollView, Text, View } from "react-native";

import CarbonCreditActivity from "../../components/CarbonCreditActivity/CarbonCreditActivity.component";
import CarbonActivities from "../../states/CarbonActivities.state";
import { styles } from "./CreditsScreen.style";

const CreditsScreen = () => {
  const activities = CarbonActivities((state) => state.activities)

  // Calculating total carbon credits by adding the credits of each activity
  // Credits can't be negative, so it's locked to zero
  const carbonCredits = Math.max(0, activities.reduce((accumulated, activity) => (
    accumulated + activity.credits
  ), 0))

  return (
    <View style={styles.container}>
      <View style={styles.creditsArea}>
        <Text style={styles.carbonCreditsLabel}>Carbon credits</Text>
        <Text style={styles.carbonCreditsValue}>{carbonCredits}</Text>
      </View>

      <View style={styles.activityArea}>
        <Text style={styles.activityLabel}>Activity</Text>

        <ScrollView
          persistentScrollbar
          contentContainerStyle={styles.scrollableActivitiesArea}
        >
          {activities.map((activity, index) => <CarbonCreditActivity {...activity} key={index} />)}
        </ScrollView>
      </View>
    </View>
  );
};

export default CreditsScreen;
