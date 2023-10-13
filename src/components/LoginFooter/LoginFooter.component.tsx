import { View, Text } from "react-native";

import { styles } from "./LoginFooter.style";
import LoginFooterProps from "./LoginFooter.props";

const LoginFooter = (props: LoginFooterProps) => {
  const { text, linkText } = props;

  return (
    <View style={styles.bottomAreaContainer}>
      <Text style={styles.bottomText}>{text}</Text>
      <Text style={styles.bottomTextGreen}>{linkText}</Text>
    </View>
  );
};

export default LoginFooter;
