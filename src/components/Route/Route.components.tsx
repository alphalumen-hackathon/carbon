import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";

import { styles } from "./Route.style";

const Route = () => (
  <Pressable style={styles.externContainer}>
    <View style={styles.container}>
      <View>
        <FontAwesome5 name="car-side" size={24} color="black" />
      </View>
      <View style={styles.carbonDisplayColumn}>
        <MaterialIcons name="attach-money" size={24} color="black" />
        <Text>-50</Text>
      </View>
    </View>
    <View style={{ marginTop: 8 }}>
      <Text>Show More...</Text>
    </View>
  </Pressable>
);

export default Route;
