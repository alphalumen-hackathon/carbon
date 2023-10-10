import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

import FavoriteLocationProps from "./FavoriteLocation.props";
import { styles } from "./FavoriteLocation.styles";

const FavoriteLocation = (props: FavoriteLocationProps) => {
  const { name, distance } = props;

  return (
    <View style={styles.container}>
      <View style={styles.iconTitleArea}>
        <View style={styles.locationEllipse}>
          <Ionicons name="location-outline" size={24} color="#02D06D" />
        </View>
        <Text style={styles.destinationText}>{name}</Text>
      </View>
      <View>
        <Text style={{ color: "#BEBEBE" }}>{distance} km</Text>
      </View>
    </View>
  );
};

export default FavoriteLocation;
