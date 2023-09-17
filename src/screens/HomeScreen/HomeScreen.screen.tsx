import { View, Text } from "react-native";
import { styles } from "./HomeScreen.style";
import RoundButton from "../../components/RoundButton/RoundButton.component";

const HomeScreen = () => {
  return (
      <View style={styles.container}>
        {/* <Text>Home Screen</Text> */}
        <RoundButton text="Where to?" onPress={() => {}}></RoundButton>
      </View>
  );
}

export default HomeScreen;
