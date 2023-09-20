import "react-native-gesture-handler";

import { DarkTheme, NavigationContainer } from "@react-navigation/native";
// eslint-disable-next-line import/order
import { useEffect } from "react";
import { ListenForSpeedChange } from "./src/controllers/SpeedController";
import CreditsScreen from "./src/screens/CreditsScreen/CreditsScreen.screen";

const App = () => {
  useEffect(() => {
    const trackSpeed = async () => await ListenForSpeedChange();
    trackSpeed().then(() => console.log("Tracking speed"));
  }, []);

  return (
    <NavigationContainer theme={DarkTheme}>
      <CreditsScreen />
    </NavigationContainer>
  );
};

export default App;
