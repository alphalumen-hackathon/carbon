import { ScrollView, Text, View } from "react-native";

import { styles } from "./CreditsScreen.style";

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
        />
      </View>
    </View>
  );
};

export default CreditsScreen;
