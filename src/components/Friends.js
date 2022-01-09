import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
let Man = require("../../assets/images/man.png");
const FriendsComponent = ({ block }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image style={{ height: 36, width: 36 }} source={Man} />

        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Chriss</Text>
          <Text style={{ fontSize: 12, color: "gray" }}>
            Hey! hope you are doing great
          </Text>
        </View>
      </View>
      {block && (
        <View>
          <Text style={{ fontSize: 12, color: "gray" }}>Blocked</Text>
        </View>
      )}
    </View>
  );
};

export default FriendsComponent;
