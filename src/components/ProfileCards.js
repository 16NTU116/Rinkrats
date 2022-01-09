import React from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../utils/colors";
import { SCREEN_WIDTH } from "../utils/Constants";

const ProfileCards = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: "white",
      alignItems: "center",
      shadowColor: "black",
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 1,
      elevation: 8,
      width: SCREEN_WIDTH / 2.15,
      paddingVertical: 22,
      paddingHorizontal: 32,
    }}
    onPress={() => props.screen && props.navigation.navigate(props.screen)}
  >
    <Image source={props.icon} style={props.imageStyle} />
    <Text style={{ fontSize: 12, fontWeight: "700", paddingTop: 5 }}>
      {props.name}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
});

export default ProfileCards;
