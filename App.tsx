import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Credits from "./src/screens/Credits/Credits.screen";
import HomeScreen from "./src/screens/Home/Home.screen";
import LoginScreen from "./src/screens/Login/Login.screen";
import RegisterScreen from "./src/screens/Register/Register.screen";
import ShopScreen from "./src/screens/Shop/Shop.screen";
import SocialScreen from "./src/screens/Social/Social.screen";
import useUserStore from "./src/states/User.store";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigation = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Credits" component={Credits} />
    <Tab.Screen name="Social" component={SocialScreen} />
    <Tab.Screen name="Shop" component={ShopScreen} />
  </Tab.Navigator>
);

const App = () => {
  // const isSigned = useUserStore((state) => state.isSigned);
  const isSigned = true;

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator  screenOptions={{ headerShown: false }}>
        {isSigned ? (
          <Stack.Screen name="Tab" component={TabNavigation} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
