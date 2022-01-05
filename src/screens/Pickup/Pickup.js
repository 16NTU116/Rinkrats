import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  FlatList,
  ImageBackground,
  ScrollView,
} from "react-native";
import Colors from "../../utils/colors";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import jwt_decode from "jwt-decode";
import {
  GOLDCOINSIMPLE,
  PICKUP,
  SCREEN_WIDTH,
  PICKUP_BG,
  PICKUP_COIN,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HomeHeader from "../../components/HomeHeader";

const Pickup = (props) => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [signup, setSignup] = useState(true);
  useEffect(async () => {
    console.log("new hello");
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={PICKUP_BG}
          resizeMode="cover"
          style={{ width: "100%", height: normalize(263) }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: normalize(60),
              paddingHorizontal: normalize(13),
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons name="ios-arrow-back-outline" color="white" size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons
                name="ios-ellipsis-vertical-outline"
                color="white"
                size={20}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Image source={PICKUP} style={{ marginTop: 44 }} />
            <Text
              style={{
                color: "white",
                fontWeight: "700",
                fontSize: 20,
                marginTop: 10,
              }}
            >
              Pickup
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 16,
            marginHorizontal: 8,
          }}
        >
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
            onPress={() => props.navigation.navigate("SelectDate")}
          >
            <Ionicons
              name="time-outline"
              color={Colors.notiTextColor}
              size={16}
            />
            <Text style={{ fontSize: 12, fontWeight: "700", paddingTop: 5 }}>
              Select a date
            </Text>
          </TouchableOpacity>
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
            onPress={() => props.navigation.navigate("PaymentModes")}
          >
            <Ionicons
              name="card-outline"
              color={Colors.notiTextColor}
              size={16}
            />
            <Text style={{ fontSize: 12, fontWeight: "700", paddingTop: 5 }}>
              Select a rink
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 40,
          }}
        >
          <Image source={PICKUP_COIN} />
          <Text style={{ marginLeft: 8, fontSize: 12 }}>UPCOMING PICKUPS</Text>
        </TouchableOpacity>
        <View style={{ backgroundColor: "white", paddingTop: 30, zIndex: 2 }}>
          <Text
            style={{
              marginLeft: 8,
              fontSize: 12,
              alignSelf: "center",
            }}
          >
            You haven’t joined any pickups.
          </Text>
          <TouchableOpacity
            style={{
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: Colors.prim1,
              marginHorizontal: 20,
              borderRadius: 5,
              marginTop: 30,
              padding: 16,
              width: "90%",
            }}
            onPress={() => props.navigation.navigate("Home")}
          >
            <Text
              style={{
                fontFamily: "Nunito",
                fontSize: 20,
                color: Colors.white,
              }}
            >
              JOIN A GAME NOW
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../../../assets/icons/tiltphone.png")}
          style={{ position: "absolute", top: normalize(330), right: 0 }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screenbackground,
  },
});
export default Pickup;
