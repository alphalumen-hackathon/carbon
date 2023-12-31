import { useRef, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { styles } from "./Login.style";
import ErrorModal from "../../components/ErrorModal/ErrorModal.component";
import LoginButton from "../../components/LoginButton/LoginButton.component";
import LoginFooter from "../../components/LoginFooter/LoginFooter.component";
import LoginHeader from "../../components/LoginHeader/LoginHeader.component";
import { getLogs } from "../../http/requests";
import useActivitiesStore from "../../states/Activities.store";
import useUserStore from "../../states/User.store";

const LoginScreen = ({ navigation }: any) => {
  const [usernameText, setUsernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const setSignedIn = useUserStore((state) => state.setSigned);
  const setUsername = useUserStore((state) => state.setUsername);
  const createActivity = useActivitiesStore((state) => state.create);
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  const password = useRef<TextInput>(null);

  const login = async () => {
    if (usernameText && passwordText) {
      const data = {
        username: usernameText,
        password: passwordText,
      };

      const response = await fetch(
        "https://carbon-api-production.up.railway.app/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.status === 200) {
        const logs = await getLogs();
        for (const log of logs) {
          createActivity(log.type, log.amount, new Date(log.createdAt));
        }
        setSignedIn(true);
        setUsername(usernameText);
      } else {
        setErrorModalVisible(true);
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
            <Text style={styles.loginText}>Login</Text>
          </View>
          <View style={styles.inputAreaMainArea}>
            <TextInput
              style={styles.textInput}
              returnKeyType="next"
              placeholder="Username"
              textContentType="username"
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect={false}
              returnKeyLabel="next"
              onSubmitEditing={() => password.current?.focus()}
              onChangeText={(newText) => setUsernameText(newText)}
            />
            <TextInput
              style={styles.textInput}
              secureTextEntry
              ref={password}
              returnKeyType="done"
              textContentType="password"
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect={false}
              placeholder="Password"
              returnKeyLabel="done"
              onSubmitEditing={login}
              onChangeText={(newText) => setPasswordText(newText)}
            />
            <LoginButton text="Get In" onPress={login} />
          </View>
        </View>
      </View>
      <LoginFooter
        text="New to Carbon?"
        linkText="Register"
        linkOnPress={() => navigation.navigate("Register")}
      />
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
