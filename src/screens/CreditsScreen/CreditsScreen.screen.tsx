import { ScrollView, Text, View } from "react-native";

import { styles } from "./CreditsScreen.style";
import CarbonCreditActivity from "../../components/CarbonCreditActivity/CarbonCreditActivity.component";

const CreditsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.creditsArea}>
        <Text style={styles.carbonCreditsLabel}>Carbon credits</Text>
        <Text style={styles.carbonCreditsValue}>520</Text>
      </View>

      <View style={styles.activityArea}>
        <Text style={styles.activityLabel}>Activity</Text>

        <ScrollView
          persistentScrollbar
          contentContainerStyle={styles.scrollableActivitiesArea}
        >
          <CarbonCreditActivity
            credits={50}
            description="Activity"
            date={new Date()}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default CreditsScreen;
