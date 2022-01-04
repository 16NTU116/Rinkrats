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
  StatusBar,
  ScrollView,
} from "react-native";
import Colors from "../../utils/colors";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import jwt_decode from "jwt-decode";
import {
  SCREEN_HEIGHT,
  IMAGEBACK,
  SCREEN_WIDTH,
  PROFILE,
  SCHBG,
  OPENBG,
  PROFILE2,
  COINBG,
  PUCKS,
} from "../../utils/Constants";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import HomeHeader from "../../components/HomeHeader";

// import { UserStoreContext } from "../store/UserStoreContext";

const Home = (props) => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [signup, setSignup] = useState(true);
  const [showPuck, setShowPuck] = useState(false);
  useEffect(async () => {
    console.log("new hello");
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="#fff" barStyle={"dark-content"} />
        <View style={{ backgroundColor: Colors.screenbackground }}>
          <HomeHeader
            setShowPuck={setShowPuck}
            showPuck={showPuck}
            navigation={props.navigation}
          />
          <View
            style={{
              backgroundColor: Colors.prim3,
              paddingVertical: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: Colors.textColor,
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              Use coupon code{" "}
              <Text style={{ fontWeight: "700", color: "red" }}>DF3E9F</Text> to
              get 50% off
            </Text>
          </View>
          <ImageBackground
            source={IMAGEBACK}
            resizeMode="cover"
            style={{ width: "100%", height: normalize(200) }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={PROFILE} />
              <View>
                <Text
                  style={{ color: "white", fontSize: 10, fontWeight: "400" }}
                >
                  Joined on 21 July 2020
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "700",
                    marginVertical: 12,
                  }}
                >
                  John Silva
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    alignItems: "center",
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    borderRadius: 15,
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 10, fontWeight: "500" }}
                  >
                    LEFT WING
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginLeft: normalize(65) }}>
                <Progress.Circle
                  color={Colors.green}
                  thickness={4}
                  progress={0.7}
                  size={normalize(60)}
                  showsText={true}
                  formatText={() => {
                    return `70% `;
                  }}
                />
                <Text
                  style={{
                    color: "#c4cad3",
                    fontSize: 10,
                    fontWeight: "400",
                    marginTop: 10,
                  }}
                >
                  Your Profile
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 1,
                width: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
            />
            <TouchableOpacity
              style={{
                marginHorizontal: "5%",
                width: "90%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  fontWeight: "400",
                  paddingVertical: 8,
                }}
              >
                Update your skills to join a game
              </Text>
              <Ionicons name="arrow-forward-outline" size={25} color="white" />
            </TouchableOpacity>
          </ImageBackground>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 8,
            }}
          >
            <View style={{ backgroundColor: "white" }}>
              <ImageBackground
                source={SCHBG}
                resizeMode="cover"
                style={{
                  width: normalize(175),
                  height: normalize(122),
                }}
              >
                <Ionicons
                  name="calendar-clear-outline"
                  size={25}
                  color={Colors.green}
                  style={{ alignSelf: "flex-end" }}
                />
                {/* <ion-icon name="calendar-clear-outline"></ion-icon> */}
              </ImageBackground>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginHorizontal: 12,
                  marginTop: 16,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    width: normalize(80),
                  }}
                >
                  Scheduled Games
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "700", color: "red" }}>
                  3
                </Text>
              </View>
            </View>
            <View style={{ backgroundColor: "white" }}>
              <ImageBackground
                source={OPENBG}
                resizeMode="cover"
                style={{ width: normalize(175), height: normalize(122) }}
              >
                <Ionicons
                  name="checkbox-outline"
                  size={25}
                  color={Colors.green}
                  style={{ alignSelf: "flex-end" }}
                />
              </ImageBackground>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginHorizontal: 12,
                  marginTop: 16,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    width: normalize(80),
                  }}
                >
                  Open Games
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "700", color: "red" }}>
                  3
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginHorizontal: 20, marginTop: 36 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                }}
              >
                Around you
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "500",
                    color: Colors.textColorDullHome,
                    marginHorizontal: 12,
                  }}
                >
                  PLAYERS
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "500",
                    color: Colors.textColorDullHome,
                    marginHorizontal: 12,
                  }}
                >
                  RINKS
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 2,
                width: "100%",
                backgroundColor: "#E9EDF1",
              }}
            />
            <FlatList
              data={["adsa", "dsa", "dsa", "dsa", "dsa", "dsa", "dsa", "dsa"]}
              style={{ marginBottom: 12 }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item.id}
              renderItem={() => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 6,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image source={PROFILE2} style={{ borderRadius: 200 }} />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "700",
                        marginLeft: 12,
                      }}
                    >
                      Aaron Smith
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: "500",
                        marginHorizontal: 12,
                        color: "#8F959D",
                      }}
                    >
                      R WING
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "700",
                        // marginLeft: normalize(100),
                        marginHorizontal: 12,
                      }}
                    >
                      2.5{" "}
                      <Text style={{ color: "#8F959D", fontWeight: "500" }}>
                        MI
                      </Text>
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
        {showPuck && (
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "rgba(0,0,0,0.8)",
            }}
          >
            <ScrollBottomSheet
              componentType="FlatList"
              snapPoints={[SCREEN_HEIGHT / 3, "80%", SCREEN_HEIGHT * 0.4]}
              initialSnapIndex={2}
              renderHandle={() => (
                <View
                  style={{
                    alignItems: "center",
                    paddingVertical: 10,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                >
                  <View
                    style={{
                      width: 60,
                      height: 8,
                      backgroundColor: "white",
                      borderRadius: 4,
                    }}
                  />
                </View>
              )}
              data={Array.from({ length: 1 }).map((_, i) => String(i))}
              keyExtractor={(i) => i}
              renderItem={({ item }) => (
                <View>
                  <ImageBackground
                    source={COINBG}
                    resizeMode="cover"
                    style={{
                      width: "100%",
                      height: normalize(188),
                      borderTopLeftRadius: 30,
                    }}
                  >
                    <TouchableOpacity onPress={() => setShowPuck(!showPuck)}>
                      <Ionicons
                        name="ios-arrow-back-outline"
                        color="white"
                        size={25}
                        style={{ paddingTop: 12, paddingLeft: 12 }}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        alignItems: "center",
                      }}
                    >
                      <Image source={PUCKS} style={{ marginTop: 24 }} />
                      <Text
                        style={{
                          color: "white",
                          fontWeight: "700",
                          fontSize: 20,
                          marginTop: 10,
                        }}
                      >
                        158
                      </Text>
                      <Text style={{ color: Colors.notiTextColor }}>
                        Your gold pucks balance
                      </Text>
                    </View>
                  </ImageBackground>
                  <View style={{ backgroundColor: "white" }}>
                    <TouchableOpacity
                      style={{
                        alignItems: "center",
                        alignSelf: "center",
                        borderWidth: 1,
                        borderColor: "#D7DCE2",
                        width: "90%",
                        marginHorizontal: 20,
                        borderRadius: 5,
                        marginTop: 16,
                        padding: 16,
                      }}
                      onPress={() => props.navigation.navigate("PuckDetails")}
                    >
                      <Text
                        style={{
                          fontFamily: "Nunito",
                          fontSize: 20,
                        }}
                      >
                        BALANCE HISTORY
                      </Text>
                    </TouchableOpacity>
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
                        marginBottom: 120,
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
                        PURCHASE
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logo: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
export default Home;
