import { Keyboard, View } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import { INavigationScreenProps } from "./NavigationScreen.props";
import { styles } from "./NavigationScreen.style";
import CommonLocation from "../../components/CommonLocation/CommonLocation.component";
import LocationInput from "../../components/LocationInput/LocationInput.component";

const NavigationScreen = (props: INavigationScreenProps) => {
  const { navigation } = props;

  const onPressLocation = () => navigation.navigate("RouteSelection");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <LocationInput placeholder="From" containerStyle={styles.textInput} />
          <LocationInput placeholder="To" containerStyle={styles.textInput} />
        </View>
        <ScrollView
          style={styles.locationScrollView}
          contentContainerStyle={styles.locationScrollViewContent}
        >
          <CommonLocation
            name="Name"
            address="Address"
            onPress={onPressLocation}
          />
          <CommonLocation
            name="Name"
            address="Address"
            onPress={onPressLocation}
          />
          <CommonLocation
            name="Name"
            address="Address"
            onPress={onPressLocation}
          />
          <CommonLocation
            name="Name"
            address="Address"
            onPress={onPressLocation}
          />
          <CommonLocation
            name="Name"
            address="Address"
            onPress={onPressLocation}
          />
          <CommonLocation
            name="Name"
            address="Address"
            onPress={onPressLocation}
          />
          <CommonLocation
            name="Name"
            address="Address"
            onPress={onPressLocation}
          />
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NavigationScreen;
