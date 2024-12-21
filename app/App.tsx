import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // For Facebook icon
import { AntDesign } from "@expo/vector-icons"; // For Google icon
import { useRouter } from "expo-router"; // Import useRouter
import * as webBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

export default function App() {
  const { width } = useWindowDimensions(); // Get current screen width for responsiveness
  const styles = getResponsiveStyles(width); // Get dynamic styles
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  // Ensure web authentication session is completed
  webBrowser.maybeCompleteAuthSession();

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "1093794996582-2m447immjarhail3ef6so84a7h013ghj.apps.googleusercontent.com",
  });

  const router = useRouter(); // Initialize the router

  // Handle the response after successful Google authentication
  useEffect(() => {
    if (response?.type === "success") {
      router.push("/dashboard");
    }
  }, [response, router]);

  // Handle login with basic validation
  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Mock API login logic
    if (email === "shanto" && password === "123") {
      alert("login successful.");

      router.push("/dashboard");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>The Lingua Learner App</Text>

      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#BDBDBD"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#BDBDBD"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>or</Text>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => promptAsync()}
        >
          <AntDesign name="google" size={20} color="black" />
          <Text style={styles.socialButtonText}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <FontAwesome5 name="facebook" size={20} color="white" />
          <Text style={[styles.socialButtonText, styles.facebookButtonText]}>
            Login with Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Get dynamic styles based on screen width
const getResponsiveStyles = (width: number) => {
  const isSmallScreen = width < 600;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#D9D2E9",
      alignItems: "center",
      justifyContent: "center",
      padding: isSmallScreen ? 10 : 20,
    },
    appTitle: {
      fontSize: isSmallScreen ? 18 : 24,
      fontWeight: "bold",
      color: "#4C2A85",
      marginBottom: 20,
    },
    loginContainer: {
      width: isSmallScreen ? "90%" : "50%",
      padding: isSmallScreen ? 15 : 30,
      backgroundColor: "#F3F3F3",
      borderRadius: 20,
      alignItems: "center",
    },
    loginTitle: {
      fontSize: isSmallScreen ? 16 : 20,
      fontWeight: "bold",
      color: "#4C2A85",
      marginBottom: 20,
    },
    input: {
      width: "100%",
      height: 50,
      backgroundColor: "#ECE2F0",
      borderRadius: 10,
      paddingHorizontal: 15,
      marginBottom: 10,
      color: "#000",
    },
    forgotPassword: {
      color: "#4C2A85",
      fontSize: isSmallScreen ? 12 : 14,
      marginBottom: 20,
    },
    loginButton: {
      width: "100%",
      height: 50,
      backgroundColor: "#9B59B6",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 15,
    },
    loginButtonText: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: isSmallScreen ? 14 : 16,
    },
    signupContainer: {
      flexDirection: isSmallScreen ? "column" : "row",
      alignItems: "center",
      marginBottom: 10,
    },
    signupText: {
      fontSize: isSmallScreen ? 12 : 14,
      color: "#4C2A85",
    },
    signupLink: {
      fontSize: isSmallScreen ? 12 : 14,
      color: "#4C2A85",
      fontWeight: "bold",
    },
    orText: {
      fontSize: isSmallScreen ? 12 : 14,
      color: "#4C2A85",
      marginVertical: 10,
    },
    socialButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: 50,
      backgroundColor: "#ECE2F0",
      borderRadius: 10,
      marginBottom: 10,
    },
    socialButtonText: {
      fontSize: isSmallScreen ? 12 : 14,
      color: "#000",
      marginLeft: 10,
    },
    facebookButton: {
      backgroundColor: "#4267B2",
    },
    facebookButtonText: {
      color: "#FFF",
    },
  });
};
