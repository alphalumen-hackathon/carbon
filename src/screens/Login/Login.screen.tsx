import { useState } from "react";
import { View, Text, TextInput } from "react-native";

import { styles } from "./Login.style";
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
  const createActivity = useActivitiesStore((state) => state.create);

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
          createActivity(log.type, log.amount, new Date());
        }
        setSignedIn(true);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topAreaContainer}>
        <LoginHeader />
        <View style={styles.inputArea}>
          <View style={styles.inputAreaHeaderArea}>
            <Text style={styles.loginText}>Login</Text>
          </View>
          <View style={styles.inputAreaMainArea}>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              onChangeText={(newText) => setUsernameText(newText)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              onChangeText={(newText) => setPasswordText(newText)}
            />
            <LoginButton text="Get In" onPress={() => login()} />
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
