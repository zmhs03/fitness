import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ActivityIndicator, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate a loading time, then navigate to Home
    const timer = setTimeout(() => {
      setLoading(false);
      router.push("/home"); // Navigate to home screen
    }, 3000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      {/* Text - alternative to image
      <Text style={styles.title}>fit.</Text> */}

      {loading && <ActivityIndicator size="large" color="#34A853" />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logo: {
    width: 130,
    height: 84,
    marginBottom: 20,
  },
});
