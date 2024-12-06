import React from "react";
import { View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function HomePage() {
  return (
    <View style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.topBar}>
        <Text style={styles.timeText}>3:05 pm</Text>
        <View style={styles.rightIcons}>
          <Ionicons name="wifi" size={20} color="black" />
          <Ionicons name="settings" size={20} color="black" style={styles.iconSpacing} />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="black" style={styles.searchIcon} />
        <TextInput
          placeholder="Search..."
          style={styles.searchInput}
          placeholderTextColor="#C8BFD6"
        />
        <FontAwesome name="microphone" size={20} color="black" />
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}></View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <MaterialIcons name="grid-on" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="arrow-back-circle-outline" size={30} color="#F6B646" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6E9E9",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#B6A7D1",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    height: 60,
  },
  timeText: {
    color: "black",
    fontSize: 16,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSpacing: {
    marginLeft: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EDE5F4",
    margin: 15,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "black",
    fontSize: 16,
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#F6E9E9",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#E2E2E2",
    height: 60,
  },
});
