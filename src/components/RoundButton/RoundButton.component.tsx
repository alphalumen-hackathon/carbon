import { Pressable, Text } from "react-native";
import { IRoundButtonProps } from "./RoundButton.props";
import { styles } from "./RoundButton.style";

const RoundButton = (props: IRoundButtonProps) => {
  const { style, onPress, text } = props;

  return (
    <Pressable onPress={onPress} style={[styles.button, style?? null]}>
      <Text>{text}</Text>
    </Pressable>
  );
}

export default RoundButton;
