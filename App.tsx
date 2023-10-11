import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { Platform } from "react-native";

import { styles } from "./src/App.style";
import { listenForSpeedChange } from "./src/controllers/SpeedController";
import Credits from "./src/screens/Credits/Credits.screen";
import HomeScreen from "./src/screens/Home/Home.screen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: styles.tabBarStyle,
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Credits" component={Credits} />
  </Tab.Navigator>
);

const App = () => {
  useEffect(() => {
    if (Platform.OS === "android") {
      listenForSpeedChange().then(() => console.log("Tracking speed"));
    }
  }, []);

  return (
    <NavigationContainer theme={DarkTheme}>
      {TabNavigation()}
    </NavigationContainer>
  );
};

export default App;
