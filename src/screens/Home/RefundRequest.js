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
  LOCK,
  CIRCLECHECK,
} from "../../utils/Constants";
import AuthHeader from "../../components/AuthHeader";
import AuthText from "../../components/AuthText";
// import { UserStoreContext } from "../store/UserStoreContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";

const PaymentSuccessful = (props) => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [signup, setSignup] = useState(true);
  console.log("props?.route?.params?.title", props?.route?.params?.title);
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
          style={{
            position: "relative",
            marginHorizontal: 21,
            marginTop: 13,
          }}
        >
          {/* <AuthHeader title="Payment Successful" /> */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 12,
              paddingBottom: 14,
              marginTop: -20,
            }}
          >
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons name="ios-arrow-back-outline" color="white" size={20} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                paddingLeft: 12,
                color: "white",
              }}
            >
              {props?.route?.params?.title}
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: normalize(SCREEN_HEIGHT / 4),
            }}
          >
            <Image source={props?.route?.params?.image} />
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "400",
                marginTop: normalize(19),
              }}
            >
              {props?.route?.params?.message}
            </Text>
          </View>

          {props?.route?.params?.btn && (
            <TouchableOpacity
              style={{
                alignItems: "center",
                alignSelf: "center",
                backgroundColor: Colors.prim1,
                marginHorizontal: 20,
                borderRadius: 2,
                width: SCREEN_WIDTH * 0.9,
                marginTop: normalize(317),
                padding: 16,
              }}
              onPress={() =>
                props.navigation.navigate(props?.route?.params?.screen)
              }
            >
              <Text
                style={{
                  fontFamily: "Nunito",
                  fontSize: 16,
                  color: Colors.white,
                  textTransform: "uppercase",
                }}
              >
                {props?.route?.params?.btnText}
              </Text>
            </TouchableOpacity>
          )}
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
export default PaymentSuccessful;
