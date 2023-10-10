import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./Home.style";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MapView style={styles.map} />
    </SafeAreaView>
  );
};

export default HomeScreen;
