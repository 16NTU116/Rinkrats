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
  THUMB,
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
                Join game as
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              height: SCREEN_HEIGHT * 0.8,
            }}
          >
            <FlatList
              data={[
                { name: "Goalie", clicked: false },
                { name: "Player", clicked: true },
                { name: "Referee", clicked: false },
              ]}
              key={"_"}
              keyExtractor={(item) => item}
              style={{ marginTop: 30 }}
              ItemSeparatorComponent={() => {
                return <View style={{ height: 25 }} />;
              }}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: "96%",
                      marginHorizontal: "2%",
                      borderWidth: 2,
                      backgroundColor: item.clicked ? "#E5FAFB" : "#FFFFFF",
                      borderColor: "#F1F3F5",
                      alignItems: "center",
                      paddingVertical: 20,
                    }}
                  >
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "white",
              height: SCREEN_HEIGHT * 0.2,
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
              onPress={() => props.navigation.navigate("UpdateYourSkills")}
            >
              <Text
                style={{
                  fontFamily: "Nunito",
                  fontSize: 16,
                  color: Colors.white,
                }}
              >
                NEXT
              </Text>
            </TouchableOpacity>
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
