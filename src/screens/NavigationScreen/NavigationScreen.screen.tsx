import { Keyboard, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { styles } from "./NavigationScreen.style";
import LocationInput from "../../components/LocationInput/LocationInput.component";

const NavigationScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LocationInput placeholder="Location" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NavigationScreen;
