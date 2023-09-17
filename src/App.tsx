import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen/HomeScreen.screen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
