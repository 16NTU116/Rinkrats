import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
let Man = require("../../assets/images/man.png");
const FriendsComponent = ({ onPressUser }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onPress={() => onPressUser()}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={{ height: 36, width: 36 }} source={Man} />

        <View
          style={{
            marginLeft: 10,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "bold" }}>Chriss</Text>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 10,
              fontWeight: "normal",
              backgroundColor: "#E9EDF1",
              padding: 5,
              paddingHorizontal: 10,
              borderRadius: 20,
            }}
          >
            R WING
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 8,
            fontWeight: "normal",
            backgroundColor: "#E5FAFB",
            color: "#00B4BF",
            padding: 5,
            paddingHorizontal: 10,
            marginRight: 5,
            borderRadius: 20,
          }}
        >
          PENDING
        </Text>
        <Text style={{ fontSize: 12, color: "black", fontWeight: "bold" }}>
          2{"  "}
        </Text>
        <Text style={{ fontSize: 12, color: "gray" }}>MI</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FriendsComponent;
