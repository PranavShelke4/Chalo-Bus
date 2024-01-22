import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const ChaloPayWallet = () => {
  return (
    <View style={styles.section_box}>
      <LinearGradient
        colors={["#F00", "#FEAF59"]}
        start={[1.4, 0.1]}
        style={styles.card_box}
      >
        <View style={styles.card}>
          <Text style={styles.card_text}>Pune</Text>
          <Image style={styles.img} source={require("../../../assets/card.png")} />
          <Text style={styles.card_sub_text}>PREPAID TRAVEL CARD</Text>
          <Image style={styles.img_2} source={require("../../../assets/NFCTag.png")} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default ChaloPayWallet;

const styles = StyleSheet.create({
  section_box: {
    flex: 1,
  },

  card_box: {
    borderRadius: 20,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    padding: 20,
    height: 245,
  },

  card: {
    backgroundColor: "rgba(255, 255, 255, 0.41)",
    borderRadius: 20,
    padding: 20,
    height: 200,
  },

  card_text: {
    fontSize: 20,
    fontWeight: "bold",
  },

  card_sub_text: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 7,
  },

  img: {
    marginTop: -20,
    width: 353,
    height: 140,
    marginLeft: -20,
  },

  img_2: {
    marginTop: -180,
    marginLeft: 270,
  },
});
