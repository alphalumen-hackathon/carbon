import { Entypo } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";

import { ICommonLocationProps } from "./CommonLocation.props";
import { styles } from "./CommonLocation.style";

const CommonLocation = (props: ICommonLocationProps) => {
  const { name, address } = props;

  return (
    <Pressable style={styles.container} onPress={() => console.log("LOG")}>
      <View>
        <Entypo name="location-pin" size={24} color="black" />
      </View>
      <View style={styles.nameAdressContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text>{address}</Text>
      </View>
    </Pressable>
  );
};

export default CommonLocation;
