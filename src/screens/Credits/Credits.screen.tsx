import { SafeAreaView, ScrollView, Text, View } from "react-native";

import { styles } from "./Credits.style";
import CarbonCreditActivity from "../../components/CarbonCreditActivity/CarbonCreditActivity.component";
import Currency from "../../components/Currency/Currency.component";
import useActivitiesStore from "../../states/Activities.store";

const CreditsScreen = () => {
  const activities = useActivitiesStore((state) => state.activities);
  const totalCredits = useActivitiesStore((state) => state.totalCredits);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.creditsArea}>
        <Text style={styles.carbonCreditsLabel}>Carbon credits</Text>
        <Currency
          size={80}
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            gap: 15,
          }}
          value={totalCredits}
        />
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
