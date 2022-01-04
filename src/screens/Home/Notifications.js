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
} from "react-native";
import Colors from "../../utils/colors";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
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
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HomeHeader from "../../components/HomeHeader";
import { ScrollView } from "react-native-gesture-handler";

const Notifications = (props) => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [signup, setSignup] = useState(true);
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  useEffect(async () => {
    console.log("new hello");
  });

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 12,
              paddingVertical: 14,
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
                Notifications
              </Text>
              <View
                style={{
                  borderRadius: 2000,
                  width: 20,
                  marginLeft: 10,
                  elevation: 10,
                  backgroundColor: "red",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 10,
                    fontWeight: "700",
                    padding: 4,
                  }}
                >
                  4
                </Text>
              </View>
            </View>
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
          {visible && (
            <View
              style={{
                backgroundColor: "#000814",
                position: "absolute",
                right: 0,
                top: normalize(40),
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
          <ScrollView>
            <View
              style={{
                backgroundColor: "#E5E5E5",
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
                  data={[
                    "adsa",
                    "dsa",
                    "dsa",
                    "dsa",
                    "adsa",
                    "dsa",
                    "dsa",
                    "dsa",
                  ]}
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
                        style={{ flexDirection: "row", alignItems: "center" }}
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
                  data={[
                    "adsa",
                    "dsa",
                    "dsa",
                    "dsa",
                    "adsa",
                    "dsa",
                    "dsa",
                    "dsa",
                  ]}
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
                        style={{ flexDirection: "row", alignItems: "center" }}
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
          </ScrollView>
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
export default Notifications;
