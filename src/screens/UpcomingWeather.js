import { StatusBar } from "expo-status-bar";
import {
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItems";

export default function UpcomingWeather({ weatherD }) {
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
          <FlatList
            data={weatherD}
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
