import React, { useState, useEffect, useContext } from "react";
import {
     View,
     StyleSheet,
     Image,
     SafeAreaView,
     TouchableOpacity,
     Text,
     ImageBackground,
     ScrollView,
     Modal,
} from "react-native";
import Colors from "../../utils/colors";
import { TextInput } from "react-native-paper";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import jwt_decode from "jwt-decode";
import {
     SCREEN_HEIGHT,
     GOLDCOINSIMPLE,
     COINBG,
     MASTERCARD,
     SCREEN_WIDTH,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import AuthText from "../../components/AuthText";
import moment from "moment";
import CalendarPicker from "react-native-calendar-picker";
import DropDownPicker from "react-native-dropdown-picker";
const General = (props) => {
     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState("");
     const [email, setEmail] = useState("");
     const [phone, setPhone] = useState();
     const [show, setShow] = useState(false);
     const [date, setDate] = useState();
     const [value, setValue] = useState();
     const [cityValue, setCityValue] = useState();
     const [stateValue, setStateValue] = useState();
     const [openCountry, setOpenCountry] = useState(false);
     const [openState, setOpenState] = useState(false);
     const [openCity, setOpenCity] = useState(false);
     const [showModal, setShowModal] = useState(false);
     const [zipCode, setZipCode] = useState();
     const [countries, setCountries] = useState([
          { label: " Pakistan", value: "Pakistan" },
          { label: " India", value: "India" },
          { label: " Bangladesh", value: "Bangladesh" },
     ]);
     const [states, setStates] = useState([
          { label: " Pakistan", value: "Pakistan" },
          { label: " India", value: "India" },
          { label: " Bangladesh", value: "Bangladesh" },
     ]);
     const [city, setCity] = useState([
          { label: " Pakistan", value: "Pakistan" },
          { label: " India", value: "India" },
          { label: " Bangladesh", value: "Bangladesh" },
     ]);
     const onDateChange = (date) => {
          setShowModal(false);
          let formattedDate = moment(date).format("L");
          setDate(formattedDate);
     };
     const setCountryValueCallBack = (valueVal) => {
          setValue(valueVal(value));
          // setMonthsValues(valueVal(value));
     };
     const setCityValueCallBack = (valueVal) => {
          setCityValue(valueVal(value));
          // setMonthsValues(valueVal(value));
     };
     const setStateValueCallBack = (valueVal) => {
          setStateValue(valueVal(value));
          // setMonthsValues(valueVal(value));
     };
     useEffect(async () => {
          console.log("new hello");
     });

     return (
          <SafeAreaView style={styles.container}>
               <ScrollView>
                    <View
                         style={{
                              flexDirection: "row",
                              alignItems: "center",
                              marginHorizontal: 12,
                              paddingBottom: 14,
                         }}
                    >
                         <TouchableOpacity
                              onPress={() => props.navigation.goBack()}
                         >
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
                              General Info
                         </Text>
                    </View>
                    <View
                         style={{
                              position: "relative",
                              marginHorizontal: 21,
                              marginTop: 13,
                         }}
                    >
                         <TextInput
                              label="First Name"
                              value={firstName}
                              mode="outlined"
                              onChangeText={(text) => setFirstName(text)}
                         />
                         <TextInput
                              label="Last Name"
                              value={lastName}
                              mode="outlined"
                              style={{ marginTop: 10 }}
                              onChangeText={(text) => setLastName(text)}
                         />
                         <TextInput
                              label="Email Address"
                              value={email}
                              mode="outlined"
                              style={{ marginTop: 10 }}
                              onChangeText={(text) => setEmail(text)}
                         />
                         <TextInput
                              label="Phone Number"
                              value={phone}
                              mode="outlined"
                              style={{ marginTop: 10 }}
                              onChangeText={(text) => setPhone(text)}
                         />
                         <TouchableOpacity
                              style={{
                                   flexDirection: "row",
                                   width: "100%",
                                   alignSelf: "center",
                                   borderColor: "gray",
                                   borderWidth: 0.9,
                                   borderRadius: 5,
                                   justifyContent: "space-between",
                                   marginTop: 10,
                                   paddingVertical: 18,
                                   paddingHorizontal: 10,
                              }}
                              onPress={() => setShowModal(true)}
                         >
                              {showModal && (
                                   <CalendarPicker
                                        onDateChange={onDateChange}
                                   />
                              )}
                              {date ? (
                                   <Text style={{ color: "black" }}>
                                        {date}
                                   </Text>
                              ) : (
                                   <Text style={{ color: "gray" }}>Date</Text>
                              )}
                              <Image
                                   source={require("../../../assets/icons/calendar.png")}
                                   style={{
                                        height: 15,
                                        width: 15,
                                        tintColor: "gray",
                                   }}
                              />
                         </TouchableOpacity>

                         <DropDownPicker
                              open={openCountry}
                              value={value}
                              items={countries}
                              autoScroll={true}
                              maxHeight={100}
                              placeholder="Country"
                              // placeholder="(Up-to $2,000,000)"
                              placeholderStyle={{
                                   borderColor: "white",
                                   borderWidth: 0,
                                   paddingHorizontal: -15,
                              }}
                              // dropDownBox={{zindex: 100}}
                              dropDownContainerStyle={{
                                   zIndex: 1,
                              }}
                              style={{
                                   width: "100%",
                                   backgroundColor: "transparent",
                                   borderColor: "gray",
                                   borderWidth: 0.9,
                                   borderRadius: 5,
                                   paddingVertical: 10,
                                   marginTop: 10,
                                   borderBottomColor: openCountry
                                        ? "white"
                                        : "gray",
                              }}
                              listMode="SCROLLVIEW"
                              scrollViewProps={{
                                   nestedScrollEnabled: true,
                              }}
                              setOpen={setOpenCountry}
                              setValue={setCountryValueCallBack}
                              setItems={setCountries}
                         />

                         <DropDownPicker
                              open={openState}
                              value={stateValue}
                              items={states}
                              autoScroll={true}
                              maxHeight={100}
                              placeholder="State"
                              // placeholder="(Up-to $2,000,000)"
                              placeholderStyle={{
                                   borderColor: "white",
                                   borderWidth: 0,
                                   paddingHorizontal: -15,
                              }}
                              // dropDownBox={{zindex: 100}}
                              dropDownContainerStyle={{
                                   zIndex: 2,
                              }}
                              style={{
                                   borderColor: "white",
                                   width: "100%",
                                   backgroundColor: "transparent",
                                   borderColor: "gray",
                                   borderWidth: 0.9,
                                   borderRadius: 5,
                                   paddingVertical: 10,
                                   marginTop: openCountry ? 130 : 10,
                                   borderBottomColor: openState
                                        ? "white"
                                        : "gray",
                              }}
                              listMode="SCROLLVIEW"
                              scrollViewProps={{
                                   nestedScrollEnabled: true,
                              }}
                              setOpen={setOpenState}
                              setValue={setStateValueCallBack}
                              setItems={setStates}
                         />

                         <DropDownPicker
                              open={openCity}
                              value={cityValue}
                              items={countries}
                              autoScroll={true}
                              maxHeight={100}
                              placeholder="City"
                              // placeholder="(Up-to $2,000,000)"
                              placeholderStyle={{
                                   borderColor: "white",
                                   borderWidth: 0,
                                   paddingHorizontal: -15,
                              }}
                              // dropDownBox={{zindex: 100}}
                              dropDownContainerStyle={{
                                   zIndex: 3,
                              }}
                              style={{
                                   borderColor: "white",
                                   width: "100%",
                                   backgroundColor: "transparent",
                                   borderColor: "gray",
                                   borderWidth: 0.9,
                                   borderRadius: 5,
                                   paddingVertical: 10,
                                   marginTop: openState ? 130 : 10,
                                   borderBottomColor: openCity
                                        ? "white"
                                        : "gray",
                              }}
                              listMode="SCROLLVIEW"
                              scrollViewProps={{
                                   nestedScrollEnabled: true,
                              }}
                              setOpen={setOpenCountry}
                              setValue={setCountryValueCallBack}
                              setItems={setCountries}
                         />

                         <TextInput
                              label="Zipcode"
                              value={zipCode}
                              mode="outlined"
                              style={{ marginTop: 10 }}
                              onChangeText={(text) => setZipCode(text)}
                         />

                         <TouchableOpacity
                              style={{
                                   alignItems: "center",
                                   alignSelf: "center",
                                   backgroundColor: "#D7DCE2",
                                   marginHorizontal: 20,
                                   borderRadius: 2,
                                   width: SCREEN_WIDTH * 0.9,
                                   marginTop: normalize(16),
                                   padding: 16,
                              }}
                              onPress={() => props.navigation.goBack()}
                         >
                              <Text
                                   style={{
                                        fontFamily: "Nunito",
                                        fontSize: 16,
                                        color: Colors.textColorDullHome,
                                   }}
                              >
                                   UPDATE
                              </Text>
                         </TouchableOpacity>
                    </View>
               </ScrollView>
          </SafeAreaView>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: Colors.screenbackground,
     },
});
export default General;
