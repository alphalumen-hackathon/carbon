import { Entypo } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";

import { styles } from "./CommonLocation.style";

const CommonLocation = () => {
  return (
    <Pressable style={styles.container} onPress={() => console.log("LOG")}>
      <View>
        <Entypo name="location-pin" size={24} color="black" />
      </View>
      <View style={styles.nameAdressContainer}>
        <Text style={styles.nameText}>Name</Text>
        <Text>Address</Text>
      </View>
    </Pressable>
  );
};

export default CommonLocation;
