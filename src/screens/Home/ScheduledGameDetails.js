import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
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
  SCREEN_WIDTH,
  COINBG,
  PICKUP_COIN,
  SCHBG,
  PROFILE,
  PROFILE2,
  CIRCLECHECK,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import LinearGradient from "react-native-linear-gradient";
import GameStateDetails from "../../components/GameStateDetails";
import FriendsComponent from "../../components/Friends";

const ScheduledGames = (props) => {
  const [showPlayerORRinks, setShowPlayerORRinks] = useState(false);
  const [showInviteFriend, setShowInviteFriend] = useState(false);
  const [inviteFriends, setInviteFriends] = useState(null);
  const [showRequestRefund, setShowRequestRefund] = useState(false);
  useEffect(async () => {
    console.log("new hello");
  });

  return (
    <View>
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
                <Ionicons
                  name="ios-arrow-back-outline"
                  color="black"
                  size={20}
                />
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
              <ScrollView>
                <View
                  style={{
                    marginHorizontal: 12,
                    marginTop: 25,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <LinearGradient
                    colors={[
                      "rgba(255, 255, 255, 0.2)",
                      "rgba(255, 255, 255, 0)",
                    ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 10,
                        paddingLeft: 8,
                        // backgroundColor: "rgba(255, 255, 255, 0.2) 0%)",
                        paddingVertical: 12,
                        width: normalize(140),
                      }}
                    >
                      Date
                    </Text>
                  </LinearGradient>
                  <View>
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: 12,
                        fontFamily: "Poppins",
                        textTransform: "uppercase",
                      }}
                    >
                      Today, 24th April 2021
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: 12,
                    marginTop: 12,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <LinearGradient
                    colors={[
                      "rgba(255, 255, 255, 0.2)",
                      "rgba(255, 255, 255, 0)",
                    ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 10,
                        paddingLeft: 8,
                        // backgroundColor: "rgba(255, 255, 255, 0.2) 0%)",
                        paddingVertical: 12,
                        width: normalize(140),
                      }}
                    >
                      Location
                    </Text>
                  </LinearGradient>
                  <View>
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: 12,
                        fontFamily: "Poppins",
                      }}
                    >
                      121 Pike Avenue, San Isabel
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: 12,
                    marginTop: 12,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <LinearGradient
                    colors={[
                      "rgba(255, 255, 255, 0.2)",
                      "rgba(255, 255, 255, 0)",
                    ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 10,
                        paddingLeft: 8,
                        // backgroundColor: "rgba(255, 255, 255, 0.2) 0%)",
                        paddingVertical: 12,
                        width: normalize(140),
                      }}
                    >
                      Timing
                    </Text>
                  </LinearGradient>
                  <View>
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: 12,
                        fontFamily: "Poppins-SemiBold",
                      }}
                    >
                      08:00 - 09:00 PM
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </LinearGradient>
          </ImageBackground>

          <View style={{ paddingTop: 10 }}>
            <View
              style={{
                paddingVertical: 10,
                marginHorizontal: "2%",
                width: "96%",
              }}
            >
              <GameStateDetails
                navigation={props.navigation}
                showInviteFriendPanel={() => setShowInviteFriend(true)}
                showRequestRefundPanel={() => setShowRequestRefund(true)}
                setInviteFriendList={inviteFriends}
              />
            </View>
          </View>

          <View style={{ height: 30 }}></View>
          <View
            style={{
              marginTop: 36,
              backgroundColor: "#fff",
              marginHorizontal: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  marginLeft: 10,
                }}
              >
                Rosters
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => setShowPlayerORRinks(false)}>
                  <Text
                    style={[
                      {
                        fontSize: 12,
                        fontWeight: "500",
                        color: Colors.textColorDullHome,
                        marginHorizontal: 12,
                      },
                      showPlayerORRinks == false && {
                        borderBottomColor: "#DD0000",
                        borderBottomWidth: 1,
                      },
                    ]}
                  >
                    TEAM 1
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowPlayerORRinks(true)}>
                  <Text
                    style={[
                      {
                        fontSize: 12,
                        fontWeight: "500",
                        color: Colors.textColorDullHome,
                        marginHorizontal: 12,
                      },
                      showPlayerORRinks == true && {
                        borderBottomColor: "#DD0000",
                        borderBottomWidth: 1,
                      },
                    ]}
                  >
                    TEAM2
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                height: 2,
                width: "100%",
                backgroundColor: "#E9EDF1",
              }}
            />
            <View style={{ width: "100%", backgroundColor: "#fff" }}>
              <FlatList
                data={
                  showPlayerORRinks
                    ? ["adsa", "dsa", "dsa", "dsa"]
                    : ["adsa", "dsa", "dsa", "dsa"]
                }
                style={{
                  marginBottom: 12,
                  backgroundColor: "#fff",
                }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item.id}
                renderItem={() => {
                  return (
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginVertical: 10,
                        paddingHorizontal: 10,
                      }}
                      onPress={() => setShowUser(true)}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={PROFILE2}
                          style={{ borderRadius: 200 }}
                        />
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
                            backgroundColor: "#E9EDF1",
                            padding: 5,
                            paddingHorizontal: 10,
                            borderRadius: 20,
                          }}
                        >
                          R WING
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      {showInviteFriend && (
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 10,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <ScrollBottomSheet
            componentType="FlatList"
            snapPoints={["45%", "0%", "45%"]}
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
                    height: normalize(50),
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={() => setShowInviteFriend(false)}>
                    <Ionicons
                      name="ios-arrow-back-outline"
                      color="white"
                      size={25}
                      style={{ paddingLeft: 12 }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "white",
                      marginLeft: 10,
                      fontWeight: "bold",
                      fontSize: 16,
                    }}
                  >
                    Invite friends
                  </Text>
                </ImageBackground>
                <View style={{ backgroundColor: "white" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 30,
                      width: "90%",
                      alignSelf: "center",
                      borderColor: "gray",
                      borderWidth: 0.5,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "90%",
                        marginHorizontal: "5%",
                      }}
                    >
                      <TextInput placeholder={"Search Friends"} />
                      <Feather size={20} color={"gray"} name={"search"} />
                    </View>
                  </View>
                  <FlatList
                    data={[1, 2]}
                    key={"_"}
                    keyExtractor={(item) => item}
                    style={{ marginTop: 30 }}
                    ItemSeparatorComponent={() => {
                      return <View style={{ height: 25 }} />;
                    }}
                    renderItem={({ item }) => {
                      return (
                        <View
                          style={{
                            width: "90%",
                            marginLeft: "5%",
                          }}
                        >
                          <FriendsComponent />
                        </View>
                      );
                    }}
                  />

                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      alignSelf: "center",
                      backgroundColor: Colors.prim1,
                      marginHorizontal: 20,
                      borderRadius: 2,
                      width: SCREEN_WIDTH * 0.9,
                      marginTop: SCREEN_HEIGHT * 0.06,
                      padding: 14,
                      marginBottom: 20,
                    }}
                    onPress={() => {
                      setShowInviteFriend(false);
                      setInviteFriends({});
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Nunito",
                        fontSize: 16,
                        color: Colors.white,
                      }}
                    >
                      INVITE TO THE GAME
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      )}
      {showRequestRefund && (
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
            snapPoints={["60%", "0%", "60%"]}
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
                    height: normalize(50),
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={() => setShowRequestRefund(false)}>
                    <Ionicons
                      name="ios-arrow-back-outline"
                      color="white"
                      size={25}
                      style={{ paddingLeft: 12 }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "white",
                      marginLeft: 10,
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      fontSize: 16,
                    }}
                  >
                    Confirmation
                  </Text>
                </ImageBackground>
                <View style={{ backgroundColor: "white" }}>
                  <View
                    style={{
                      height: "25%",
                      justifyContent: "center",
                      //   alignItems: "center",
                      marginHorizontal: "6%",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Poppins",
                        fontSize: 14,
                        color: "#000",
                        fontWeight: "700",
                      }}
                    >
                      Are you sure you want to refund?
                    </Text>
                  </View>
                  <View
                    style={{
                      marginBottom: 32,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        alignItems: "center",
                        alignSelf: "center",
                        backgroundColor: Colors.prim1,
                        marginHorizontal: 20,
                        borderRadius: 2,
                        width: SCREEN_WIDTH * 0.9,
                        marginTop: 10,
                        padding: 16,
                      }}
                      onPress={() =>
                        props.navigation.navigate("RefundRequest", {
                          title: "Refund Requested",
                          message: "Your refund was requested",
                          image: CIRCLECHECK,
                        })
                      }
                    >
                      <Text
                        style={{
                          fontFamily: "Nunito",
                          fontSize: 16,
                          color: Colors.white,
                        }}
                      >
                        YES
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        alignItems: "center",
                        alignSelf: "center",
                        backgroundColor: Colors.white,
                        marginHorizontal: 20,
                        borderRadius: 2,
                        width: SCREEN_WIDTH * 0.9,
                        marginTop: 20,
                        padding: 16,
                        borderColor: Colors.prim1,
                        borderWidth: 1,
                      }}
                      // onPress={() => props.navigation.navigate("Home")}
                    >
                      <Text
                        style={{
                          fontFamily: "Nunito",
                          fontSize: 16,
                          color: Colors.prim1,
                        }}
                      >
                        CANCEL
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});
export default ScheduledGames;
