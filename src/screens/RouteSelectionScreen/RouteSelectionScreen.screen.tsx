import { View, Text } from "react-native";
import MapView from "react-native-maps";

import { styles } from "./RouteSelectionScreen.styles";

const RouteSelectionScreen = () => {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.198609097460825,
          longitude: -45.90697967826549,
          latitudeDelta: 0.06,
          longitudeDelta: 0.06,
        }}
      />
      <View style={styles.routeSelectionContainer}>
        <Text>TEXT</Text>
      </View>
    </View>
  );
};

export default RouteSelectionScreen;
