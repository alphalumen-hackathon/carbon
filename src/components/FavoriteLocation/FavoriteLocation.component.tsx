import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

import FavoriteLocationProps from "./FavoriteLocation.props";
import { styles } from "./FavoriteLocation.styles";
import useRouteModalStore, {
  RouteModalType,
} from "../../states/RouteModal.store";

const FavoriteLocation = (props: FavoriteLocationProps) => {
  const { name, distance } = props;
  const setRouteModalType = useRouteModalStore((state) => state.setType);
  const setDestinationCoords = useRouteModalStore(
    (state) => state.setDestinationCoords,
  );
  const loadRoutes = useRouteModalStore((state) => state.loadRoutes);

  const calculateRoutes = () => {
    setDestinationCoords({ latitude: -23.1987619, longitude: -45.9094151 });
    loadRoutes();
    setRouteModalType(RouteModalType.VehicleSelection);
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
