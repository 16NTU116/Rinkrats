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
} from "react-native";
import Colors from "../../utils/colors";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import jwt_decode from "jwt-decode";
import {
	GOLDCOINSIMPLE,
	SUBIN,
	SCREEN_WIDTH,
	LEAGUE_BG,
	PICKUP_COIN,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HomeHeader from "../../components/HomeHeader";
import HorizontalLine from "../../components/HorizontalLine";

const League = (props) => {
	const [name, setName] = useState(null);
	const [password, setPassword] = useState(null);
	const [signup, setSignup] = useState(true);
	useEffect(async () => {
		console.log("new hello");
	});

	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					paddingTop: normalize(40),
					paddingHorizontal: normalize(13),
					justifyContent: "space-between",
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
						Ongoing Game
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<TouchableOpacity
						style={{ marginHorizontal: 4 }}
						onPress={() => props.navigation.goBack()}
					>
						<Ionicons
							name="ios-ellipsis-vertical-outline"
							color="black"
							size={20}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<ImageBackground
				source={require("../../../assets/images/temp3.png")}
				resizeMode="cover"
				style={{ width: "100%", height: normalize(385), marginTop: 4 }}
			>
				<View
					style={{
						flexDirection: "row",
						width: normalize(350),
					}}
				>
					<View
						style={{
							marginTop: normalize(300),
						}}
					>
						<TouchableOpacity
							style={{
								alignItems: "center",
								backgroundColor: Colors.prim1,
								marginHorizontal: 10,
								borderRadius: 5,
								padding: 4,
								width: "60%",
							}}
							onPress={() => props.navigation.navigate("TeamProfile")}
						>
							<Text
								style={{
									fontFamily: "Nunito",
									fontSize: 12,
									color: Colors.white,
								}}
							>
								GOAL
							</Text>
						</TouchableOpacity>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginTop: 8,
							}}
						>
							<TouchableOpacity
								style={{
									alignItems: "center",
									backgroundColor: Colors.prim2,
									marginHorizontal: 10,
									borderRadius: 5,
									padding: 4,
									width: "28%",
								}}
								onPress={() => props.navigation.navigate("TeamProfile")}
							>
								<Text
									style={{
										fontFamily: "Nunito",
										fontSize: 12,
										color: Colors.white,
									}}
								>
									PANELTY
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									alignItems: "center",

									backgroundColor: "rgba(255, 255, 255, 0.25)",

									borderRadius: 5,
									padding: 4,
									width: "28%",
								}}
								onPress={() => props.navigation.navigate("TeamProfile")}
							>
								<Text
									style={{
										fontFamily: "Nunito",
										fontSize: 12,
										color: Colors.white,
									}}
								>
									SAVE
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View
						style={{
							marginTop: normalize(300),
						}}
					>
						<TouchableOpacity
							style={{
								alignItems: "center",
								backgroundColor: Colors.prim1,

								borderRadius: 5,
								padding: 4,
								width: "60%",
							}}
							onPress={() => props.navigation.navigate("TeamProfile")}
						>
							<Text
								style={{
									fontFamily: "Nunito",
									fontSize: 12,
									color: Colors.white,
								}}
							>
								GOAL
							</Text>
						</TouchableOpacity>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginTop: 8,
							}}
						>
							<TouchableOpacity
								style={{
									alignItems: "center",
									backgroundColor: Colors.prim2,
									borderRadius: 5,
									padding: 4,
									width: "28%",
								}}
								onPress={() => props.navigation.navigate("TeamProfile")}
							>
								<Text
									style={{
										fontFamily: "Nunito",
										fontSize: 12,
										color: Colors.white,
									}}
								>
									PANELTY
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									alignItems: "center",
									marginHorizontal: 10,
									backgroundColor: "rgba(255, 255, 255, 0.25)",

									borderRadius: 5,
									padding: 4,
									width: "28%",
								}}
								onPress={() => props.navigation.navigate("TeamProfile")}
							>
								<Text
									style={{
										fontFamily: "Nunito",
										fontSize: 12,
										color: Colors.white,
									}}
								>
									SAVE
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ImageBackground>
			<View
				style={{
					paddingVertical: 10,
					flexDirection: "row",
					backgroundColor: "white",
				}}
			>
				<View>
					<Text
						style={{ marginLeft: 8, fontSize: 14, color: Colors.notiTextColor }}
					>
						Number
					</Text>
					<Image source={require("../../../assets/images/temp4.png")} />
					<Image source={require("../../../assets/images/temp4.png")} />
				</View>

				<View style={{ marginLeft: 12 }}>
					<Text
						style={{ marginLeft: 8, fontSize: 14, color: Colors.notiTextColor }}
					>
						PANELTY
					</Text>
					<Image source={require("../../../assets/images/temp5.png")} />
					<Image source={require("../../../assets/images/temp5.png")} />
				</View>
				<View style={{ marginLeft: 18 }}>
					<Text
						style={{
							fontSize: 14,
							color: Colors.notiTextColor,
							alignSelf: "center",
						}}
					>
						SCORE
					</Text>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<Image source={require("../../../assets/images/temp4.png")} />
						<Image source={require("../../../assets/images/temp5.png")} />
					</View>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<View
							style={{
								borderColor: "gray",
								borderWidth: 1,
								height: 36,
								width: 81,
							}}
						/>
						<View
							style={{
								borderColor: "gray",
								borderWidth: 1,
								height: 36,
								width: 81,
							}}
						/>
					</View>
				</View>
			</View>
			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity
					style={{
						alignItems: "center",
						alignSelf: "center",
						borderWidth: 1,
						borderColor: "gray",
						borderRadius: 5,
						padding: 8,
						width: "40%",
						marginLeft: 12,
					}}
					onPress={() => props.navigation.navigate("Home")}
				>
					<Text
						style={{
							fontSize: 12,
						}}
					>
						TIMEOUT
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						alignItems: "center",
						alignSelf: "center",
						borderWidth: 1,
						borderColor: "gray",
						borderRadius: 5,
						padding: 8,
						width: "40%",
						marginLeft: 32,
					}}
					onPress={() => props.navigation.navigate("Home")}
				>
					<Text
						style={{
							fontSize: 12,
						}}
					>
						TIMEOUT
					</Text>
				</TouchableOpacity>
			</View>
			<View style={{ backgroundColor: "white" }}>
				<TouchableOpacity
					style={{
						alignItems: "center",
						alignSelf: "center",
						backgroundColor: Colors.prim1,
						marginHorizontal: 20,
						borderRadius: 5,
						marginTop: 16,
						padding: 16,
						width: "90%",
						marginBottom: 20,
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
						START PLAY
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						alignItems: "center",
						alignSelf: "center",
						borderWidth: 1,
						borderColor: "#D7DCE2",
						width: "90%",
						marginHorizontal: 20,
						borderRadius: 5,
						padding: 16,
					}}
					onPress={() => props.navigation.navigate("Home")}
				>
					<Text
						style={{
							fontFamily: "Nunito",
							fontSize: 20,
						}}
					>
						HOLD UPDATES
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenbackground,
	},
});
export default League;
