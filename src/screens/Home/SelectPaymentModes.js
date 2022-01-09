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
  Switch,
} from "react-native";
import Colors from "../../utils/colors";
import normalize from "react-native-normalize";
import { TextInput } from "react-native-paper";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import jwt_decode from "jwt-decode";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import { RadioButton } from "react-native-paper";
import {
  MASTERCARD,
  GOLDCOINSIMPLE,
  SCREEN_HEIGHT,
  COINBG,
  SCREEN_WIDTH,
  PUCKS,
  THUMB,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HomeHeader from "../../components/HomeHeader";

const SelectPaymentModes = (props) => {
  const [name, setName] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledGold, setIsEnabledGold] = useState(false);
  const [showNewCard, setShowNewCard] = useState(false);
  const [checked, setChecked] = React.useState("first");

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitchGold = () =>
    setIsEnabledGold((previousState) => !previousState);
  useEffect(async () => {
    console.log("new hello");
  });

  return (
    <SafeAreaView style={styles.container}>
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
            <Ionicons name="ios-arrow-back-outline" color="black" size={20} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              paddingLeft: 12,
            }}
          >
            Select Payment Modes
          </Text>
        </View>
        <TouchableOpacity
        // onPress={() => setShowNewCard(true)}
        >
          <Ionicons name="ios-add-outline" color="black" size={20} />
        </TouchableOpacity>
      </View>
      <View style={{ height: SCREEN_HEIGHT * 0.8 }}>
        <View
          style={{
            marginTop: 16,
            backgroundColor: "white",
            marginHorizontal: 8,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: Colors.borderColor,
              borderRadius: 4,
              justifyContent: "space-between",
              marginHorizontal: 13,
              paddingHorizontal: 13,
              paddingVertical: 12,
              marginVertical: 16,
            }}
          >
            <View>
              <Text style={{ fontSize: 14, fontWeight: "700" }}>
                Credit Card ·{" "}
                <Text
                  style={{
                    fontWeight: "400",
                    color: Colors.notiTextColor,
                  }}
                >
                  HSBC Bank
                </Text>
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 14,
                  alignItems: "center",
                }}
              >
                <Image source={MASTERCARD} />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    color: Colors.notiTextColor,
                  }}
                >
                  ●●●● ●●●● ●●●● 4324
                </Text>
              </View>
            </View>
            <View>
              <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
                color={"#00B4BF"}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  color: Colors.notiTextColor,
                  paddingLeft: 12,
                  paddingBottom: 16,
                }}
              >
                1/24
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: Colors.borderColor,
              borderRadius: 4,
              justifyContent: "space-between",
              marginHorizontal: 13,
              paddingHorizontal: 13,
              paddingVertical: 12,
              marginVertical: 16,
            }}
          >
            <View>
              <Text style={{ fontSize: 14, fontWeight: "700" }}>
                Gold Pucks
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 14,
                  alignItems: "center",
                }}
              >
                <Image source={GOLDCOINSIMPLE} />
                <Text
                  style={{
                    fontSize: 12,
                    color: Colors.notiTextColor,
                    paddingLeft: 10,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>158 </Text>
                  pucks
                </Text>
              </View>
            </View>

            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
              color={"#00B4BF"}
            />
          </View>
        </View>

        <Text
          style={{
            fontSize: 18,
            color: "gray",
            marginLeft: "10%",
            marginTop: 20,
          }}
        >
          NOTE
        </Text>

        <Text
          style={{
            fontSize: 14,
            marginLeft: "10%",
            marginTop: 20,
          }}
        >
          Before 24 hours -{" "}
          <Text style={{ fontWeight: "bold" }}>Full refund</Text>
        </Text>

        <Text
          style={{
            fontSize: 14,
            marginLeft: "10%",
            marginTop: 10,
          }}
        >
          Before 12 hours -{" "}
          <Text style={{ fontWeight: "bold" }}>Half refund</Text>
        </Text>

        <Text
          style={{
            fontSize: 14,
            marginLeft: "10%",
            marginTop: 10,
          }}
        >
          After 12 hours - <Text style={{ fontWeight: "bold" }}>No refund</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={{
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "#DD0000",
          marginHorizontal: 20,
          borderRadius: 2,
          width: SCREEN_WIDTH * 0.9,
          marginTop: normalize(16),
          padding: 16,
        }}
        onPress={() =>
          props.navigation.navigate("RefundRequest", {
            title: "Payment Successful",
            message: "Your payment of $100 was successful",
            image: THUMB,
            btn: true,
            btnText: "back to home",
            screen: "Home",
          })
        }
      >
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 16,
            color: "white",
          }}
        >
          PAY $100
        </Text>
      </TouchableOpacity>

      {showNewCard && (
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
                      onPress={() => setShowNewCard(!showNewCard)}
                    >
                      <Ionicons
                        name="ios-arrow-back-outline"
                        color="white"
                        size={25}
                        style={{
                          paddingLeft: 12,
                          paddingRight: 12,
                        }}
                      />
                    </TouchableOpacity>

                    <Text
                      style={{
                        color: Colors.white,
                        fontSize: 16,
                        fontWeight: "700",
                      }}
                    >
                      Add a new card
                    </Text>
                  </View>
                </ImageBackground>
                <View
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <TextInput
                    style={[styles.inputStyle, { marginHorizontal: 16 }]}
                    placeholder="Card number"
                    label="Card number"
                    mode="outlined"
                    placeholderTextColor={Colors.darkGray}
                    keyboardType="default"
                    returnKeyType="next"
                    onChangeText={(text) => setName(text)}
                  />
                  <TextInput
                    style={[styles.inputStyle, { marginHorizontal: 16 }]}
                    placeholder="Name on card"
                    label="Name on card"
                    mode="outlined"
                    placeholderTextColor={Colors.darkGray}
                    keyboardType="default"
                    returnKeyType="next"
                    onChangeText={(text) => setName(text)}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 16,
                    }}
                  >
                    <TextInput
                      style={[
                        styles.inputStyle,
                        {
                          width: normalize(193),
                        },
                      ]}
                      placeholder="Expiry (MM/YY)"
                      label="Expiry (MM/YY)"
                      mode="outlined"
                      placeholderTextColor={Colors.darkGray}
                      keyboardType="default"
                      returnKeyType="next"
                      onChangeText={(text) => setName(text)}
                    />
                    <View
                      style={[
                        styles.inputStyle,
                        {
                          width: normalize(149),
                          paddingLeft: 10,
                          flexDirection: "row",
                          backgroundColor: "white",
                          alignItems: "center",
                        },
                      ]}
                    >
                      <TextInput
                        placeholder="CVC"
                        label="CVC"
                        mode="outlined"
                        placeholderTextColor={Colors.darkGray}
                        style={{
                          width: normalize(149),
                        }}
                        keyboardType="default"
                        returnKeyType="next"
                        onChangeText={(text) => setName(text)}
                      ></TextInput>
                      <Image
                        style={{
                          marginLeft: -30,
                          marginTop: 5,
                        }}
                        source={require("../../../assets/icons/info.png")}
                      />
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
                      ADD NEW CARD
                    </Text>
                  </TouchableOpacity>
                </View>
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
    backgroundColor: Colors.screenbackground,
  },
  inputStyle: {
    paddingTop: 24,
    borderRadius: 6,
    color: "black",
    backgroundColor: Colors.white,
  },
});
export default SelectPaymentModes;
