import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Text>UserProfile</Text>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
