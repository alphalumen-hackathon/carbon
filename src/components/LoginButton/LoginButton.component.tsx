import { TouchableOpacity, Text } from "react-native";

import LoginButtonProps from "./LoginButton.props";
import { styles } from "./LoginButton.style";

const LoginButton = (props: LoginButtonProps) => {
  const { text, onPress } = props;

  return (
    <TouchableOpacity style={styles.confirmButton} onPress={() => onPress()}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
