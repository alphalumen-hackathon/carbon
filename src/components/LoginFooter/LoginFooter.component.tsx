import { View, Text } from "react-native";

import LoginFooterProps from "./LoginFooter.props";
import { styles } from "./LoginFooter.style";

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
