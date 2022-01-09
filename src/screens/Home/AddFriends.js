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
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
} from "react-native";
import Colors from "../../utils/colors";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import jwt_decode from "jwt-decode";
import { Button, Menu, Divider, Provider } from "react-native-paper";
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
  LEAGUE_ICON,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HomeHeader from "../../components/HomeHeader";
import { ScrollView } from "react-native-gesture-handler";
import SuggetedFriend from "../../components/SuggetedFriend";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";

let Man = require("../../../assets/images/man.png");

const Messages = (props) => {
  const [filter, setFilter] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showUser, setShowUser] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle={"dark-content"} />
      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              height: "5%",
              backgroundColor: "white",
              paddingBottom: 14,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 12,
              }}
            >
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
                Add friends
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignSelf: "center",
              height: "9%",
              paddingBottom: "5%",
              paddingHorizontal: "4%",
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "90%",
                paddingHorizontal: "4%",
                borderColor: "gray",
                borderWidth: 0.5,
              }}
            >
              <TextInput placeholder={"Search by names, teams, etc."} />
              <Feather size={20} color={"gray"} name={"search"} />
            </View>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "10%",
                paddingLeft: 5,
              }}
              onPress={() => setShowFilters(true)}
            >
              <Feather size={30} color={"black"} name={"filter"} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: "82%",
              backgroundColor: "#E5E5E5",
            }}
          >
            {filter == null ? (
              <View
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "96%",
                  marginTop: "5%",
                  marginHorizontal: "2%",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    textAlign: "left",
                    paddingHorizontal: "3%",
                    paddingVertical: "5%",
                  }}
                >
                  Suggested
                </Text>
                <View
                  style={{
                    height: 3,
                    marginHorizontal: "2%",
                    width: "96%",
                    backgroundColor: "#E9EDF1",
                  }}
                ></View>
                <FlatList
                  data={[1, 2, 3, 4]}
                  key={"_"}
                  keyExtractor={(item) => item}
                  style={{ marginHorizontal: 15, marginVertical: 20 }}
                  ItemSeparatorComponent={() => {
                    return <View style={{ height: 25 }} />;
                  }}
                  renderItem={({ item }) => {
                    return (
                      <View>
                        <SuggetedFriend onPressUser={() => setShowUser(true)} />
                      </View>
                    );
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "96%",
                  marginTop: "5%",
                  marginHorizontal: "2%",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    textAlign: "left",
                    paddingHorizontal: "3%",
                    paddingVertical: "5%",
                  }}
                >
                  Filter
                </Text>
                <View
                  style={{
                    height: 3,
                    marginHorizontal: "2%",
                    width: "96%",
                    backgroundColor: "#E9EDF1",
                  }}
                ></View>
                <FlatList
                  data={[1, 2]}
                  key={"_"}
                  keyExtractor={(item) => item}
                  style={{ marginHorizontal: 15, marginVertical: 20 }}
                  ItemSeparatorComponent={() => {
                    return <View style={{ height: 25 }} />;
                  }}
                  renderItem={({ item }) => {
                    return (
                      <View>
                        <SuggetedFriend onPressUser={() => setShowUser(true)} />
                      </View>
                    );
                  }}
                />
              </View>
            )}
          </View>
          {showFilters && (
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
                snapPoints={["30%", "50%", "30%"]}
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
                      <TouchableOpacity onPress={() => setShowFilters(false)}>
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
                        Search filters
                      </Text>
                    </ImageBackground>
                    <View
                      style={{
                        backgroundColor: "white",
                        height: "100%",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          marginTop: 10,
                        }}
                      >
                        <View
                          style={{
                            justifyContent: "center",
                            marginLeft: 10,
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "Poppins",
                              color: "#DD0000",
                              paddingHorizontal: 10,
                              backgroundColor: "#FDF2F2",
                              paddingBottom: 5,
                              borderRadius: 20,
                              justifyContent: "center",
                            }}
                          >
                            Under 19{"  "}
                            <Ionicons
                              style={{
                                justifyContent: "center",
                              }}
                              size={20}
                              color={"#000D21"}
                              name={"close"}
                            />
                          </Text>
                        </View>
                        <View
                          style={{
                            alignItems: "center",
                            marginLeft: 10,
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "Poppins",
                              color: "#DD0000",
                              paddingHorizontal: 10,
                              backgroundColor: "#FDF2F2",
                              paddingBottom: 5,
                              borderRadius: 20,
                              justifyContent: "center",
                            }}
                          >
                            NHL{"  "}
                            <Ionicons
                              style={{
                                alignSelf: "center",
                              }}
                              size={20}
                              color={"#000D21"}
                              name={"close"}
                            />
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          marginTop: 20,
                          paddingHorizontal: "3%",
                          paddingVertical: "4%",
                          marginHorizontal: "2%",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          borderColor: "#EEF0F3",
                          borderWidth: 2,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Feather size={20} color={"gray"} name={"user"} />
                          <Text
                            style={{
                              fontSize: 12,
                              color: "black",
                              fontWeight: "bold",
                              marginLeft: 10,
                            }}
                          >
                            Type
                          </Text>
                        </View>
                        <View
                          style={{
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "Poppins",
                              color: "#DD0000",
                            }}
                          >
                            Under 19
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          marginTop: 20,
                          paddingHorizontal: "3%",
                          paddingVertical: "4%",
                          marginHorizontal: "2%",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          borderColor: "#EEF0F3",
                          borderWidth: 2,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            style={{ height: 20, width: 20 }}
                            source={LEAGUE_ICON}
                          />
                          <Text
                            style={{
                              fontSize: 12,
                              color: "black",
                              fontWeight: "bold",
                              marginLeft: 10,
                            }}
                          >
                            League
                          </Text>
                        </View>
                        <View
                          style={{
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "Poppins",
                              color: "#DD0000",
                            }}
                          >
                            NHL
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          marginTop: 20,
                          paddingHorizontal: "3%",
                          paddingVertical: "4%",
                          marginHorizontal: "2%",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          borderColor: "#EEF0F3",
                          borderWidth: 2,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Feather size={20} color={"gray"} name={"map-pin"} />
                          <Text
                            style={{
                              fontSize: 12,
                              color: "black",
                              fontWeight: "bold",
                              marginLeft: 10,
                            }}
                          >
                            Location
                          </Text>
                        </View>
                        <View
                          style={{
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "Poppins",
                              color: "#A6AEB9",
                            }}
                          >
                            None
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          marginTop: 20,
                          paddingHorizontal: "3%",
                          paddingVertical: "4%",
                          marginHorizontal: "2%",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          borderColor: "#EEF0F3",
                          borderWidth: 2,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Feather size={20} color={"gray"} name={"compass"} />
                          <Text
                            style={{
                              fontSize: 12,
                              color: "black",
                              fontWeight: "bold",
                              marginLeft: 10,
                            }}
                          >
                            Position
                          </Text>
                        </View>
                        <View
                          style={{
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "Poppins",
                              color: "#A6AEB9",
                            }}
                          >
                            None
                          </Text>
                        </View>
                      </View>
                      <TouchableOpacity
                        style={{
                          alignItems: "center",
                          alignSelf: "center",
                          backgroundColor: Colors.prim1,
                          marginHorizontal: 20,
                          borderRadius: 2,
                          width: SCREEN_WIDTH * 0.9,
                          marginTop: SCREEN_HEIGHT * 0.06,
                          padding: 16,
                        }}
                        onPress={() => {
                          setShowFilters(false);
                          setFilter({});
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "Nunito",
                            fontSize: 16,
                            color: Colors.white,
                          }}
                        >
                          APPLY FILTERS
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            </View>
          )}

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
        </>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});
export default Messages;
