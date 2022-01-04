import React, { useState, useEffect, useContext } from "react";
import {
	View,
	StyleSheet,
	Switch,
	SafeAreaView,
	TouchableOpacity,
	Text,
	FlatList,
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

const Notifications = (props) => {
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
						App Settings
					</Text>
				</View>
				<Ionicons
					name="ios-ellipsis-vertical-outline"
					color="black"
					size={20}
					style={{ color: "transparent" }}
				/>
			</View>
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
							marginBottom: 26,
						}}
					>
						General
					</Text>

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
							Allow SMS notifications
						</Text>

						<Switch
							trackColor={{ false: "#767577", true: Colors.switchColor }}
							style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
							thumbColor={isEnabled ? "white" : "white"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch}
							value={isEnabled}
						/>
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 26,
						}}
					>
						<View>
							<Text
								style={{
									fontSize: 12,
									fontWeight: "400",
								}}
							>
								Make me discoverable
							</Text>
							<Text
								style={{
									fontSize: 12,
									fontWeight: "400",
									color: Colors.notiTextColor,
									paddingTop: 7,
								}}
							>
								Friends will be able to find and invite you.
							</Text>
						</View>
						<Switch
							trackColor={{ false: "#767577", true: Colors.switchColor }}
							style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
							thumbColor={isEnabled ? "white" : "white"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch}
							value={isEnabled}
						/>
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
							App sounds
						</Text>

						<Switch
							trackColor={{ false: "#767577", true: Colors.switchColor }}
							style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
							thumbColor={isEnabled ? "white" : "white"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch}
							value={isEnabled}
						/>
					</View>
					<Text
						style={{
							color: Colors.notiTextColor,
							fontSize: 12,
							fontWeight: "500",
							marginVertical: 32,
						}}
					>
						NOTIFICATIONS
					</Text>

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
							Check in
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
							Rate player
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
							Rate goalie
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
							Goalie tip
						</Text>

						<Ionicons name="square-outline" size={20} color="#C4CAD3" />
					</View>
				</View>
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
export default Notifications;
