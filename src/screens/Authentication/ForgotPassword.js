import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import Colors from "../../utils/colors";
import normalize from "react-native-normalize";
import jwt_decode from "jwt-decode";
import {
  SCREEN_HEIGHT,
  ONBOARDING_BG2,
  SCREEN_WIDTH,
  GOOGLE_LOGO,
  FACEBOOK_LOGO,
} from "../../utils/Constants";
import AuthHeader from "../../components/AuthHeader";
import AuthText from "../../components/AuthText";
// import { UserStoreContext } from "../store/UserStoreContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ForgotPassword = (props) => {
  const [name, setName] = useState("");
  useEffect(async () => {
    console.log("new hello");
  });

  return (
    <View style={styles.container}>
      <Image
        width={SCREEN_WIDTH}
        height={SCREEN_HEIGHT}
        style={styles.logo}
        source={ONBOARDING_BG2}
      />
      <View
        style={{
          position: "absolute",
          top: SCREEN_HEIGHT * 0.05,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <View
          style={{ position: "relative", marginHorizontal: 21, marginTop: 13 }}
        >
          <AuthHeader title="Forgot Password" navigation={props.navigation} />
          <AuthText text="Enter your email or phone number to recieve a code for password recovery." />

          <TextInput
            keyboardType="default"
            style={{
              margin: 10,
              padding: 16,
              fontSize: 16,
              backgroundColor: "transparent",
              color: Colors.dull,
              borderWidth: 1,
              borderColor: Colors.dull,
              width: SCREEN_WIDTH * 0.9,
              alignSelf: "center",
              marginTop: normalize(28),
            }}
            placeholder="Email/Phone Number"
            placeholderTextColor={Colors.dull}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TouchableOpacity
            style={{
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: name.length < 1 ? Colors.redDull : Colors.prim1,
              marginHorizontal: 20,
              borderRadius: 2,
              width: SCREEN_WIDTH * 0.9,
              marginTop: normalize(16),
              padding: 16,
            }}
            onPress={() => props.navigation.navigate("VerifyCode")}
          >
            <Text
              style={{
                fontFamily: "Nunito",
                fontSize: 16,
                color: name.length < 1 ? Colors.textColorDull : Colors.white,
              }}
            >
              SEND CODE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
export default ForgotPassword;
