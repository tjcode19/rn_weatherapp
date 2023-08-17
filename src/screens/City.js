import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import moment from "moment";

export default function City({ weatherData }) {
  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/city.jpg")}
        style={styles.imageLayout}
      >
        <Text style={[styles.cityName, styles.cittText]}> {name}</Text>
        <Text style={[styles.countryName, styles.cittText]}> {country}</Text>
        <View style={styles.populatioWrapper}>
          <Feather name="user" size={50} color="red" />
          <Text style={styles.populatioText}>{population}</Text>
        </View>
        <View style={styles.riseSetWrapper}>
          <View style={styles.riseSetWrapperInner}>
            <Feather name="sunrise" size={50} color="white" />
            <Text style={styles.riseSetText}>
              {moment(sunrise).format("h:mm:ss a")}
            </Text>
          </View>
          <View style={styles.riseSetWrapperInner}>
            <Feather name="sunset" size={50} color="white" />
            <Text style={styles.riseSetText}>
              {moment(sunset).format("h:mm:ss a")}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cittText: {
    justifyContent: "center",
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
  },
  populatioWrapper: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  populatioText: {
    fontWeight: "bold",
    color: "red",
    marginLeft: 7.5,
    fontSize: 25,
  },
  riseSetWrapper: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-around",
  },
  riseSetWrapperInner: {
    alignItems: "center",
    justifyContent: "center",
  },
  riseSetText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});
