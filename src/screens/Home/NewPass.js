import React, { useState, useEffect, useContext } from "react";
import {
	View,
	StyleSheet,
	Image,
	SafeAreaView,
	TouchableOpacity,
	Text,
	TextInput,
	ImageBackground,
} from "react-native";
import Colors from "../../utils/colors";

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

const NewPass = (props) => {
	const [name, setName] = useState("");
	const [show, setShow] = useState(false);
	useEffect(async () => {
		console.log("new hello");
	});

	return (
		<SafeAreaView style={styles.container}>
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
					Set New Password
				</Text>
			</View>
			<View
				style={{ position: "relative", marginHorizontal: 21, marginTop: 13 }}
			>
				<Text>Enter a new password </Text>

				<TextInput
					keyboardType="default"
					style={{
						margin: 10,
						padding: 16,
						fontSize: 16,
						backgroundColor: "transparent",
						borderRadius: 5,
						color: Colors.dull,
						borderWidth: 1,
						borderColor: Colors.notiTextColor,
						width: SCREEN_WIDTH * 0.9,
						alignSelf: "center",
						marginTop: normalize(8),
					}}
					placeholder="New Password"
					secureTextEntry
					placeholderTextColor={Colors.notiTextColor}
					value={name}
					onChangeText={(text) => setName(text)}
				/>
				<Ionicons
					name="ios-eye-off-outline"
					color="gray"
					size={25}
					style={{ position: "absolute", right: 10, top: normalize(38) }}
				/>

				<TextInput
					keyboardType="default"
					style={{
						margin: 10,
						padding: 16,
						fontSize: 16,
						backgroundColor: "transparent",
						borderRadius: 5,
						color: Colors.dull,
						borderWidth: 1,
						borderColor: Colors.notiTextColor,
						width: SCREEN_WIDTH * 0.9,
						alignSelf: "center",
						marginTop: normalize(8),
					}}
					placeholder="Confirm Password"
					secureTextEntry
					placeholderTextColor={Colors.notiTextColor}
					value={name}
					onChangeText={(text) => setName(text)}
				/>
				<Ionicons
					name="ios-eye-off-outline"
					color="gray"
					size={25}
					style={{ position: "absolute", right: 10, top: normalize(104) }}
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
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
});
export default NewPass;
