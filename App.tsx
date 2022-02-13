import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

const teamMember = [
  {
    id: 1,
    name: "ひろっきー",
  },
  {
    id: 2,
    name: "かたん",
  },
  {
    id: 3,
    name: "りーべ",
  },
  {
    id: 4,
    name: "SheepL",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Qin todos member</Text>
      {teamMember.map((member) => (
        <>
          <Text key={member.id}>{member.name}!</Text>
          <Button
            key={member.id}
            title="押してね"
            onPress={() => Alert.alert(`Hi ${member.name}`)}
          />
        </>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
