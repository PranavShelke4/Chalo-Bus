import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ChaloPayWallet = () => {
  return (
    <View style={[styles.section_box]}>
      <LinearGradient
        colors={["#F00", "#FEAF59"]}
        start={[1.4, 0.1]}
        style={styles.card_box}
      >
        <View style={styles.card}>
          <Text style={styles.card_text}>Pune</Text>
          <Image
            style={styles.img}
            source={require("../../../assets/card.png")}
          />
          <Text style={styles.card_sub_text}>PREPAID TRAVEL CARD</Text>
          <Image
            style={styles.img_2}
            source={require("../../../assets/NFCTag.png")}
          />
        </View>
      </LinearGradient>

      <View style={styles.quick_setting_boxs}>
        <View style={[styles.quick_setting_box_1]}>
          <Image
            style={styles.quick_setting_img}
            source={require("../../../assets/MoneyBagRupee.png")}
          />
          <Text style={styles.quick_setting_title_1}>Add Fund</Text>
        </View>

        <View style={styles.quick_setting_box_2}>
          <Image source={require("../../../assets/CreditCard.png")} />
          <Text style={styles.quick_setting_title_2}>Freeze Card</Text>
        </View>

        <View style={styles.quick_setting_box_3}>
          <Image source={require("../../../assets/BlockCard.png")} />
          <Text style={styles.quick_setting_title_3}>Block Card</Text>
        </View>
      </View>

      <View style={styles.data_boxs}>
        <Text style={styles.data_title}>Transactions</Text>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Text style={styles.data_title_2}>View All</Text>
        </View>
      </View>

      <View style={styles.transcation_boxs}>
        <View style={styles.transcation_box}>
          <View
            style={{
              width: 60,
              height: 60,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(137, 221, 141, 0.61)",
              borderRadius: 100,
              marginRight: 20,
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../../../assets/Bus.png")}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: -10 }}>
              SGT - PCMC
            </Text>
            <Text style={styles.data_title_2}>Jan 1 - 07:25 PM</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "500", color: "red" }}>
              - Rs 25
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.transcation_boxs}>
        <View style={styles.transcation_box}>
          <View
            style={{
              width: 60,
              height: 60,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(244, 162, 241, 0.72)",
              borderRadius: 100,
              marginRight: 20,
            }}
          >
            <Image
              style={{ width: 45, height: 45 }}
              source={require("../../../assets/Train.png")}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: -10 }}>
              SGT - PCMC
            </Text>
            <Text style={styles.data_title_2}>Jan 1 - 07:25 PM</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "500", color: "red" }}>
              - Rs 25
            </Text>
          </View>
        </View>
      </View>
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

  quick_setting_boxs: {
    paddingRight: 20,
    paddingLeft: 20,
    height: 100,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },

  quick_setting_box_1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 90,
    backgroundColor: "rgba(112, 255, 0, 0.38)",
    borderRadius: 10,
    padding: 10,
  },

  quick_setting_title_1: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 4,
    color: "rgba(78, 166, 8, 1)",
  },

  quick_setting_box_2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 90,
    backgroundColor: "rgba(255, 133, 0, 0.38)",
    borderRadius: 10,
    padding: 10,
  },

  quick_setting_title_2: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: -10,
    marginBottom: 10,
    color: "rgba(255, 133, 0, 1)",
    width: 100,
    marginLeft: 7,
  },

  quick_setting_box_3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 90,
    backgroundColor: "rgba(255, 0, 0, 0.38)",
    borderRadius: 10,
    padding: 10,
  },

  quick_setting_title_3: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: -10,
    marginBottom: 10,
    color: "rgba(255, 0, 0, 1)",
    width: 100,
    textAlign: "center",
  },

  quick_setting_img: {
    width: 50,
    height: 50,
  },

  data_boxs: {
    paddingRight: 40,
    paddingLeft: 40,
    height: 100,
    marginTop: -20,
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },

  data_title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  data_title_2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.5)",
  },

  transcation_boxs: {
    paddingRight: 20,
    paddingLeft: 20,
    height: 100,
    marginTop: -30,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },

  transcation_box: {
    flex: 1,
    display: "flex",
    alignItems: "start",
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.41)",
    borderRadius: 10,
    padding: 10,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
  },

  transcation: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
