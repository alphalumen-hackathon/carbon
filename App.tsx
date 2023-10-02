import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { useEffect } from "react";
import { Platform } from "react-native";

import { listenForSpeedChange } from "./src/controllers/SpeedController";
import CreditsScreen from "./src/screens/CreditsScreen/CreditsScreen.screen";

const App = () => {
  useEffect(() => {
    if (Platform.OS === "android") {
      listenForSpeedChange().then(() => console.log("Tracking speed"));
    }
  }, []);

  return (
    <NavigationContainer theme={DarkTheme}>
      <CreditsScreen />
    </NavigationContainer>
  );
};

export default App;
