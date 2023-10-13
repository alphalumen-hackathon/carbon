import { View, Text, TextInput } from "react-native";

import { styles } from "./Login.style";
import LoginButton from "../../components/LoginButton/LoginButton.component";
import LoginFooter from "../../components/LoginFooter/LoginFooter.component";
import LoginHeader from "../../components/LoginHeader/LoginHeader.component";

const LoginScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.topAreaContainer}>
        <LoginHeader />
        <View style={styles.inputArea}>
          <View style={styles.inputAreaHeaderArea}>
            <Text style={styles.loginText}>Login</Text>
          </View>
          <View style={styles.inputAreaMainArea}>
            <TextInput style={styles.textInput} placeholder="Username" />
            <TextInput style={styles.textInput} placeholder="Password" />
            <LoginButton text="Get In" />
          </View>
        </View>
      </View>
      <LoginFooter
        text="New to Carbon?"
        linkText="Register"
        linkOnPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

export default LoginScreen;
