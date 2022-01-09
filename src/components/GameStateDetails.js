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
import Colors from "../utils/colors";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import jwt_decode from "jwt-decode";
import { COINBG, RINKS, SCREEN_WIDTH, SCREEN_HEIGHT } from "../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import LinearGradient from "react-native-linear-gradient";
import HorizontalLine from "./HorizontalLine";

const GameState = (props) => {
  const [heartClick, setHeartClick] = useState(false);
  const [bellClick, setBellClick] = useState(false);
  const [password, setPassword] = useState(null);
  const [show, setShow] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  useEffect(async () => {
    console.log("new hello");
  });

  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        source={COINBG}
        // resizeMode="cover"
        style={{
          width: "100%",
          height: normalize(60),
          borderTopLeftRadius: 30,
          borderTopEndRadius: 30,
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
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={RINKS}
              style={{ marginHorizontal: 10, height: 30, width: 30 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: 14,
            }}
          >
            Rink Royce
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => setHeartClick(!heartClick)}>
            {heartClick ? (
              <MaterialCommunityIcons name="heart" color="#EE8080" size={20} />
            ) : (
              <MaterialCommunityIcons
                name="heart-outline"
                color="#fff"
                size={20}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setBellClick(!bellClick)}>
            {bellClick ? (
              <MaterialCommunityIcons
                name="bell"
                color="#00CCDA"
                size={20}
                style={{
                  marginHorizontal: 15,
                }}
              />
            ) : (
              <Feather
                name="bell"
                color="#fff"
                size={20}
                style={{
                  marginHorizontal: 15,
                }}
              />
            )}
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View
        style={{
          //   alignItems: "center",
          height: normalize(500),
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            height: "30%",
            with: "100%",
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: "8%",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              marginHorizontal: 12,
              marginTop: 8,
              alignItems: "center",
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={require("../../assets/images/flag.png")} />
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#000",
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
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#DD0000",
                  paddingLeft: 4,
                }}
              >
                04:00 PM
              </Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 12,
              marginTop: 8,
              alignItems: "center",
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={require("../../assets/images/boston.png")} />
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#000",
                  paddingLeft: 4,
                }}
              >
                Boston Bruins
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginVertical: "3%",
          }}
        >
          <View
            style={{
              width: "94%",
              height: 5,
              marginHorizontal: "3%",
              backgroundColor: "#F1F3F5",
              borderRadius: 10,
            }}
          >
            <View
              style={{
                width: "70%",
                height: 5,
                backgroundColor: "#00B4BF",
                borderRadius: 10,
              }}
            ></View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 12,
                fontWeight: "bold",
                lineHeight: 16,
                color: "#DD0000",
                textAlign: "left",
                marginHorizontal: "3%",
                marginVertical: "2%",
              }}
            >
              4{" "}
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 12,
                  fontWeight: "600",
                }}
              >
                spots left
              </Text>
            </Text>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 12,
                fontWeight: "bold",
                lineHeight: 16,
                textAlign: "left",
                color: "#000",
                marginHorizontal: "3%",
                marginVertical: "2%",
              }}
            >
              16/20{" "}
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 12,
                  fontWeight: "600",
                }}
              >
                Players
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: "3%",
          }}
        >
          <View
            style={{
              width: "94%",
              height: 5,
              marginHorizontal: "3%",
              backgroundColor: "#F1F3F5",
              borderRadius: 10,
            }}
          >
            <View
              style={{
                width: "70%",
                height: 5,
                backgroundColor: "#00B4BF",
                borderRadius: 10,
              }}
            ></View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 12,
                fontWeight: "bold",
                lineHeight: 16,
                color: "#DD0000",
                textAlign: "left",
                marginHorizontal: "3%",
                marginVertical: "2%",
              }}
            >
              1{" "}
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 12,
                  fontWeight: "600",
                }}
              >
                spots left
              </Text>
            </Text>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 12,
                fontWeight: "bold",
                lineHeight: 16,
                textAlign: "left",
                color: "#000",
                marginHorizontal: "3%",
                marginVertical: "2%",
              }}
            >
              2/3{" "}
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 12,
                  fontWeight: "600",
                }}
              >
                Goalies
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: "3%",
          }}
        >
          <View
            style={{
              width: "94%",
              height: 5,
              marginHorizontal: "3%",
              backgroundColor: "#F1F3F5",
              borderRadius: 10,
            }}
          >
            <View
              style={{
                width: "70%",
                height: 5,
                backgroundColor: "#00B4BF",
                borderRadius: 10,
              }}
            ></View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 12,
                fontWeight: "bold",
                lineHeight: 16,
                color: "#DD0000",
                textAlign: "left",
                marginHorizontal: "3%",
                marginVertical: "2%",
              }}
            >
              1{" "}
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 12,
                  fontWeight: "600",
                }}
              >
                spots left
              </Text>
            </Text>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 12,
                fontWeight: "bold",
                lineHeight: 16,
                textAlign: "left",
                color: "#000",
                marginHorizontal: "3%",
                marginVertical: "2%",
              }}
            >
              1/2{" "}
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 12,
                  fontWeight: "600",
                }}
              >
                Referees
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            height: "5%",
            with: "100%",
            alignItems: "center",
            marginHorizontal: 10,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "#000D21",
                marginHorizontal: 10,
              }}
            >
              Goalie fund ·{" "}
              <Text
                style={{
                  fontSize: 12,
                  color: "#000D21",
                  marginHorizontal: 10,
                  fontWeight: "bold",
                }}
              >
                $15
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingBottom: 70,
            paddingTop: 30,
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
            onPress={() => props.showInviteFriendPanel()}
          >
            <Text
              style={{
                fontFamily: "Nunito",
                fontSize: 16,
                color: Colors.prim1,
                textTransform: "uppercase",
              }}
            >
              invite a friend
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
            onPress={() =>
              props.setInviteFriendList == null
                ? props.showRequestRefundPanel()
                : props.navigation.navigate("JoinGameFromScheduled")
            }
          >
            <Text
              style={{
                fontFamily: "Nunito",
                fontSize: 16,
                textTransform: "uppercase",
                color: Colors.white,
              }}
            >
              {props.setInviteFriendList == null
                ? "request refund"
                : "join game - $100"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screenbackground,
  },
});
export default GameState;
