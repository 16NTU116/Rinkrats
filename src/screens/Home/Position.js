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

const Position = (props) => {
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
						Position
					</Text>
				</View>
			</View>
			<View
				style={{
					backgroundColor: Colors.screenbackground,
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
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 26,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								fontWeight: "400",
							}}
						>
							Right wing
						</Text>

						<Ionicons name="square-outline" size={20} color="#C4CAD3" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 26,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								fontWeight: "400",
							}}
						>
							Left wing
						</Text>

						<Ionicons name="square-outline" size={20} color="#C4CAD3" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 26,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								fontWeight: "400",
							}}
						>
							Center
						</Text>

						<Ionicons name="square-outline" size={20} color="#C4CAD3" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 26,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								fontWeight: "400",
							}}
						>
							Left defence
						</Text>

						<Ionicons name="square-outline" size={20} color="#C4CAD3" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 26,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								fontWeight: "400",
							}}
						>
							Right defence
						</Text>

						<Ionicons name="square-outline" size={20} color="#C4CAD3" />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 26,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								fontWeight: "400",
							}}
						>
							Goalie
						</Text>

						<Ionicons name="square-outline" size={20} color="#C4CAD3" />
					</View>
				</View>
				<Image
					source={require("../../../assets/icons/tiltphone.png")}
					style={{ position: "absolute", top: normalize(330), right: 0 }}
				/>
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
export default Position;
