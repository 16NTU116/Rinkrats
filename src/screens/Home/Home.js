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
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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
  RINKS,
  IMAGEBACKRINKS,
} from "../../utils/Constants";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import ProfileCards from "../../components/ProfileCards";
import HomeHeader from "../../components/HomeHeader";
import LinearGradient from "react-native-linear-gradient";

// import { UserStoreContext } from "../store/UserStoreContext";

const Home = (props) => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [signup, setSignup] = useState(true);
  const [showPlayerORRinks, setShowPlayerORRinks] = useState(false);
  const [showPuck, setShowPuck] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showRinks, setShowRinks] = useState(false);

  const array = [
    {
      name: "League",
      icon: require("../../../assets/icons/league-icon.png"),
      screen: "League",
    },
    {
      name: "Pickup",
      icon: require("../../../assets/icons/league-icon.png"),
      screen: "Pickup",
    },
    {
      name: "Tournament",
      icon: require("../../../assets/icons/trophy-icon.png"),
      screen: "Tournament",
    },
    {
      name: "Rent the ice",
      icon: require("../../../assets/icons/ice-icon.png"),
      screen: "Renttheice",
    },
  ];

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
            <TouchableOpacity
              style={{ backgroundColor: "white" }}
              onPress={() => props.navigation.navigate("ScheduledGames")}
            >
              <ImageBackground
                source={SCHBG}
                resizeMode="cover"
                style={{
                  width: normalize(175),
                  height: normalize(122),
                }}
              >
                <LinearGradient
                  colors={["rgba(0, 14, 28, 0.9)", "rgba(0, 55, 105, 0)"]}
                  style={{ flex: 1 }}
                >
                  <Feather
                    name="calendar"
                    size={25}
                    color={Colors.green}
                    style={{ alignSelf: "flex-end", padding: 8 }}
                  />
                </LinearGradient>
                {/* <ion-icon name="calendar-clear-outline"></ion-icon> */}
              </ImageBackground>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginHorizontal: 12,
                  marginTop: 16,
                  paddingBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    width: normalize(120),
                  }}
                >
                  Scheduled Games
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: "red",
                    padding: 10,
                    backgroundColor: "#FDF2F2",
                  }}
                >
                  3
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "white" }}>
              <ImageBackground
                source={OPENBG}
                resizeMode="cover"
                style={{ width: normalize(175), height: normalize(122) }}
              >
                <LinearGradient
                  colors={["rgba(0, 14, 28, 0.9)", "rgba(0, 55, 105, 0)"]}
                  style={{ flex: 1 }}
                >
                  <MaterialCommunityIcons
                    name="checkbox-marked-outline"
                    size={25}
                    color={Colors.green}
                    style={{ alignSelf: "flex-end", padding: 8 }}
                  />
                </LinearGradient>
              </ImageBackground>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginHorizontal: 12,
                  marginTop: 16,
                  paddingBottom: 10,
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
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: "red",
                    padding: 10,
                    backgroundColor: "#FDF2F2",
                  }}
                >
                  4
                </Text>
              </View>
            </TouchableOpacity>
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
                    PLAYERS
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
                    RINKS
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
            <FlatList
              data={
                showPlayerORRinks
                  ? ["adsa", "dsa", "dsa"]
                  : ["adsa", "dsa", "dsa", "dsa"]
              }
              style={{ marginBottom: 12 }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item.id}
              renderItem={() => {
                return showPlayerORRinks ? (
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginVertical: 6,
                    }}
                    onPress={() => setShowRinks(true)}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={RINKS}
                        style={{ borderRadius: 200, height: 36, width: 36 }}
                      />
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "700",
                            marginLeft: 12,
                          }}
                        >
                          Rink Royce
                        </Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "700",
                          marginHorizontal: 12,
                        }}
                      >
                        13{" "}
                        <Text style={{ color: "#8F959D", fontWeight: "500" }}>
                          MI
                        </Text>
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginVertical: 6,
                    }}
                    onPress={() => setShowUser(true)}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Image source={PROFILE2} style={{ borderRadius: 200 }} />
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "700",
                            marginLeft: 12,
                          }}
                        >
                          Aaron Smith
                        </Text>
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
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "700",
                          marginHorizontal: 12,
                        }}
                      >
                        2.5{" "}
                        <Text style={{ color: "#8F959D", fontWeight: "500" }}>
                          MI
                        </Text>
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
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
      {showUser && (
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
            snapPoints={["10%", "0%", "10%"]}
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
                  style={{ width: "100%", height: normalize(400) }}
                >
                  <TouchableOpacity onPress={() => setShowUser(false)}>
                    <Ionicons
                      name="ios-arrow-back-outline"
                      color="white"
                      size={25}
                      style={{ paddingLeft: 12, paddingTop: 12 }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image source={PROFILE} />
                    <View>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 10,
                          fontWeight: "400",
                        }}
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
                        John Silva{"    "}
                        <Text
                          style={{
                            fontSize: 10,
                            color: "#fff",
                            fontWeight: "bold",
                          }}
                        >
                          2{"  "}MI
                        </Text>
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.15)",
                          alignItems: "center",
                          paddingVertical: 4,
                          paddingHorizontal: 14,
                          borderRadius: 15,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 10,
                            fontWeight: "500",
                          }}
                        >
                          LEFT WING
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      height: 1,
                      width: "100%",
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                    }}
                  />
                  <ScrollView>
                    <View
                      style={{
                        marginHorizontal: 12,
                        marginTop: 16,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 10,
                          paddingLeft: 8,
                          backgroundColor: "rgba(255, 255, 255, 0.2) 0%)",
                          paddingVertical: 12,
                          width: normalize(140),
                        }}
                      >
                        Badges
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: "rgba(146, 248, 255, 0.2)",
                            borderRadius: 15,
                            marginHorizontal: 4,
                            borderColor: "#00CCDA",
                            borderWidth: 1,
                            alignItems: "center",
                            alignSelf: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: "#00CCDA",
                              paddingVertical: 4,
                              paddingHorizontal: 10,
                              fontSize: 10,
                            }}
                          >
                            SELF
                          </Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: "rgba(255, 217, 19, 0.15)",
                            borderRadius: 15,
                            marginHorizontal: 4,
                            borderColor: "#FFCA40",
                            borderWidth: 1,
                            alignItems: "center",
                            alignSelf: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: "#FFCA40",
                              paddingVertical: 4,
                              paddingHorizontal: 10,
                              fontSize: 10,
                            }}
                          >
                            PEER
                          </Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: "rgba(255, 165, 197, 0.2)",
                            borderRadius: 15,
                            marginHorizontal: 4,
                            borderColor: "#EE8080",
                            borderWidth: 1,
                            alignItems: "center",
                            alignSelf: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: "#EE8080",
                              paddingVertical: 4,
                              paddingHorizontal: 10,
                              fontSize: 10,
                            }}
                          >
                            SKILLS ACTUAL
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        marginHorizontal: 12,
                        marginTop: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 10,
                          paddingLeft: 8,
                          backgroundColor: "rgba(255, 255, 255, 0.2) 0%)",
                          paddingVertical: 12,
                          width: normalize(140),
                        }}
                      >
                        Team
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../../../assets/images/flag.png")}
                        />
                        <Text
                          style={{
                            fontWeight: "600",
                            color: "white",
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
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 10,
                          paddingLeft: 8,
                          backgroundColor: "rgba(255, 255, 255, 0.2) 0%)",
                          paddingVertical: 12,
                          width: normalize(140),
                        }}
                      >
                        League
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../../../assets/images/nhl.png")}
                        />
                        <Text
                          style={{
                            fontWeight: "600",
                            color: "white",
                            paddingLeft: 4,
                          }}
                        >
                          NHL
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginHorizontal: 12,
                        marginTop: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 50,
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 10,
                          paddingLeft: 8,
                          backgroundColor: "rgba(255, 255, 255, 0.2) 0%)",
                          paddingVertical: 12,
                          width: normalize(140),
                        }}
                      >
                        Home Rink
                      </Text>

                      <Text
                        style={{
                          fontWeight: "600",
                          color: "white",
                          paddingLeft: 4,
                        }}
                      >
                        Centre Bell
                      </Text>
                    </View>
                  </ScrollView>
                </ImageBackground>
                <View
                  style={{
                    paddingBottom: 70,
                    paddingTop: 32,
                    backgroundColor: "#fff",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      alignSelf: "center",
                      backgroundColor: Colors.white,
                      marginHorizontal: 20,
                      borderRadius: 2,
                      width: SCREEN_WIDTH * 0.9,
                      marginTop: 10,
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
                        textTransform: "uppercase",
                      }}
                    >
                      view full profile
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      alignSelf: "center",
                      backgroundColor: Colors.prim1,
                      marginHorizontal: 20,
                      borderRadius: 2,
                      width: SCREEN_WIDTH * 0.9,
                      marginTop: 20,
                      padding: 16,
                    }}
                    // onPress={() => props.navigation.navigate("Home")}
                  >
                    <Text
                      style={{
                        fontFamily: "Nunito",
                        fontSize: 16,
                        textTransform: "uppercase",
                        color: Colors.white,
                      }}
                    >
                      send friend request
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      )}

      {showRinks && (
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
            snapPoints={["50%", "0%", "50%"]}
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
              <View
                style={{
                  backgroundColor: "darkBlue",
                }}
              >
                <ImageBackground
                  source={COINBG}
                  resizeMode="cover"
                  style={{ width: "100%", height: normalize(200) }}
                >
                  <TouchableOpacity onPress={() => setShowRinks(false)}>
                    <Ionicons
                      name="ios-arrow-back-outline"
                      color="white"
                      size={25}
                      style={{ paddingLeft: 12, paddingTop: 12 }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={RINKS}
                      style={{
                        height: 100,
                        width: 100,
                        marginVertical: 10,
                        marginHorizontal: 20,
                      }}
                    />
                    <View>
                      <Text
                        style={{
                          color: "#8F959D",
                          fontSize: 10,
                          fontWeight: "400",
                        }}
                      >
                        121 Pike Avenue, San Isabel
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontWeight: "700",
                          marginVertical: 12,
                        }}
                      >
                        Rink Royce
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
                          style={{
                            color: "white",
                            fontSize: 10,
                            fontWeight: "500",
                            textTransform: "uppercase",
                          }}
                        >
                          32 mI away
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
                <FlatList
                  data={array}
                  key={"_"}
                  numColumns={2}
                  ItemSeparatorComponent={() => {
                    return <View style={{ height: 10 }} />;
                  }}
                  style={{
                    // marginBottom: 200,
                    backgroundColor: "#fff",
                    paddingVertical: 30,
                  }}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => {
                    return (
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginHorizontal: 6,
                        }}
                      >
                        <ProfileCards
                          name={item.name}
                          icon={item.icon}
                          // screen={item.screen}
                          navigation={props.navigation}
                          imageStyle={{ height: 20, width: 20 }}
                        />
                      </View>
                    );
                  }}
                />
              </View>
            )}
          />
        </View>
      )}
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
