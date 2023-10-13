import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import Navbar from "./src/components/Navbar/Navbar.component";
import Credits from "./src/screens/Credits/Credits.screen";
import HomeScreen from "./src/screens/Home/Home.screen";
import ShopScreen from "./src/screens/Shop/Shop.screen";
import SocialScreen from "./src/screens/Social/Social.screen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={{ headerShown: false }}
    tabBar={(props) => <Navbar {...props} />}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Credits" component={Credits} />
    <Tab.Screen name="Social" component={SocialScreen} />
    <Tab.Screen name="Shop" component={ShopScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      {TabNavigation()}
    </NavigationContainer>
  );
};

export default App;
