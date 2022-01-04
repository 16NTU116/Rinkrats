import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Colors from "../utils/colors";
import { Drawer, List } from "react-native-paper";
import MenuComponent from "./MenuComponent";
import {
  PROFILE,
  USER,
  SHARE,
  SETTINGS,
  DRAWER_LOCK,
  LIVE,
  HOCKEY,
  COIN,
} from "../utils/Constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { UserStoreContext } from "../store/User";
function DrawerComponent({ navigation, route }) {
  // const user = useContext(UserStoreContext);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#000814",
            paddingHorizontal: 20,
            paddingTop: 25,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={PROFILE} />

          <View>
            <Text style={{ color: "white", fontSize: 10, fontWeight: "400" }}>
              Joined on 21 July 2020
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "700",
                marginVertical: 12,
              }}
            >
              John Silva
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                alignItems: "center",
                paddingVertical: 4,
                paddingHorizontal: 10,
                borderRadius: 15,
              }}
            >
              <Text style={{ color: "white", fontSize: 10, fontWeight: "500" }}>
                LEFT WING
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <MenuComponent
          title="My Profile"
          screenName="Profile"
          iconName={USER}
          navigation={navigation}
        />

        <MenuComponent
          title="App Settings"
          screenName="AppSettings"
          iconName={SETTINGS}
          navigation={navigation}
        />
        <MenuComponent
          title="Payments"
          screenName="Payments"
          iconName={COIN}
          navigation={navigation}
        />
        <MenuComponent
          title="Change Password"
          screenName="ChangePassword"
          iconName={DRAWER_LOCK}
          navigation={navigation}
        />
        <MenuComponent
          title="Share"
          // screenName="Home"
          iconName={SHARE}
          navigation={navigation}
        />
        <MenuComponent
          title="Hockey Monkey"
          // screenName="Home"
          iconName={HOCKEY}
          navigation={navigation}
        />
        <MenuComponent
          title="Live Barn"
          // screenName="Home"
          iconName={LIVE}
          navigation={navigation}
        />

        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
          <TouchableOpacity
            style={{
              paddingBottom: 4,
              marginTop: 8,
            }}
            onPress={() => {
              navigation.navigate("About");
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 12,
                marginLeft: 6,
                color: "white",
              }}
            >
              About Rink Rats
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingBottom: 4,
              marginTop: 8,
            }}
            onPress={() => {
              AsyncStorage.clear();
              navigation.navigate("Legal");
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 12,
                marginLeft: 6,
                color: "white",
              }}
            >
              Legal Terms
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingBottom: 4,
              marginTop: 8,
            }}
            onPress={() => {
              AsyncStorage.clear();
              navigation.navigate("MainScreen");
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 12,
                marginLeft: 6,
                color: "white",
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.prim4,
  },
});
export default DrawerComponent;
