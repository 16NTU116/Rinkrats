import React, { useState, useEffect, useContext } from "react";
import {
	View,
	StyleSheet,
	Switch,
	SafeAreaView,
	TouchableOpacity,
	Text,
	Image,
	ImageBackground,
} from "react-native";
import Colors from "../../utils/colors";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import jwt_decode from "jwt-decode";
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

const JoinGame = (props) => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
						Join sub in as
					</Text>
				</View>
			</View>
			<TouchableOpacity
				style={{
					backgroundColor: "white",
					alignItems: "center",
					shadowColor: "black",
					shadowOffset: { width: 1, height: 1 },
					shadowRadius: 1,
					elevation: 8,
					paddingVertical: 22,
					paddingHorizontal: 32,
					marginTop: 12,
				}}
				onPress={() => props.navigation.navigate("RequestSent")}
			>
				<Text style={{ fontSize: 12, fontWeight: "700", paddingTop: 5 }}>
					Goalie
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					backgroundColor: "white",
					alignItems: "center",
					shadowColor: "black",
					shadowOffset: { width: 1, height: 1 },
					shadowRadius: 1,
					elevation: 8,
					paddingVertical: 22,
					paddingHorizontal: 32,
					marginTop: 12,
				}}
				onPress={() => props.navigation.navigate("RequestSent")}
			>
				<Text style={{ fontSize: 12, fontWeight: "700", paddingTop: 5 }}>
					Player
				</Text>
			</TouchableOpacity>
			<Image
				source={require("../../../assets/icons/tiltphone.png")}
				style={{ position: "absolute", top: normalize(330), right: 0 }}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
});
export default JoinGame;
