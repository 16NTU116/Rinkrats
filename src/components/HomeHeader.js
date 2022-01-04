import React from "react";
import {
  View,
  Image,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TOPLOGO, BADGE, MENU, BELL, CLOUD } from "../utils/Constants";

const HomeHeader = (props) => (
  <View
    style={{
      backgroundColor: "white",
      marginHorizontal: 13,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <View>
      <Image source={TOPLOGO} />
    </View>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => props.setShowPuck(!props.showPuck)}>
        <Image style={{ marginHorizontal: 8 }} source={BADGE} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Messages")}>
        <Image style={{ marginHorizontal: 8 }} source={CLOUD} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Notifications")}
      >
        <Image style={{ marginHorizontal: 8 }} source={BELL} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <Image style={{ marginHorizontal: 8 }} source={MENU} />
      </TouchableOpacity>
    </View>
  </View>
);

export default HomeHeader;
