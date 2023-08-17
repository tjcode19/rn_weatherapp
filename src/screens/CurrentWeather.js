import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import weatherType from "../utils/weatherType";

export default function CurrentWeather({ weatherData }) {
  const {
    main: { temp, feels_like, temp_min, temp_max },
    weather,
  } = weatherData;

  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor },
      ]}
    >
      <View style={styles.container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={[styles.temp, styles.textStyle]}>{temp}</Text>
        <Text
          style={[styles.feels, styles.textStyle]}
        >{`Feels like ${feels_like}°`}</Text>
        <View style={styles.highLowWrapper}>
          <Text style={[styles.highLow, styles.textStyle]}>
            High: {temp_max}
            {"°"}
          </Text>
          <Text style={[styles.highLow, styles.textStyle]}>
            {" "}
            Low: {temp_min}
            {"°"}
          </Text>
        </View>
      </View>

      <View style={styles.bodyWrapper}>
        <Text style={[styles.description, styles.textStyle]}>
          {weather[0].description}{" "}
        </Text>
        <Text style={[styles.message, styles.textStyle]}>
          {weatherType[weatherCondition].message}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
  },
  textStyle: {
    color: "white",
  },
  highLow: {
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
