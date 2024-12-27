import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useEffect } from "react";
import { Link } from "expo-router";

const bg = require("../assets/images/coffee-bg.jpeg");

const contact = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ImageBackground style={styles.bg} source={bg}>
      <View style={styles.overlay}>
        <Animated.View style={{ ...styles.fadeInView, opacity: fadeAnim }}>
          <Text style={styles.title}>Contact Us</Text>
          <Text style={styles.subtitle}>We'd love to hear from you!</Text>

          {/* Contact Information */}
          <View style={styles.contactInfo}>
            <Text style={styles.infoText}>📍 Sector 20, Panchkula</Text>
            <Text style={styles.infoText}>📞 +1 234 567 890</Text>
            <Text style={styles.infoText}>📧 contact@cocoarich.com</Text>
          </View>

          {/* Social Media Links */}
          <View style={styles.socialLinks}>
            <Text style={styles.socialText}>Follow Us:</Text>
            <Text style={styles.socialIcon}>🌐 Facebook</Text>
            <Text style={styles.socialIcon}>📸 Instagram</Text>
            <Text style={styles.socialIcon}>🐦 Twitter</Text>
          </View>

          {/* Call-to-Action Button */}
          <TouchableOpacity style={styles.button}>
            <Link href={"/contactForm"} asChild>
              <Text style={styles.buttonText}>Get in Touch</Text>
            </Link>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

export default contact;

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  fadeInView: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 20,
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginBottom: 30,
  },
  contactInfo: {
    marginBottom: 30,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
  },
  socialLinks: {
    marginBottom: 30,
    alignItems: "center",
  },
  socialText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  socialIcon: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
