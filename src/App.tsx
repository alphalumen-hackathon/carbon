import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
// eslint-disable-next-line import/order
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen/HomeScreen.screen";
import NavigationScreen from "./screens/NavigationScreen/NavigationScreen.screen";
import RouteSelectionScreen from "./screens/RouteSelectionScreen/RouteSelectionScreen.screen";

const Home = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Navigation" component={NavigationScreen} />
        <Stack.Screen name="RouteSelection" component={RouteSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
