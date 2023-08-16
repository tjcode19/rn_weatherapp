import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";

export default function City() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/city.jpg")}
        style={styles.imageLayout}
      >
        <Text style={[styles.cityName, styles.cittText]}> Lagos</Text>
        <Text style={[styles.countryName, styles.cittText]}> Nigeria</Text>
        <View style={styles.populatioWrapper}>
          <Feather name="user" size={50} color="red" />
          <Text style={styles.populatioText}>30,000,000</Text>
        </View>
        <View style={styles.riseSetWrapper}>
          <Feather name="sunrise" size={50} color="white" />
          <Text style={styles.riseSetText}>10:46:54am</Text>
          <Feather name="sunset" size={50} color="white" />
          <Text style={styles.riseSetText}>17:54:23pm</Text>
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
  riseSetText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});
