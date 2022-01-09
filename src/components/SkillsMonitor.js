import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
let customImage = require("../../assets/icons/customRate.png");
const SkillsMonitor = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        alignSelf: "center",
        paddingVertical: 10,
      }}
    >
      <Text>{props.title}</Text>

      <View
        style={{
          flexDirection: "row",
          width: "30%",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#40D9E3",
            height: 15,
            width: 15,
            borderRadius: 100,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#40D9E3",
            height: 15,
            width: 15,
            borderRadius: 100,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#40D9E3",
            height: 15,
            width: 15,
            borderRadius: 100,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#40D9E3",
            height: 15,
            width: 15,
            borderRadius: 100,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            height: 15,
            width: 15,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: "#40D9E3",
          }}
        />
      </View>
    </View>
  );
};

export default SkillsMonitor;
