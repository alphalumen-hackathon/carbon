import "react-native-gesture-handler";

import { DarkTheme, NavigationContainer } from "@react-navigation/native";
// eslint-disable-next-line import/order
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreditsScreen from "./src/screens/CreditsScreen/CreditsScreen.screen";

const Home = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={CreditsScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Home />
    </NavigationContainer>
  );
};

export default App;
