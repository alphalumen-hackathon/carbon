import { View } from "react-native";
// import MapView from "react-native-maps";

import { IHomeScreenProps } from "./HomeScreen.props";
import { styles } from "./HomeScreen.style";
import RoundButton from "../../components/RoundButton/RoundButton.component";

const HomeScreen = (props: IHomeScreenProps) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <RoundButton
        text="Where to?"
        onPress={() => {
          navigation.navigate("Navigation");
        }}
      />
      {/* <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View> */}
    </View>
  );
};

export default HomeScreen;
