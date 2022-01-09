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
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import jwt_decode from "jwt-decode";
import {
  GOLDCOINSIMPLE,
  TOURNAMENT,
  SCREEN_HEIGHT,
  COINBG,
  PICKUP_COIN,
  SCHBG,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import LinearGradient from "react-native-linear-gradient";
import GameState from "../../components/GameState";

const ScheduledGames = (props) => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [show, setShow] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  useEffect(async () => {
    console.log("new hello");
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 12,
            paddingBottom: 14,
            paddingTop: 14,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons name="ios-arrow-back-outline" color="black" size={20} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                paddingLeft: 12,
              }}
            >
              Scheduled Games
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="ios-ellipsis-vertical-outline"
                color="black"
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ImageBackground
          source={SCHBG}
          resizeMode="cover"
          style={{ width: "100%", height: normalize(200) }}
        >
          <LinearGradient
            colors={["rgba(29,47,67,0.9)", "rgba(29,47,67,0.9)"]}
            style={{ flex: 1 }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Feather
                name="calendar"
                size={36}
                color={Colors.green}
                style={{ alignSelf: "center", padding: 8 }}
              />
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
                  fontFamily: "Poppins",
                }}
              >
                3
              </Text>
              <Text
                style={{
                  color: "#8F959D",
                  fontSize: 12,
                }}
              >
                Games
              </Text>
            </View>
            <ScrollView
              style={{
                marginTop: normalize(20),
                marginHorizontal: normalize(10),

                borderColor: "#FFFFFF",
                borderTopWidth: 1,
              }}
              horizontal
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "rgba(255, 105, 105, 0.3)",
                  borderRadius: 40,
                  marginHorizontal: 8,
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: 14,
                    fontWeight: "500",
                    paddingVertical: 8,
                    paddingHorizontal: 20,
                  }}
                >
                  PICKUP
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 40,
                  marginHorizontal: 8,
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: Colors.notiTextColor,
                    fontSize: 14,
                    fontWeight: "500",
                    paddingVertical: 8,
                    paddingHorizontal: 20,
                  }}
                >
                  LEAGUE
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 40,
                  marginHorizontal: 8,
                  alignSelf: "center",
                  alignItems: "center",
                }}
                onPress={() => props.navigation.navigate("LeagueManager")}
              >
                <Text
                  style={{
                    color: Colors.notiTextColor,
                    fontSize: 14,
                    fontWeight: "500",
                    paddingVertical: 8,
                    paddingHorizontal: 20,
                  }}
                >
                  SUB IN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 40,
                  marginHorizontal: 8,
                  alignSelf: "center",
                  alignItems: "center",
                }}
                onPress={() => props.navigation.navigate("LeagueManager")}
              >
                <Text
                  style={{
                    color: Colors.notiTextColor,
                    fontSize: 14,
                    fontWeight: "500",
                    paddingVertical: 8,
                    paddingHorizontal: 20,
                  }}
                >
                  TOURNAMENT
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </LinearGradient>
        </ImageBackground>

        <View style={{ paddingTop: 10 }}>
          <View
            style={{
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: 16,
                fontFamily: "Poppins",
                textTransform: "uppercase",
              }}
            >
              Today, 24th April 2021
            </Text>
          </View>
          <View
            style={{
              // alignItems: "center",
              paddingVertical: 10,
              marginHorizontal: "2%",
              width: "96%",
            }}
          >
            <GameState navigation={props.navigation} />
          </View>
          <View
            style={{
              // alignItems: "center",
              paddingVertical: 10,
              marginHorizontal: "2%",
              width: "96%",
            }}
          >
            <GameState navigation={props.navigation} />
          </View>
        </View>
        <View style={{ height: 30 }}></View>
        <View style={{ paddingTop: 10 }}>
          <View
            style={{
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: 16,
                fontFamily: "Poppins",
                textTransform: "uppercase",
              }}
            >
              Tommorrow, 25th April 2021
            </Text>
          </View>
          <View
            style={{
              // alignItems: "center",
              paddingVertical: 10,
              marginHorizontal: "2%",
              width: "96%",
            }}
          >
            <GameState navigation={props.navigation} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});
export default ScheduledGames;
