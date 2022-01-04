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
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import jwt_decode from "jwt-decode";
import {
	GOLDCOINSIMPLE,
	STAR,
	SCREEN_WIDTH,
	SCREEN_HEIGHT,
	COINBG,
	GOLDCOIN,
	DARKCOIN,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HomeHeader from "../../components/HomeHeader";
import HorizontalLine from "../../components/HorizontalLine";

const UpdateSkills = (props) => {
	const [name, setName] = useState(null);
	const [password, setPassword] = useState(null);
	const [signup, setSignup] = useState(true);
	const [showPuck, setShowPuck] = useState(false);
	useEffect(async () => {
		console.log("new hello");
	});

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					marginHorizontal: 12,
					paddingBottom: 14,
					flexDirection: "row",
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
						Update skills for optimal placement
					</Text>
				</View>
			</View>
			<ImageBackground
				source={COINBG}
				resizeMode="cover"
				style={{ width: "100%", height: normalize(182) }}
			>
				<View
					style={{
						alignItems: "center",
					}}
				>
					<Image source={STAR} style={{ marginTop: 44 }} />
					<Text
						style={{
							color: "white",
							fontWeight: "700",
							fontSize: 20,
							marginTop: 10,
						}}
					>
						4.5/5
					</Text>
					<Text style={{ color: Colors.notiTextColor }}>
						Your average rating
					</Text>
				</View>
			</ImageBackground>
			<View
				style={{
					backgroundColor: Colors.prim3,
					paddingVertical: 10,
					alignItems: "center",
				}}
			>
				<Text style={{ color: "#753F00", fontSize: 14, fontWeight: "400" }}>
					Sign up for <Text style={{ fontWeight: "700" }}>Skills </Text>actual
					for a verified rating
				</Text>
			</View>
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
					onPress={() => props.navigation.navigate("PaymentHistory")}
				>
					<Image source={require("../../../assets/icons/usercheck.png")} />
					<Text style={{ fontSize: 12, fontWeight: "700", paddingTop: 5 }}>
						Rate yourself
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
					onPress={() => props.navigation.navigate("PaymentModes")}
				>
					<Image source={require("../../../assets/icons/layers.png")} />

					<Text style={{ fontSize: 12, fontWeight: "700", paddingTop: 5 }}>
						Peer rating
					</Text>
				</TouchableOpacity>
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
				onPress={() => props.navigation.navigate("PaymentModes")}
			>
				<Image source={require("../../../assets/icons/award.png")} />

				<Text style={{ fontSize: 12, fontWeight: "700", paddingTop: 5 }}>
					Skills actual
				</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={{
					alignItems: "center",
					alignSelf: "center",
					backgroundColor: Colors.prim1,
					marginHorizontal: 20,
					borderRadius: 5,
					marginTop: 155,
					padding: 16,
					width: "90%",
					marginBottom: 120,
					zIndex: 2,
				}}
				onPress={() => props.navigation.navigate("PaymentPay")}
			>
				<Text
					style={{
						fontFamily: "Nunito",
						fontSize: 20,
						color: Colors.white,
					}}
				>
					NEXT · PAYMENT
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
		backgroundColor: Colors.screenbackground,
	},
});
export default UpdateSkills;
