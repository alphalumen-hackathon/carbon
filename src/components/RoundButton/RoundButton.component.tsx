import { AntDesign } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

import { IRoundButtonProps } from "./RoundButton.props";
import { styles } from "./RoundButton.style";

const RoundButton = (props: IRoundButtonProps) => {
  const { style, onPress, text } = props;

  return (
    <Pressable onPress={onPress} style={[styles.button, style ?? null]}>
      <AntDesign name="search1" size={24} color="black" />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default RoundButton;
