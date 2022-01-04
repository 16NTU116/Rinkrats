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
import Colors from "../../utils/colors";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import jwt_decode from "jwt-decode";
import {
	GOLDCOINSIMPLE,
	LEAGUE,
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
			<ImageBackground
				source={LEAGUE}
				resizeMode="cover"
				style={{ width: "100%", height: normalize(263) }}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						paddingTop: normalize(40),
						paddingHorizontal: normalize(13),
						justifyContent: "space-between",
					}}
				>
					<TouchableOpacity onPress={() => props.navigation.goBack()}>
						<Ionicons name="ios-arrow-back-outline" color="white" size={20} />
					</TouchableOpacity>
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
							<Ionicons name="ios-funnel-outline" color="white" size={20} />
						</TouchableOpacity>
						<TouchableOpacity
							style={{ marginHorizontal: 4 }}
							onPress={() => props.navigation.goBack()}
						>
							<Image source={require("../../../assets/icons/whitebell.png")} />
						</TouchableOpacity>
						<TouchableOpacity
							style={{ marginHorizontal: 4 }}
							onPress={() => props.navigation.goBack()}
						>
							<Ionicons
								name="ios-ellipsis-vertical-outline"
								color="white"
								size={20}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={{
						alignItems: "center",
					}}
				>
					<Text
						style={{
							color: "white",
							fontWeight: "700",
							fontSize: 20,
							marginTop: 40,
						}}
					>
						League
					</Text>
				</View>
				<ScrollView
					style={{
						marginTop: normalize(60),
					}}
					horizontal
				>
					<TouchableOpacity
						style={{
							backgroundColor: "rgba(255, 105, 105, 0.3)",
							borderRadius: 40,
							marginHorizontal: 8,
							alignSelf: "center",
							alignItems: "center",
						}}
					>
						<Text
							style={{
								color: Colors.notiTextColor,
								fontSize: 14,
								fontWeight: "500",
								paddingVertical: 8,
								paddingHorizontal: 20,
							}}
						>
							ALL
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							borderRadius: 40,
							marginHorizontal: 8,
							alignSelf: "center",
							alignItems: "center",
						}}
					>
						<Text
							style={{
								color: Colors.notiTextColor,
								fontSize: 14,
								fontWeight: "500",
								paddingVertical: 8,
								paddingHorizontal: 20,
							}}
						>
							MINE
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							borderRadius: 40,
							marginHorizontal: 8,
							alignSelf: "center",
							alignItems: "center",
						}}
						onPress={() => props.navigation.navigate("LeagueManager")}
					>
						<Text
							style={{
								color: Colors.notiTextColor,
								fontSize: 14,
								fontWeight: "500",
								paddingVertical: 8,
								paddingHorizontal: 20,
							}}
						>
							LEAGUE MANAGER
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							borderRadius: 40,
							marginHorizontal: 8,
							alignSelf: "center",
							alignItems: "center",
						}}
						onPress={() => props.navigation.navigate("ScoreKeeper")}
					>
						<Text
							style={{
								color: Colors.notiTextColor,
								fontSize: 14,
								fontWeight: "500",
								paddingVertical: 8,
								paddingHorizontal: 20,
							}}
						>
							SCORE KEEPER
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							borderRadius: 40,
							marginHorizontal: 8,
							alignSelf: "center",
							alignItems: "center",
						}}
						onPress={() => props.navigation.navigate("Coach")}
					>
						<Text
							style={{
								color: Colors.notiTextColor,
								fontSize: 14,
								fontWeight: "500",
								paddingVertical: 8,
								paddingHorizontal: 20,
							}}
						>
							COACH
						</Text>
					</TouchableOpacity>
				</ScrollView>
			</ImageBackground>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					marginTop: 16,
					marginHorizontal: 8,
				}}
			>
				<TouchableOpacity
					style={{
						backgroundColor: "white",
						alignItems: "center",
						shadowColor: "black",
						shadowOffset: { width: 1, height: 1 },
						shadowRadius: 1,
						elevation: 8,
						width: SCREEN_WIDTH / 2.15,
						paddingVertical: 22,
						paddingHorizontal: 32,
					}}
					onPress={() => props.navigation.navigate("Subins")}
				>
					<Ionicons
						name="refresh-outline"
						color={Colors.notiTextColor}
						size={16}
					/>
					<Text style={{ fontSize: 12, fontWeight: "700", paddingTop: 5 }}>
						Subins
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
						width: SCREEN_WIDTH / 2.15,
						paddingVertical: 22,
						paddingHorizontal: 32,
					}}
					onPress={() => props.navigation.navigate("Teams")}
				>
					<Ionicons
						name="ios-people-outline"
						color={Colors.notiTextColor}
						size={16}
					/>
					<Text style={{ fontSize: 12, fontWeight: "700", paddingTop: 5 }}>
						Teams
					</Text>
				</TouchableOpacity>
			</View>

			<View style={{ backgroundColor: "white", paddingTop: 30, zIndex: 2 }}>
				<ImageBackground
					source={LEAGUE_BG}
					resizeMode="cover"
					style={{
						width: "100%",
						height: normalize(56),
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Text
						style={{
							marginLeft: 8,
							fontSize: 14,
							alignItems: "center",
							justifyContent: "center",
							color: "white",
							fontWeight: "700",
						}}
					>
						Archie League
					</Text>
					<Image source={require("../../../assets/icons/whitebell.png")} />
				</ImageBackground>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginTop: 8,
						marginHorizontal: 12,
						backgroundColor: "#E5FAFB",
						paddingVertical: 12,
						justifyContent: "space-between",
					}}
				>
					<View
						style={{
							flexDirection: "row",
							backgroundColor: "#E5FAFB",
						}}
					>
						<Image source={require("../../../assets/icons/greenhockey.png")} />
						<Text
							style={{
								marginLeft: 8,
								fontSize: 14,
								alignItems: "center",
								justifyContent: "center",
								color: Colors.prim2,
								fontWeight: "bold",
							}}
						>
							Rink Royce
						</Text>
					</View>
					<Text
						style={{
							marginLeft: 8,
							fontSize: 14,
							alignItems: "center",
							justifyContent: "center",
							color: Colors.prim1,
							fontWeight: "bold",
						}}
					>
						21st - 25th May
					</Text>
				</View>

				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-evenly",
						paddingTop: 22,
						backgroundColor: "white",
					}}
				>
					<Text
						style={{
							marginLeft: 8,
							fontSize: 14,
							alignItems: "center",
							justifyContent: "center",
							color: Colors.prim4,
							fontWeight: "bold",
						}}
					>
						Type · Adult
					</Text>
					<Text
						style={{
							marginLeft: 8,
							fontSize: 14,
							alignItems: "center",
							justifyContent: "center",
							color: Colors.prim4,
							fontWeight: "bold",
						}}
					>
						Divisions · U18, U19, U20
					</Text>
				</View>
				<HorizontalLine />
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						paddingTop: 24,
					}}
				>
					<View
						style={{
							backgroundColor: "#FDF2F2",
							borderRadius: 40,
							marginHorizontal: 8,
							alignSelf: "center",
							alignItems: "center",
						}}
					>
						<Text
							style={{
								color: Colors.prim1,
								fontSize: 14,
								fontWeight: "500",
								paddingVertical: 8,
								paddingHorizontal: 20,
							}}
						>
							SUB-INS
						</Text>
					</View>
					<View
						style={{
							backgroundColor: "#FDF2F2",
							borderRadius: 40,
							marginHorizontal: 8,
							alignSelf: "center",
							alignItems: "center",
						}}
					>
						<Text
							style={{
								color: Colors.notiTextColor,
								fontSize: 14,
								fontWeight: "500",
								paddingVertical: 8,
								paddingHorizontal: 20,
							}}
						>
							TEAMS
						</Text>
					</View>
				</View>
			</View>
			<Image
				source={require("../../../assets/icons/tiltphone.png")}
				style={{ position: "absolute", top: normalize(330), right: 0 }}
			/>
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
