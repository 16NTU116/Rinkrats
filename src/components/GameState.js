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
import Colors from "../utils/colors";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import jwt_decode from "jwt-decode";
import { COINBG, RINKS } from "../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import LinearGradient from "react-native-linear-gradient";
import HorizontalLine from "./HorizontalLine";

const GameState = (props) => {
  const [heartClick, setHeartClick] = useState(false);
  const [bellClick, setBellClick] = useState(false);
  const [password, setPassword] = useState(null);
  const [show, setShow] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  useEffect(async () => {
    console.log("new hello");
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.navigation.navigate("ScheduledGameDetails")}
    >
      <ImageBackground
        source={COINBG}
        // resizeMode="cover"
        style={{
          width: "100%",
          height: normalize(60),
          borderTopLeftRadius: 30,
          borderTopEndRadius: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={RINKS}
              style={{ marginHorizontal: 10, height: 30, width: 30 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: 14,
            }}
          >
            Rink Royce
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => setHeartClick(!heartClick)}>
            {heartClick ? (
              <MaterialCommunityIcons name="heart" color="#EE8080" size={20} />
            ) : (
              <MaterialCommunityIcons
                name="heart-outline"
                color="#fff"
                size={20}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setBellClick(!bellClick)}>
            {bellClick ? (
              <MaterialCommunityIcons
                name="bell"
                color="#00CCDA"
                size={20}
                style={{
                  marginHorizontal: 15,
                }}
              />
            ) : (
              <Feather
                name="bell"
                color="#fff"
                size={20}
                style={{
                  marginHorizontal: 15,
                }}
              />
            )}
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View
        style={{
          //   alignItems: "center",
          height: normalize(200),
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            height: "60%",
            with: "100%",
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: "8%",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              marginHorizontal: 12,
              marginTop: 8,
              alignItems: "center",
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={require("../../assets/images/flag.png")} />
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#000",
                  paddingLeft: 4,
                }}
              >
                Canadiens
              </Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 12,
              marginTop: 8,
              alignItems: "center",
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#DD0000",
                  paddingLeft: 4,
                }}
              >
                04:00 PM
              </Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 12,
              marginTop: 8,
              alignItems: "center",
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={require("../../assets/images/boston.png")} />
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#000",
                  paddingLeft: 4,
                }}
              >
                Boston Bruins
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "96%",
            marginHorizontal: "1%",
          }}
        >
          <HorizontalLine />
        </View>
        <View
          style={{
            height: "30%",
            with: "100%",
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 10,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#D7DCE2",
              paddingVertical: 10,
              paddingHorizontal: 25,
            }}
            onPress={() => setHeartClick(!heartClick)}
          >
            <Text
              style={{
                fontSize: 12,
              }}
            >
              FUND GOALIE
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="clock-time-two-outline"
              color="#A6AEB9"
              size={20}
            />
            <Text
              style={{
                fontSize: 12,
                color: "#000D21",
                marginHorizontal: 10,
              }}
            >
              00:10:00
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screenbackground,
  },
});
export default GameState;
