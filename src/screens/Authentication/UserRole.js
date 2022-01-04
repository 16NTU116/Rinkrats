import React, { useState, useEffect, useContext } from "react";
import {
	View,
	StyleSheet,
	Image,
	Dimensions,
	TouchableOpacity,
	Text,
	TextInput,
} from "react-native";
import Colors from "../../utils/colors";
import normalize from "react-native-normalize";
import jwt_decode from "jwt-decode";
import {
	SCREEN_HEIGHT,
	ONBOARDING_BG2,
	SCREEN_WIDTH,
	LOCK,
} from "../../utils/Constants";
import AuthHeader from "../../components/AuthHeader";
import AuthText from "../../components/AuthText";
// import { UserStoreContext } from "../store/UserStoreContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";

const UserRole = (props) => {
	const [name, setName] = useState(null);
	const [password, setPassword] = useState(null);
	const [signup, setSignup] = useState(true);
	useEffect(async () => {
		console.log("new hello");
	});

	return (
		<View style={styles.container}>
			<Image
				width={SCREEN_WIDTH}
				height={SCREEN_HEIGHT}
				style={styles.logo}
				source={ONBOARDING_BG2}
			/>
			<View
				style={{
					position: "absolute",
					top: SCREEN_HEIGHT * 0.05,
					left: 0,
					right: 0,
					bottom: 0,
				}}
			>
				<View
					style={{ position: "relative", marginHorizontal: 21, marginTop: 27 }}
				>
					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Text
							style={{
								color: "white",
								fontSize: 16,
								fontWeight: "700",
							}}
						>
							Joining Rink Rates as a
						</Text>
					</View>
					<TouchableOpacity
						style={{
							alignItems: "center",
							alignSelf: "center",
							backgroundColor: "rgba(255, 255, 255, 0.15)",
							marginHorizontal: 20,
							borderRadius: 2,
							width: SCREEN_WIDTH * 0.9,
							marginTop: normalize(37),
							padding: 16,
						}}
						onPress={() => props.navigation.navigate("Login")}
					>
						<Text
							style={{
								fontFamily: "Nunito",
								fontSize: 16,
								color: Colors.white,
							}}
						>
							PLAYER
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							alignItems: "center",
							alignSelf: "center",
							backgroundColor: "rgba(255, 255, 255, 0.15)",
							marginHorizontal: 20,
							borderRadius: 2,
							width: SCREEN_WIDTH * 0.9,
							marginTop: normalize(16),
							padding: 16,
						}}
						onPress={() => props.navigation.navigate("Login")}
					>
						<Text
							style={{
								fontFamily: "Nunito",
								fontSize: 16,
								color: Colors.white,
							}}
						>
							MANAGER
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							alignItems: "center",
							alignSelf: "center",
							backgroundColor: "rgba(255, 255, 255, 0.15)",
							marginHorizontal: 20,
							borderRadius: 2,
							width: SCREEN_WIDTH * 0.9,
							marginTop: normalize(16),
							padding: 16,
						}}
						onPress={() => props.navigation.navigate("Login")}
					>
						<Text
							style={{
								fontFamily: "Nunito",
								fontSize: 16,
								color: Colors.white,
							}}
						>
							CONTRACTOR
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							alignItems: "center",
							alignSelf: "center",
							backgroundColor: "rgba(255, 255, 255, 0.15)",
							marginHorizontal: 20,
							borderRadius: 2,
							width: SCREEN_WIDTH * 0.9,
							marginTop: normalize(16),
							padding: 16,
						}}
						onPress={() => props.navigation.navigate("Login")}
					>
						<Text
							style={{
								fontFamily: "Nunito",
								fontSize: 16,
								color: Colors.white,
							}}
						>
							COACH
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							alignItems: "center",
							alignSelf: "center",
							backgroundColor: "rgba(255, 255, 255, 0.15)",
							marginHorizontal: 20,
							borderRadius: 2,
							width: SCREEN_WIDTH * 0.9,
							marginTop: normalize(16),
							padding: 16,
						}}
						onPress={() => props.navigation.navigate("Login")}
					>
						<Text
							style={{
								fontFamily: "Nunito",
								fontSize: 16,
								color: Colors.white,
							}}
						>
							REFEREE
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							alignItems: "center",
							alignSelf: "center",
							backgroundColor: "rgba(255, 255, 255, 0.15)",
							marginHorizontal: 20,
							borderRadius: 2,
							width: SCREEN_WIDTH * 0.9,
							marginTop: normalize(16),
							padding: 16,
						}}
						onPress={() => props.navigation.navigate("Login")}
					>
						<Text
							style={{
								fontFamily: "Nunito",
								fontSize: 16,
								color: Colors.white,
							}}
						>
							SCORE KEEPER
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
							marginTop: normalize(128),
							padding: 16,
						}}
						onPress={() => props.navigation.navigate("Home")}
					>
						<Text
							style={{
								fontFamily: "Nunito",
								fontSize: 16,
								color: Colors.white,
							}}
						>
							START NOW
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
	},
});
export default UserRole;
