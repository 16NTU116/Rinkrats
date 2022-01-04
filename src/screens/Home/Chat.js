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
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HomeHeader from "../../components/HomeHeader";
import { ScrollView } from "react-native-gesture-handler";
import ChatComponent from "../../components/Chat";
import FriendsComponent from "../../components/Friends";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
let Man = require("../../../assets/images/man.png");

const Chat = (props) => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [signup, setSignup] = useState(true);
  const [visible, setVisible] = useState(false);
  const [checkInbox, setCheckInbox] = useState(true);
  const [checkFriends, setCheckFriends] = useState(false);
  const [editMessageModal, setEditMessageModal] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

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
              marginHorizontal: 12,
              paddingBottom: 14,
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
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginHorizontal: "5%",
                }}
              >
                <Image
                  source={Man}
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                  }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    paddingLeft: 12,
                  }}
                >
                  Backy, Aaron
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => setVisible(!visible)}>
                <Ionicons
                  name="ios-ellipsis-vertical-outline"
                  color="black"
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
          {visible && (
            <View
              style={{
                backgroundColor: "#000814",
                position: "absolute",
                right: 0,
                top: normalize(85),
                zIndex: 2,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  padding: 12,
                  alignItems: "center",
                }}
              >
                <Feather
                  name="user-plus"
                  color={Colors.textColorDullHome}
                  size={24}
                />
                <Text style={{ color: "white", fontSize: 16, paddingLeft: 4 }}>
                  Add to group
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  padding: 12,
                  alignItems: "center",
                }}
              >
                <Feather
                  name="delete"
                  color={Colors.textColorDullHome}
                  size={24}
                />
                <Text style={{ color: "white", fontSize: 16, paddingLeft: 4 }}>
                  Leave group
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  padding: 12,
                  alignItems: "center",
                }}
                onPress={() => {
                  setShowReport(true);
                  setVisible(!visible);
                }}
              >
                <Ionicons
                  name="warning-outline"
                  color={Colors.textColorDullHome}
                  size={24}
                />
                <Text style={{ color: "white", fontSize: 16, paddingLeft: 4 }}>
                  Report
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setShowBlock(true);
                  setVisible(!visible);
                }}
                style={{
                  flexDirection: "row",
                  padding: 12,
                  alignItems: "center",
                }}
              >
                <Feather
                  name="slash"
                  color={Colors.textColorDullHome}
                  size={24}
                  style={{ flexDirection: "row-reverse" }}
                />
                <Text style={{ color: "white", fontSize: 16, paddingLeft: 4 }}>
                  Block
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <View
            style={{
              backgroundColor: "#f9fafb",
            }}
          >
            <View style={{ height: "89%" }}>
              <View
                style={{
                  flexDirection: "row",
                  //   marginHorizontal: "0.2%",
                  alignSelf: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: "12%",
                    flexDirection: "column-reverse",
                    // alignItems: "center",
                  }}
                >
                  <Image
                    source={Man}
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "84%",
                    backgroundColor: "blue",
                    backgroundColor: "#ffffff",
                    padding: "4%",
                    shadowColor: "#000",
                    // elevation: 2, // marginLeft: "10%",
                  }}
                >
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis tempor, augue in porttitor ullamcorper, eros ex
                    sagittis odio, ut luctus odio risus sit amet enim. Nullam
                    hendrerit, mauris sed dignissim fermentum, felis dolor
                    finibus eros, non egestas ex magna nec mauris. Ut in purus
                    vel tellus porta pharetra.
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      textAlign: "right",
                      color: "#A6AEB9",
                    }}
                  >
                    12:39 AM{" "}
                    <Feather name="check" size={12} color={"#00B4BF"} />
                  </Text>
                </View>
              </View>
              <View style={{ height: 20 }} />
              <View
                style={{
                  flexDirection: "row",
                  //   marginHorizontal: "0.2%",
                  alignSelf: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: "12%",
                    flexDirection: "column-reverse",
                    // alignItems: "center",
                  }}
                >
                  <Image
                    source={Man}
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "84%",
                    backgroundColor: "blue",
                    backgroundColor: "#ffffff",
                    padding: "4%",
                    shadowColor: "#000",
                    // elevation: 2, // marginLeft: "10%",
                  }}
                >
                  <Text>
                    Nullam hendrerit, mauris sed dignissim fermentum, felis
                    dolor finibus eros, non egestas ex magna nec mauris. Ut in
                    purus vel tellus porta pharetra.
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      textAlign: "right",
                      color: "#A6AEB9",
                    }}
                  >
                    12:39 AM{" "}
                    <Feather name="check" size={12} color={"#00B4BF"} />
                  </Text>
                </View>
              </View>
              <View style={{ height: 20 }} />
              <View
                style={{
                  flexDirection: "row",
                  //   marginHorizontal: "0.2%",
                  alignSelf: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: "12%",
                    flexDirection: "column-reverse",
                    // alignItems: "center",
                  }}
                ></View>
                <View
                  style={{
                    width: "84%",
                    backgroundColor: "#E5FAFB",
                    padding: "4%",
                    shadowColor: "#000",
                    // elevation: 2, // marginLeft: "10%",
                  }}
                >
                  <Text>Ut in purus vel tellus porta pharetra.</Text>
                  <Text
                    style={{
                      fontSize: 10,
                      textAlign: "right",
                      color: "#A6AEB9",
                    }}
                  >
                    12:39 AM{" "}
                    <Feather name="check" size={12} color={"#00B4BF"} />
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                //   justifyContent: "space-between",
                justifyContent: "center",
                //   marginHorizontal: "5%",
                elevation: 0,
              }}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderColor: "gray",
                  borderWidth: 0.5,
                  width: "80%",
                }}
              >
                <TextInput
                  placeholder={"Message..."}
                  style={{ paddingLeft: 15 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Feather
                    size={20}
                    color={"gray"}
                    name={"image"}
                    style={{ marginHorizontal: 10 }}
                  />
                  <Feather size={20} color={"gray"} name={"mic"} />
                </View>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "2%",
                  width: "12%",
                  backgroundColor: "#00B4BF",
                }}
              >
                <Feather
                  size={20}
                  color={"#fff"}
                  name={"send"}
                  style={{
                    // alignItems: "center",
                    // justifyContent: "center",
                    //   width: "10%",
                    paddingVertical: "4%",
                  }}
                />
              </View>
            </View>
            {showBlock && (
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
                  snapPoints={[SCREEN_HEIGHT / 3, "80%", SCREEN_HEIGHT * 0.5]}
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
                        <TouchableOpacity onPress={() => setShowBlock(false)}>
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
                            Are you sure you want to block J. K. Rowling?
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
                            // onPress={() => props.navigation.navigate("Home")}
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

            {showReport && (
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
                  snapPoints={[SCREEN_HEIGHT / 3, "80%", SCREEN_HEIGHT * 0.46]}
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
                          height: normalize(40),
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <TouchableOpacity onPress={() => setShowReport(false)}>
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
                          Report
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
                            Why do you want to report J. K. Rowling?
                          </Text>
                        </View>
                        <View
                          style={{
                            marginBottom: 20,
                          }}
                        >
                          <TouchableOpacity
                            style={{
                              alignSelf: "center",
                              marginHorizontal: 20,
                              borderRadius: 2,
                              borderColor: Colors.black,
                              borderWidth: 1,
                              width: SCREEN_WIDTH * 0.9,
                              marginTop: 10,
                              padding: 12,
                            }}
                            // onPress={() => props.navigation.navigate("Home")}
                          >
                            <Text
                              style={{
                                fontFamily: "Nunito",
                                fontSize: 14,
                                color: Colors.black,
                              }}
                            >
                              inappropriate messages
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              // alignItems: "center",
                              alignSelf: "center",
                              marginHorizontal: 20,
                              borderRadius: 2,
                              borderColor: Colors.black,
                              borderWidth: 1,
                              width: SCREEN_WIDTH * 0.9,
                              marginTop: 20,
                              padding: 12,
                            }}
                            // onPress={() => props.navigation.navigate("Home")}
                          >
                            <Text
                              style={{
                                fontFamily: "Nunito",
                                fontSize: 14,
                                color: Colors.black,
                              }}
                            >
                              Harresment
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              // alignItems: "center",
                              alignSelf: "center",
                              marginHorizontal: 20,
                              borderRadius: 2,
                              borderColor: Colors.black,
                              borderWidth: 1,
                              width: SCREEN_WIDTH * 0.9,
                              marginTop: 20,
                              padding: 12,
                            }}
                            // onPress={() => props.navigation.navigate("Home")}
                          >
                            <Text
                              style={{
                                fontFamily: "Nunito",
                                fontSize: 14,
                                color: Colors.black,
                              }}
                            >
                              Foul language
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
        </>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Chat;
