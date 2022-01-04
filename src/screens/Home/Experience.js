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

const Experience = (props) => {
	const [name, setName] = useState("");
	const [show, setShow] = useState(false);
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
						Experience
					</Text>
				</View>
				<View
					style={{ position: "relative", marginHorizontal: 21, marginTop: 13 }}
				>
					<TextInput
						style={{ backgroundColor: "transparent", borderColor: "#E9EDF1" }}
						placeholder="Games played with Pros"
						label="Games played with Pros"
						mode="outlined"
						placeholderTextColor={Colors.darkGray}
						keyboardType="default"
						returnKeyType="next"
						onChangeText={(text) => setName(text)}
					/>
					<TextInput
						style={{
							backgroundColor: "transparent",
							borderColor: "#E9EDF1",
							marginTop: 8,
						}}
						placeholder="Games played with minors"
						label="Games played with minors"
						mode="outlined"
						placeholderTextColor={Colors.darkGray}
						keyboardType="default"
						returnKeyType="next"
						onChangeText={(text) => setName(text)}
					/>
					<TextInput
						style={{
							backgroundColor: "transparent",
							borderColor: "#E9EDF1",
							marginTop: 8,
						}}
						placeholder="Age started"
						label="Age started"
						mode="outlined"
						placeholderTextColor={Colors.darkGray}
						keyboardType="default"
						returnKeyType="next"
						onChangeText={(text) => setName(text)}
					/>
					<TextInput
						style={{
							backgroundColor: "transparent",
							borderColor: "#E9EDF1",
							marginTop: 8,
						}}
						placeholder="How many years?"
						label="How many years?"
						mode="outlined"
						placeholderTextColor={Colors.darkGray}
						keyboardType="default"
						returnKeyType="next"
						onChangeText={(text) => setName(text)}
					/>
					<TextInput
						style={{
							backgroundColor: "transparent",
							borderColor: "#E9EDF1",
							marginTop: 8,
						}}
						placeholder="Consecutive years playing?"
						label="Consecutive years playing?"
						mode="outlined"
						placeholderTextColor={Colors.darkGray}
						keyboardType="default"
						returnKeyType="next"
						onChangeText={(text) => setName(text)}
					/>
					<Text style={{ marginTop: 36, color: "#8F959D", marginBottom: 23 }}>
						Last game played
					</Text>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<Text>Mite</Text>
						<Ionicons name="ios-radio-button-off" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 30,
						}}
					>
						<Text>Squirt</Text>
						<Ionicons name="ios-radio-button-off" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 30,
						}}
					>
						<Text>Peewee</Text>
						<Ionicons name="ios-radio-button-off" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 30,
						}}
					>
						<Text>Bantam</Text>
						<Ionicons name="ios-radio-button-off" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 30,
						}}
					>
						<Text>Midget minor - 15 & under</Text>
						<Ionicons name="ios-radio-button-off" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 30,
						}}
					>
						<Text>Midget minor - 16 & under</Text>
						<Ionicons name="ios-radio-button-off" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 30,
						}}
					>
						<Text>High School</Text>
						<Ionicons name="ios-radio-button-off" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 30,
						}}
					>
						<Text>Junior</Text>
						<Ionicons name="ios-radio-button-off" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 30,
						}}
					>
						<Text>College</Text>
						<Ionicons name="ios-radio-button-off" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 30,
						}}
					>
						<Text>Semi Pro</Text>
						<Ionicons name="ios-radio-button-off" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 30,
						}}
					>
						<Text>Pro</Text>
						<Ionicons name="ios-radio-button-off" />
					</View>
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
						onPress={() => props.navigation.navigate("PasswordUpdated")}
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
export default Experience;
