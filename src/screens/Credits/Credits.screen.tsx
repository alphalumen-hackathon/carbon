import { SafeAreaView, ScrollView, Text, View } from "react-native";

import { styles } from "./Credits.style";
import CarbonCreditActivity from "../../components/CarbonCreditActivity/CarbonCreditActivity.component";
import useActivitiesStore from "../../states/Activities.store";

const CreditsScreen = () => {
  const activities = useActivitiesStore((state) => state.activities);
  const totalCredits = useActivitiesStore((state) => state.totalCredits);

  const creditsTextColor = totalCredits < 0 ? "#FF5E5E" : "#02D06D";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.creditsArea}>
        <Text style={styles.carbonCreditsLabel}>Carbon credits</Text>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={[styles.carbonCreditsValue, { color: creditsTextColor }]}
        >
          {totalCredits}
        </Text>
      </View>

      <ScrollView>
        <Text style={styles.activityLabel}>Activity</Text>

        <View style={styles.activityArea}>
          {activities.map((activity, index) => (
            <CarbonCreditActivity {...activity} key={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreditsScreen;
