import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
let Man = require("../../assets/images/man.png");
const FriendsComponent = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image style={{ height: 50, width: 50 }} source={Man} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Chriss</Text>
          <Text style={{ fontSize: 12, color: "gray" }}>
            Hey! hope you are doing great
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FriendsComponent;
