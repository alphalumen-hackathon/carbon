import { View, Text, TextInput } from "react-native";

import { styles } from "./Register.style";
import LoginButton from "../../components/LoginButton/LoginButton.component";
import LoginFooter from "../../components/LoginFooter/LoginFooter.component";
import LoginHeader from "../../components/LoginHeader/LoginHeader.component";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topAreaContainer}>
        <LoginHeader />
        <View style={styles.inputArea}>
          <View style={styles.inputAreaHeaderArea}>
            <Text style={styles.loginText}>Register</Text>
          </View>
          <View style={styles.inputAreaMainArea}>
            <TextInput style={styles.textInput} placeholder="Username" />
            <TextInput style={styles.textInput} placeholder="Password" />
            <TextInput
              style={styles.textInput}
              placeholder="Confirm password"
            />

            <LoginButton text="Get Started" />
          </View>
        </View>
      </View>
      <LoginFooter text="Already have an account?" linkText="Login" />
    </View>
  );
};

export default RegisterScreen;
