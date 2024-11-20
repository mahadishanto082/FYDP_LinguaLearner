// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   TextInput,
// } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={{ fontSize: 25, fontWeight: "300", color: "red" }}>
//         Welcome to The LinguaLearner
//       </Text>
//       <Text style={{ fontSize: 18, fontWeight: "300", color: "black" }}>
//         A language learning app designed for beginners
//       </Text>
//       <Image
//         source={require("../assets/aa.jpg")}
//         style={{ width: 100, height: 150 }}
//       ></Image>
//       <TextInput
//         style={{ width: 160, height: 150, justifyContent: "center" }}
//         defaultValue="Click here for more"
//       />
//     </View>
//   );
// }

// import react from "react";

// import { TextInput, StyleSheet, View } from "react-native";

// const myName = (FirstName: string, SecondName: string, ThirdName: string) => {
//   return FirstName + "  " + SecondName + " " + ThirdName;
// }; //component

// const Man = () => {
//   return (
//     <View style={styles.container}>
//       <TextInput> Hello,I am {myName("Mahadi", "Hasan", "Shanto")}</TextInput>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "yellow",
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//   },
// });
// export default Man;

import react from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
const DisPlayname = () => {
  return (
    <View style={styles.container}>
      <Text>Hello,Welcome</Text>
      <TextInput
        style={{
          borderColor: "grey",
          borderWidth: 1,
        }}
        defaultValue="My name is shanto"
      />
    </View>
  );
};
const Multi = () => {
  return (
    <View>
      <Text>Hello world</Text>

      <DisPlayname />
      <DisPlayname />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 100,
    flex: 1,
    backgroundColor: "white",
    borderColor: "gray",
    justifyContent: "center",
  },
});
export default Multi;
