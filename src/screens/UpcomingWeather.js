import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItems";

const DATA = [
  {
    dt_txt: "2023-02-18 12:00:00",
    main: { temp_max: 8.55, temp_min: 7.55 },
    weather: [{ main: "clear" }],
  },
  {
    dt_txt: "2023-02-19 12:00:00",
    main: { temp_max: 8.55, temp_min: 7.55 },
    weather: [{ main: "clouds" }],
  },
  {
    dt_txt: "2023-02-20 12:00:00",
    main: { temp_max: 8.55, temp_min: 7.55 },
    weather: [{ main: "rain" }],
  },
  {
    dt_txt: "2023-02-21 12:00:00",
    main: { temp_max: 8.55, temp_min: 7.55 },
    weather: [{ main: "sunny" }],
  },
];

export default function UpcomingWeather() {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/cloud.jpg")}
        style={styles.image}
      >
        <View>
          <Text>Upcoming Weather</Text>

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}
          ></FlatList>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue",
  },

  image: {
    flex: 1,
  },
});
