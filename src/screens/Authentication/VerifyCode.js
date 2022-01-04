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
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [signup, setSignup] = useState(true);
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
          <AuthHeader title="Security Code" navigation={props.navigation} />
          <AuthText text="Enter the security code sent to your inbox or messages." />

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
            placeholder="Security Code"
            placeholderTextColor={Colors.dull}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TouchableOpacity
            style={{
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: Colors.prim2,
              marginHorizontal: 20,
              borderRadius: 2,
              width: SCREEN_WIDTH * 0.9,
              marginTop: normalize(16),
              padding: 16,
            }}
            onPress={() => props.navigation.navigate("ResetPassword")}
          >
            <Text
              style={{
                fontFamily: "Nunito",
                fontSize: 16,
                color: Colors.white,
              }}
            >
              VERIFY
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              fontWeight: "400",
              marginTop: normalize(26),
            }}
          >
            Didn’t recieve code? <Text style={{ color: "gray" }}>Resend</Text>
          </Text>
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
