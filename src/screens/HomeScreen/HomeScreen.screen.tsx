import { View } from "react-native";

import { styles } from "./HomeScreen.style";
import RoundButton from "../../components/RoundButton/RoundButton.component";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <RoundButton text="Where to?" onPress={() => {}} />
    </View>
  );
};

export default HomeScreen;
