import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function JobScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Link href="/account" style={styles.button}>
        Account
      </Link>
      <Link href="/settings" style={styles.button}>
        Settings
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    color: "#fff",
  },
});
