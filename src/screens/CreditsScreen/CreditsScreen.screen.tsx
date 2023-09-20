import { SafeAreaView, ScrollView, Text, View } from "react-native";

import { styles } from "./CreditsScreen.style";
import CarbonCreditActivity from "../../components/CarbonCreditActivity/CarbonCreditActivity.component";
import CarbonActivities from "../../states/CarbonActivities.state";
import { useEffect } from 'react';

const CreditsScreen = () => {
  const activities = CarbonActivities((state) => state.activities);
  const create = CarbonActivities((state) => state.create);

  useEffect(() => {
    create("foo", 15, new Date());
    create("bar", 10, new Date());
    create("bar", 10, new Date());
    create("bar", 10, new Date());
    create("bar", 10, new Date());
    create("bar", 1, new Date());
    create("bar", 10, new Date());
    create("bar", 10, new Date());
    create("bar", 10, new Date());
    create("bar", 10, new Date());
    create("bar", 10, new Date());
    create("bar", 10, new Date());
    create("bar", 10, new Date());
    create("bar", 10, new Date());
    create("bar", 10, new Date());
  }, []);

  // Calculating total carbon credits by adding the credits of each activity
  // Credits can't be negative, so it's locked to zero
  const carbonCredits = activities.reduce(
    (accumulated, activity) => accumulated + activity.credits,
    0,
  );
  const creditsTextColor = carbonCredits < 0 ? "#FF5E5E" : "#02D06D";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.creditsArea}>
        <Text style={styles.carbonCreditsLabel}>Carbon credits</Text>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={[styles.carbonCreditsValue, { color: creditsTextColor }]}
        >
          {carbonCredits}
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
