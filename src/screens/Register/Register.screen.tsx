import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { styles } from "./Register.style";
import ErrorModal from "../../components/ErrorModal/ErrorModal.component";
import LoginButton from "../../components/LoginButton/LoginButton.component";
import LoginFooter from "../../components/LoginFooter/LoginFooter.component";
import LoginHeader from "../../components/LoginHeader/LoginHeader.component";
import useUserStore from "../../states/User.store";

const RegisterScreen = ({ navigation }: any) => {
  const [usernameText, setUsernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [passwordConfirmationText, setPasswordConfirmationText] = useState("");
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const setSignedIn = useUserStore((state) => state.setSigned);
  const setUsername = useUserStore((state) => state.setUsername);

  const register = async () => {
    if (
      usernameText &&
      passwordText &&
      passwordConfirmationText === passwordText
    ) {
      const data = {
        username: usernameText,
        password: passwordText,
      };

      const response = await fetch(
        "https://carbon-api-production.up.railway.app/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.status === 201) {
        setSignedIn(true);
        setUsername(usernameText);
      }
    } else {
      setErrorModalVisible(true);
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <ErrorModal
        visible={errorModalVisible}
        setVisible={(value: boolean) => setErrorModalVisible(value)}
      />
      <View style={styles.topAreaContainer}>
        <LoginHeader />
        <View style={styles.inputArea}>
          <View style={styles.inputAreaHeaderArea}>
            <Text style={styles.loginText}>Register</Text>
          </View>
          <View style={styles.inputAreaMainArea}>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              textContentType="username"
              autoCapitalize="none"
              autoComplete="username-new"
              autoCorrect={false}
              onChangeText={(newText) => setUsernameText(newText)}
            />
            <TextInput
              style={styles.textInput}
              textContentType="newPassword"
              autoCapitalize="none"
              autoComplete="new-password"
              autoCorrect={false}
              placeholder="Password"
              onChangeText={(newText) => setPasswordText(newText)}
            />
            <TextInput
              style={styles.textInput}
              textContentType="newPassword"
              autoCapitalize="none"
              autoComplete="new-password"
              autoCorrect={false}
              placeholder="Confirm password"
              onChangeText={(newText) => setPasswordConfirmationText(newText)}
            />

            <LoginButton text="Get Started" onPress={() => register()} />
          </View>
        </View>
      </View>
      <LoginFooter
        text="Already have an account?"
        linkText="Login"
        linkOnPress={() => navigation.navigate("Login")}
      />
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
