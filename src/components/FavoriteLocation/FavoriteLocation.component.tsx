/* eslint-disable @typescript-eslint/no-unused-vars */
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

import FavoriteLocationProps from "./FavoriteLocation.props";
import { styles } from "./FavoriteLocation.styles";
import useRouteStore from "../../states/Route.store";
import useRouteModalStore from "../../states/RouteModal.store";

const FavoriteLocation = (props: FavoriteLocationProps) => {
  const { name, distance } = props;
  const setRouteModalType = useRouteModalStore((state) => state.setModalType);
  const loadRoutes = useRouteStore((state) => state.loadRoutes);

  const calculateRoutes = async () => {
    // setDestinationCoords({ latitude: -22.2572724, longitude: -45.698935 });
    // await loadRoutes();
    // setRouteModalType(RouteModalType.VehicleSelection);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => calculateRoutes()}
    >
      <View style={styles.iconTitleArea}>
        <View style={styles.locationEllipse}>
          <Ionicons name="location-outline" size={24} color="#02D06D" />
        </View>
        <Text style={styles.destinationText}>{name}</Text>
      </View>
      <View>
        <Text style={{ color: "#BEBEBE" }}>{distance} km</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteLocation;
