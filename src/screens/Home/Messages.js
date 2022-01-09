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
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HomeHeader from "../../components/HomeHeader";
import { ScrollView } from "react-native-gesture-handler";
import ChatComponent from "../../components/Chat";
import FriendsComponent from "../../components/Friends";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";

let Man = require("../../../assets/images/man.png");

const Messages = (props) => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [signup, setSignup] = useState(true);
  const [visible, setVisible] = useState(false);
  const [checkInbox, setCheckInbox] = useState(true);
  const [checkFriends, setCheckFriends] = useState(false);
  const [editMessageModal, setEditMessageModal] = useState(false);
  const [showRequests, setShowRequests] = useState(false);
  const [showSendRequests, setShowSendRequests] = useState(false);
  const [showPuck, setShowPuck] = useState(false);
  const [block, setBlock] = useState(false);

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
              paddingTop: 14,
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
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  paddingLeft: 12,
                }}
              >
                Messenger
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              {checkInbox && (
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => setShowPuck(true)}
                >
                  <Feather name="edit" color={"black"} size={20} />
                </TouchableOpacity>
              )}
              {checkFriends && (
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => props.navigation.navigate("AddFriends")}
                >
                  <Feather name="user-plus" color={"black"} size={20} />
                </TouchableOpacity>
              )}
              {/* <Menu
					style={{ backgroundColor: "#000814", padding: 0 }}
					visible={visible}
					onDismiss={closeMenu}
					anchor={ */}
              <TouchableOpacity onPress={() => setVisible(!visible)}>
                <Ionicons
                  name="ios-ellipsis-vertical-outline"
                  color="black"
                  size={20}
                />
              </TouchableOpacity>
            </View>
            {/* }
				>
					<View
						style={{
							backgroundColor: "#000814",
						}}
					>
						<Menu.Item
							onPress={() => {}}
							icon="content-cut"
							color="white"
							title="Item 1"
							titleStyle={{ color: "white" }}
							style={{ color: "white" }}
						/>
					</View>
				</Menu> */}
          </View>
          {visible && checkInbox && (
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
                <Ionicons
                  name="ios-refresh"
                  color={Colors.textColorDullHome}
                  size={24}
                />
                <Text style={{ color: "white", fontSize: 16, paddingLeft: 4 }}>
                  Mark all as read
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  padding: 12,
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="ios-settings-outline"
                  color={Colors.textColorDullHome}
                  size={24}
                />
                <Text style={{ color: "white", fontSize: 16, paddingLeft: 4 }}>
                  Notification Settings
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  padding: 12,
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="ios-trash-outline"
                  color={Colors.textColorDullHome}
                  size={24}
                />
                <Text style={{ color: "white", fontSize: 16, paddingLeft: 4 }}>
                  Clear all
                </Text>
              </View>
            </View>
          )}

          {visible && checkFriends && (
            <View
              style={{
                backgroundColor: "#000814",
                position: "absolute",
                right: 0,
                top: normalize(85),
                zIndex: 2,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  padding: 12,
                  alignItems: "center",
                }}
                onPress={() => setShowSendRequests(true)}
              >
                <Feather
                  name="user-check"
                  color={Colors.textColorDullHome}
                  size={24}
                />
                <Text style={{ color: "white", fontSize: 16, paddingLeft: 4 }}>
                  Friend requests
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  padding: 12,
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="redo"
                  color={Colors.textColorDullHome}
                  size={24}
                />
                <Text style={{ color: "white", fontSize: 16, paddingLeft: 4 }}>
                  Your sent requests
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <View
            style={{
              backgroundColor: "white",
              height: SCREEN_HEIGHT,
            }}
          >
            <View
              style={{
                marginHorizontal: 7,
                // backgroundColor: "white",
                marginTop: 17,
                paddingVertical: 16,
                paddingHorizontal: 13,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "60%",
                  alignSelf: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: "40%",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setCheckInbox(true);
                      setCheckFriends(false);
                    }}
                  >
                    <Text style={{ color: checkInbox ? "red" : "gray" }}>
                      INBOX
                    </Text>
                  </TouchableOpacity>
                  {checkInbox && (
                    <View
                      style={{
                        width: "100%",
                        backgroundColor: "red",
                        height: 2,
                      }}
                    />
                  )}
                </View>
                <View
                  style={{
                    width: "40%",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setCheckInbox(false);
                      setCheckFriends(true);
                    }}
                  >
                    <Text style={{ color: checkFriends ? "red" : "gray" }}>
                      FRIENDS
                    </Text>
                  </TouchableOpacity>
                  {checkFriends && (
                    <View
                      style={{
                        width: "100%",
                        backgroundColor: "red",
                        height: 2,
                      }}
                    />
                  )}
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 30,
                  width: "100%",
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
                    marginLeft: "5%",
                  }}
                >
                  <TextInput placeholder={"Search Messages"} />
                  <Feather size={20} color={"gray"} name={"search"} />
                </View>
              </View>
              {checkFriends && (
                <TouchableWithoutFeedback onPress={() => setShowRequests(true)}>
                  <View
                    style={{
                      backgroundColor: "#FDF2F2",
                      paddingVertical: 20,
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        textAlign: "center",
                      }}
                    >
                      You have 1 friend request
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              )}

              {checkInbox && (
                <FlatList
                  data={[1, 2, 3, 4]}
                  key={"_"}
                  keyExtractor={(item) => item}
                  style={{ marginTop: 30 }}
                  ItemSeparatorComponent={() => {
                    return <View style={{ height: 25 }} />;
                  }}
                  renderItem={({ item }) => {
                    return (
                      <View>
                        <ChatComponent />
                      </View>
                    );
                  }}
                />
              )}

              {checkFriends && (
                <FlatList
                  data={[1, 2, 3, 4]}
                  key={"_"}
                  keyExtractor={(item) => item}
                  style={{ marginTop: 30 }}
                  ItemSeparatorComponent={() => {
                    return <View style={{ height: 25 }} />;
                  }}
                  renderItem={({ item }) => {
                    return (
                      <View>
                        <FriendsComponent block={block} />
                      </View>
                    );
                  }}
                />
              )}
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
                    snapPoints={[
                      SCREEN_HEIGHT / 2.5,
                      "80%",
                      SCREEN_HEIGHT * 0.4,
                    ]}
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
                          <TouchableOpacity onPress={() => setShowPuck(false)}>
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
                            Select contact(s)
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
                              <Feather
                                size={20}
                                color={"gray"}
                                name={"search"}
                              />
                            </View>
                          </View>
                          <FlatList
                            data={[1, 2, 3, 4]}
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
                              padding: 16,
                            }}
                            onPress={() => {
                              setShowPuck(false);
                              props.navigation.navigate("Chat");
                            }}
                          >
                            <Text
                              style={{
                                fontFamily: "Nunito",
                                fontSize: 16,
                                color: Colors.white,
                              }}
                            >
                              START JOINED CONVO
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )}
                  />
                </View>
              )}

              {showRequests && (
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
                    snapPoints={["40%", "0%", "40%"]}
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
                          <TouchableOpacity
                            onPress={() => setShowRequests(false)}
                          >
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
                              height: "70%",
                              justifyContent: "center",
                              marginHorizontal: "6%",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginVertical: 10,
                            }}
                          >
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Image
                                style={{
                                  height: 40,
                                  width: 40,
                                  marginHorizontal: 5,
                                }}
                                source={Man}
                              />
                              <View
                                style={{
                                  marginHorizontal: 5,
                                }}
                              >
                                <Text
                                  style={{
                                    fontFamily: "Poppins",
                                    fontSize: 12,
                                    color: "#000",
                                    fontWeight: "700",
                                  }}
                                >
                                  J. K. Rowling
                                </Text>
                                <Text
                                  style={{
                                    fontFamily: "Poppins",
                                    fontSize: 10,
                                    color: "gray",
                                    fontWeight: "700",
                                  }}
                                >
                                  jk@jk.com
                                </Text>
                              </View>
                            </View>
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <TouchableOpacity
                                style={{
                                  backgroundColor: "#00B4BF",
                                  padding: 8,
                                  borderColor: "#00B4BF",
                                  borderWidth: 0.5,
                                  marginHorizontal: 5,
                                }}
                                onPress={() => {
                                  setShowRequests(false);
                                }}
                              >
                                <Feather
                                  name={"check"}
                                  size={25}
                                  color={"#fff"}
                                />
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={{
                                  backgroundColor: "#fff",
                                  padding: 8,
                                  borderColor: "graylight",
                                  borderWidth: 0.5,
                                  marginHorizontal: 5,
                                }}
                                onPress={() => {
                                  setBlock(true);
                                  setShowRequests(false);
                                }}
                              >
                                <Ionicons
                                  name={"close"}
                                  size={25}
                                  color={"#000"}
                                />
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </View>
                    )}
                  />
                </View>
              )}

              {showSendRequests && (
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
                    snapPoints={["40%", "0%", "40%"]}
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
                          <TouchableOpacity
                            onPress={() => setShowSendRequests(false)}
                          >
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
                            Sent Requests
                          </Text>
                        </ImageBackground>
                        <View style={{ backgroundColor: "white" }}>
                          <View
                            style={{
                              height: "70%",
                              justifyContent: "center",
                              marginHorizontal: "6%",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginVertical: 10,
                            }}
                          >
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Image
                                style={{
                                  height: 40,
                                  width: 40,
                                  marginHorizontal: 5,
                                }}
                                source={Man}
                              />
                              <View
                                style={{
                                  marginHorizontal: 5,
                                }}
                              >
                                <Text
                                  style={{
                                    fontFamily: "Poppins",
                                    fontSize: 12,
                                    color: "#000",
                                    fontWeight: "700",
                                  }}
                                >
                                  J. K. Rowling
                                </Text>
                                <Text
                                  style={{
                                    fontFamily: "Poppins",
                                    fontSize: 10,
                                    color: "gray",
                                    fontWeight: "700",
                                  }}
                                >
                                  jk@jk.com
                                </Text>
                              </View>
                            </View>
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <TouchableOpacity
                                style={{
                                  backgroundColor: "#fff",
                                  padding: 8,
                                  borderColor: "graylight",
                                  borderWidth: 0.5,
                                  marginHorizontal: 5,
                                }}
                              >
                                <Feather
                                  name={"trash-2"}
                                  size={20}
                                  color={"#000"}
                                />
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </View>
                    )}
                  />
                </View>
              )}
            </View>
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
export default Messages;
