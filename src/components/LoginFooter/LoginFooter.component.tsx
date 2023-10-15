import { View, Text, Pressable } from "react-native";

import LoginFooterProps from "./LoginFooter.props";
import { styles } from "./LoginFooter.style";

const LoginFooter = (props: LoginFooterProps) => {
  const { text, linkText, linkOnPress } = props;

  return (
    <View style={styles.bottomAreaContainer}>
      <Text style={styles.bottomText}>{text}</Text>
      <Pressable onPress={linkOnPress}>
        <Text style={styles.bottomTextGreen}>{linkText}</Text>
      </Pressable>
    </View>
  );
};

export default LoginFooter;
