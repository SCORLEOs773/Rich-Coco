import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Animated,
} from "react-native";
import { Link } from "expo-router";
import React, { useEffect, useRef } from "react";

const splash = require("../assets/images/coffee-splash.jpeg");

const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Fade to opacity 1
      duration: 2000, // Duration in ms
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ImageBackground style={styles.image} source={splash}>
      <View style={styles.overlay}>
        <Animated.View style={{ ...styles.fadeInView, opacity: fadeAnim }}>
          <Text style={styles.title}>CoCo Rich!</Text>
          <View style={styles.buttonContainer}>
            <Link href="/menu" asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>View Menu</Text>
              </Pressable>
            </Link>
            <Link href="/contact" asChild>
              <Pressable style={styles.buttonSecondary}>
                <Text style={styles.buttonText}>Contact Us</Text>
              </Pressable>
            </Link>
          </View>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  fadeInView: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#ff7f50",
    padding: 15,
    borderRadius: 25,
    width: "60%",
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonSecondary: {
    backgroundColor: "#4caf50",
    padding: 15,
    borderRadius: 25,
    width: "60%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
