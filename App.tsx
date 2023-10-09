import "react-native-gesture-handler";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { Platform } from "react-native";

import { listenForSpeedChange } from "./src/controllers/SpeedController";
import Credits from "./src/screens/Credits/Credits.screen";

const App = () => {
  useEffect(() => {
    if (Platform.OS === "android") {
      listenForSpeedChange().then(() => console.log("Tracking speed"));
    }
  }, []);

  return (
    <NavigationContainer theme={DarkTheme}>
      <Credits />
    </NavigationContainer>
  );
};

export default App;
