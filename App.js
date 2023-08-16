import { StyleSheet, View } from "react-native";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CurrentWeather from "./src/screens/CurrentWeather";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "grey",
          tabBarStyle: {
            backgroundColor: "lightblue",
          },
          headerStyle: {
            backgroundColor: "lightblue",
          },
          headerTitleStyle:{
            fontSize:25,
            fontWeight:'bold',
            color:'tomato'
          }
        }}
      >
        <Tab.Screen
          name={"Current"}
          component={CurrentWeather}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="droplet"
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name={"Upcoming"}
          component={UpcomingWeather}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="clock"
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name={"City"}
          component={City}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
