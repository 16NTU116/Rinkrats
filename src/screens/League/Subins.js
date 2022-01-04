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
						Sub Ins
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
						<Ionicons name="ios-funnel-outline" color="black" size={20} />
					</TouchableOpacity>
				</View>
			</View>
			<ImageBackground
				source={SUBIN}
				resizeMode="cover"
				style={{ width: "100%", height: normalize(248), marginTop: 4 }}
			>
				<View
					style={{
						alignItems: "center",
						marginTop: 30,
					}}
				>
					<Image source={require("../../../assets/images/refresh.png")} />
					<Text
						style={{
							color: "white",
							fontWeight: "700",
							fontSize: 20,
							marginTop: 10,
						}}
					>
						5
					</Text>
					<Text
						style={{
							color: Colors.notiTextColor,
							fontWeight: "400",
							fontSize: 10,
						}}
					>
						Sub Ins
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-evenly",
						marginTop: normalize(60),
					}}
				>
					<TouchableOpacity
						style={{
							backgroundColor: "rgba(255, 105, 105, 0.3)",
							borderRadius: 40,
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
				</View>
			</ImageBackground>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					paddingVertical: 10,
				}}
			>
				<Text style={{ marginLeft: 8, fontSize: 14 }}>
					Today, 24th April 2021
				</Text>
			</View>
			<TouchableOpacity onPress={() => props.navigation.navigate("Game")}>
				<Image source={require("../../../assets/images/temp1.png")} />
			</TouchableOpacity>

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
