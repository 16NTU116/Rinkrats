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
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import jwt_decode from "jwt-decode";
import {
  GOLDCOINSIMPLE,
  TOURNAMENT,
  SCREEN_HEIGHT,
  COINBG,
  PICKUP_COIN,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HomeHeader from "../../components/HomeHeader";
import HorizontalLine from "../../components/HorizontalLine";

const League = (props) => {
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
        <ImageBackground
          source={TOURNAMENT}
          resizeMode="cover"
          style={{ width: "100%", height: normalize(263) }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: normalize(40),
              paddingHorizontal: normalize(13),
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons name="ios-arrow-back-outline" color="white" size={20} />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{ marginHorizontal: 4 }}
                onPress={() => props.navigation.goBack()}
              >
                <Image
                  source={require("../../../assets/icons/whitebell.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginHorizontal: 4 }}
                onPress={() => setShowFilter(true)}
              >
                <Ionicons name="ios-funnel-outline" color="white" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "700",
                fontSize: 20,
                marginTop: 40,
              }}
            >
              Tournament
            </Text>
          </View>
          <ScrollView
            style={{
              marginTop: normalize(40),
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
                  color: Colors.notiTextColor,
                  fontSize: 14,
                  fontWeight: "500",
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                }}
              >
                ALL
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
                MY
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
                TOURNAMENT COORDINATOR
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>

        <View style={{ backgroundColor: "white", paddingTop: 10 }}>
          <ImageBackground
            source={require("../../../assets/images/tournabg.png")}
            resizeMode="cover"
            style={{
              width: "100%",
              height: normalize(56),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginLeft: 8,
                fontSize: 14,
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "700",
              }}
            >
              Weekend Hockey Tournament
            </Text>
            <TouchableOpacity onPress={() => setShow(true)}>
              <Image source={require("../../../assets/icons/whitebell.png")} />
            </TouchableOpacity>
          </ImageBackground>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 8,
              marginHorizontal: 12,
              backgroundColor: "#E5FAFB",
              paddingVertical: 12,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#E5FAFB",
              }}
            >
              <Image
                source={require("../../../assets/icons/greenhockey.png")}
              />
              <Text
                style={{
                  marginLeft: 8,
                  fontSize: 14,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#753F00",
                  fontWeight: "bold",
                }}
              >
                Rink Royce
              </Text>
            </View>
            <Text
              style={{
                marginLeft: 8,
                fontSize: 14,
                alignItems: "center",
                justifyContent: "center",
                color: Colors.prim1,
                fontWeight: "bold",
              }}
            >
              21st - 25th May
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              paddingTop: 22,
              backgroundColor: "white",
            }}
          >
            <Text
              style={{
                marginLeft: 8,
                fontSize: 14,
                alignItems: "center",
                justifyContent: "center",
                color: Colors.prim4,
                fontWeight: "bold",
              }}
            >
              Type · Adult
            </Text>
            <Text
              style={{
                marginLeft: 8,
                fontSize: 14,
                alignItems: "center",
                justifyContent: "center",
                color: Colors.prim4,
                fontWeight: "bold",
              }}
            >
              Divisions · U18, U19, U20
            </Text>
          </View>
          <HorizontalLine />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 24,
            }}
          >
            <View
              style={{
                backgroundColor: "#E5FAFB",
                borderRadius: 40,
                marginHorizontal: 8,
                alignSelf: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: Colors.prim2,
                  fontSize: 14,
                  fontWeight: "500",
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                }}
              >
                ENTRY FEE - $10
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#FDF2F2",
                borderRadius: 40,
                marginHorizontal: 8,
                alignSelf: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: Colors.prim1,
                  fontSize: 14,
                  fontWeight: "500",
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                }}
              >
                REGISTERED TEAMS
              </Text>
            </View>
          </View>
        </View>

        {show && (
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
                      height: normalize(60),
                      borderTopLeftRadius: 30,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 12,
                      }}
                    >
                      <TouchableOpacity onPress={() => setShow(!show)}>
                        <Ionicons
                          name="ios-arrow-back-outline"
                          color="white"
                          size={25}
                          style={{ paddingLeft: 12, paddingRight: 12 }}
                        />
                      </TouchableOpacity>

                      <Text
                        style={{
                          color: Colors.white,
                          fontSize: 16,
                          fontWeight: "700",
                        }}
                      >
                        Tournament Notifications
                      </Text>
                    </View>
                  </ImageBackground>
                  <View style={{ backgroundColor: "white" }}>
                    <View
                      style={{
                        height: SCREEN_HEIGHT,
                      }}
                    >
                      <View
                        style={{
                          marginHorizontal: 7,
                          backgroundColor: "white",
                          marginTop: 17,
                          paddingVertical: 16,
                          paddingHorizontal: 13,
                        }}
                      >
                        <Text
                          style={{
                            color: Colors.notiTextColor,
                            fontSize: 12,
                            fontWeight: "500",
                            marginBottom: 32,
                          }}
                        >
                          New
                        </Text>
                        <FlatList
                          data={["adsa", "dsa", "dsa", "dsa"]}
                          showsVerticalScrollIndicator={false}
                          keyExtractor={(item, index) => item.id}
                          renderItem={() => (
                            <View
                              style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 26,
                              }}
                            >
                              <View
                                style={{
                                  flexDirection: "row",
                                  alignItems: "center",
                                }}
                              >
                                <Ionicons
                                  name="ios-star-outline"
                                  size={15}
                                  color={"red"}
                                />
                                <Text
                                  style={{
                                    fontSize: 12,
                                    fontWeight: "700",
                                    paddingLeft: 11,
                                  }}
                                >
                                  Update your skills
                                </Text>
                              </View>

                              <Text
                                style={{
                                  fontSize: 12,
                                  fontWeight: "400",
                                  color: "red",
                                }}
                              >
                                Just now
                              </Text>
                            </View>
                          )}
                        />

                        <Text
                          style={{
                            color: Colors.notiTextColor,
                            fontSize: 12,
                            fontWeight: "500",
                            marginVertical: 32,
                          }}
                        >
                          Old
                        </Text>
                        <FlatList
                          data={["adsa", "dsa", "dsa", "dsa"]}
                          showsVerticalScrollIndicator={false}
                          keyExtractor={(item, index) => item.id}
                          renderItem={() => (
                            <View
                              style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 26,
                              }}
                            >
                              <View
                                style={{
                                  flexDirection: "row",
                                  alignItems: "center",
                                }}
                              >
                                <Ionicons
                                  name="ios-star-outline"
                                  size={15}
                                  color={"red"}
                                />
                                <Text
                                  style={{
                                    fontSize: 12,
                                    fontWeight: "700",
                                    paddingLeft: 11,
                                  }}
                                >
                                  Update your skills
                                </Text>
                              </View>

                              <Text
                                style={{
                                  fontSize: 12,
                                  fontWeight: "400",
                                  color: "red",
                                }}
                              >
                                32 mins
                              </Text>
                            </View>
                          )}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        )}
        {showFilter && (
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
                      height: normalize(60),
                      borderTopLeftRadius: 30,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 12,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => setShowFilter(!showFilter)}
                      >
                        <Ionicons
                          name="ios-arrow-back-outline"
                          color="white"
                          size={25}
                          style={{ paddingLeft: 12, paddingRight: 12 }}
                        />
                      </TouchableOpacity>

                      <Text
                        style={{
                          color: Colors.white,
                          fontSize: 16,
                          fontWeight: "700",
                        }}
                      >
                        Search Filters
                      </Text>
                    </View>
                  </ImageBackground>
                  <View style={{ backgroundColor: "white" }}>
                    <View
                      style={{
                        height: SCREEN_HEIGHT,
                      }}
                    >
                      <View
                        style={{
                          marginHorizontal: 7,
                          marginTop: 12,
                          paddingVertical: 16,
                          paddingHorizontal: 13,
                          borderWidth: 1,
                          borderColor: Colors.notiTextColor,
                        }}
                      >
                        <View
                          style={{
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
                            <Ionicons
                              name="ios-person-outline"
                              size={15}
                              color={"gray"}
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: "700",
                                paddingLeft: 11,
                              }}
                            >
                              Type
                            </Text>
                          </View>

                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: "400",
                              color: "red",
                            }}
                          >
                            Under 19
                          </Text>
                        </View>
                      </View>
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
                          APPLY FILTERS
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screenbackground,
  },
});
export default League;
