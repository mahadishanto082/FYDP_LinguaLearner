import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // For Facebook icon
import { AntDesign } from '@expo/vector-icons'; // For Google icon

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>The Lingua Learner App</Text>

      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#BDBDBD"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#BDBDBD"
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>or</Text>

        <TouchableOpacity style={styles.socialButton}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D2E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4C2A85',
    marginBottom: 20,
  },
  loginContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    alignItems: 'center',
  },
  loginTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4C2A85',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ECE2F0',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    color: '#000',
  },
  forgotPassword: {
    color: '#4C2A85',
    fontSize: 14,
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#9B59B6',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  signupText: {
    fontSize: 14,
    color: '#4C2A85',
  },
  signupLink: {
    fontSize: 14,
    color: '#4C2A85',
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 14,
    color: '#4C2A85',
    marginVertical: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#ECE2F0',
    borderRadius: 10,
    marginBottom: 10,
  },
  socialButtonText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 10,
  },
  facebookButton: {
    backgroundColor: '#4267B2',
  },
  facebookButtonText: {
    color: '#FFF',
  },
});
