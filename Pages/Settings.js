import * as React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";
import {
  SectionRow,
  SettingsPage,
  NavigateRow,
  BaseRow,
} from "react-native-settings-view";

const SettingScreen = ({ navigation }) => {
  return (
    <SettingsPage>
      <View style={styles.section_box}>
        <Text style={styles.section_title}>GENERAL</Text>
        <SectionRow>
          <View style={styles.navlink}>
            <NavigateRow
              text="Profile"
              leftIcon={{
                name: "person",
                type: "Ionicons",
              }}
              onPress={() => navigation.navigate("Profile")}
            />
            {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
          </View>
          <View style={styles.navlink}>
            <NavigateRow
              text="Chalo Pay Wallet"
              leftIcon={{
                name: "account-balance-wallet",
                type: "FontAwesome",
              }}
            />
          </View>
          <View style={styles.navlink}>
            <NavigateRow
              text="Rewards"
              leftIcon={{
                name: "wallet-giftcard",
                type: "MaterialCommunityIcons",
              }}
            />
          </View>
        </SectionRow>
      </View>

      <View style={styles.section_box}>
        <Text style={styles.section_title}>OTHERS</Text>
        <SectionRow>
          <View style={styles.navlink}>
            <NavigateRow
              text="Terms and conditions"
              leftIcon={{
                name: "file-document",
                type: "material-community",
              }}
            />
          </View>
          <View style={styles.navlink}>
            <NavigateRow
              text="Privacy Policy"
              leftIcon={{
                name: "folder-lock",
                type: "material-community",
              }}
            />
          </View>
          <View style={styles.navlink}>
            <NavigateRow
              text="Contact us"
              leftIcon={{
                name: "users",
                type: "font-awesome",
              }}
            />
          </View>
          <View style={styles.navlink}>
            <BaseRow
              text={"version"}
              leftIcon={{
                name: "tag",
                type: "font-awesome",
              }}
              rightContent={<Text>0.1.0</Text>}
            />
          </View>
        </SectionRow>
      </View>

      <View style={styles.section_box}>
        <Text style={styles.section_title}>ACCOUNT</Text>
        <SectionRow>
          <View style={styles.navlink}>
            <NavigateRow
              text="Logout"
              leftIcon={{
                name: "logout",
                type: "AntDesign",
              }}
              onPress={() => navigation.navigate("Home")}
            />
          </View>
          <View style={styles.navlink}>
            <NavigateRow
              text="Delete Account"
              leftIcon={{
                name: "delete",
                type: "AntDesign",

                color: "red",
              }}
              textStyle={{ color: "red" }}
            />
          </View>
        </SectionRow>
      </View>
    </SettingsPage>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  section_box: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#f5f5f5",
  },

  section_title: {
    fontSize: 16,
    color: "#275DA3",
    marginBottom: 10,
    fontWeight: "bold",
  },

  navlink: {
    paddingTop: 5,
    paddingBottom: 5,
    height: 56,
    borderRadius: 70,
  },
});
