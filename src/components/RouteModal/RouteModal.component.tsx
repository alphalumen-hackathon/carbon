import { Pressable, Text, View } from "react-native";

import { IRouteModalProps } from "./RouteModal.props";
import { styles } from "./RouteModal.style";

const RouteModal = (props: IRouteModalProps) => {
  const { closeModalFunction } = props;

  return (
    <View style={styles.modalContainer}>
      <Text style={{ fontWeight: "bold" }}>FROM LOCATION / TO LOCATION</Text>
      <View style={styles.vehicleIconsContainer}>
        {props.routeData.vehicleIconsData}
      </View>

      <View style={styles.buttonAreaContainer}>
        <Pressable
          onPress={() => closeModalFunction(false)}
          style={styles.modalActionButton}
        >
          <Text style={{ fontWeight: "bold" }}>Close</Text>
        </Pressable>
        <Pressable
          onPress={() => closeModalFunction(false)}
          style={styles.modalActionButton}
        >
          <Text style={{ fontWeight: "bold" }}>Select Route</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RouteModal;
