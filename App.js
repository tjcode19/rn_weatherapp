import { StyleSheet, View } from "react-native";
import UpcomingWeather from "./src/screens/UpcomingWeather";



export default function App() {
 return (
    <View style={styles.container}>
      <UpcomingWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
