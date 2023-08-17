import { StyleSheet, ActivityIndicator, View } from "react-native";
import { useState, useEffect } from "react";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CurrentWeather from "./src/screens/CurrentWeather";
import { Feather } from "@expo/vector-icons";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const Tab = createBottomTabNavigator();

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

export default function App() {
  const [loading, errorMsg, weatherData] = useGetWeather();

  if (weatherData && weatherData.list && !loading) {
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
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: "bold",
              color: "tomato",
            },
          }}
        >
          <Tab.Screen
            name={"Current"}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather
                  name="droplet"
                  size={25}
                  color={focused ? "tomato" : "black"}
                />
              ),
            }}
          >
            {() => <CurrentWeather weatherData={weatherData.list[0]} />}
          </Tab.Screen>
          <Tab.Screen
            name={"Upcoming"}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather
                  name="clock"
                  size={25}
                  color={focused ? "tomato" : "black"}
                />
              ),
            }}
          >
            {() => <UpcomingWeather weatherD={weatherData.list} />}
          </Tab.Screen>
          <Tab.Screen
            name={"City"}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather
                  name="home"
                  size={25}
                  color={focused ? "tomato" : "black"}
                />
              ),
            }}
          >
            {() => <City weatherData={weatherData.city} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={"large"} color={"blue"} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
