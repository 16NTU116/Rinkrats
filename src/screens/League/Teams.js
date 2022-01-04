import React, { useState, useEffect, useContext } from "react";
import {
	View,
	StyleSheet,
	Image,
	SafeAreaView,
	TouchableOpacity,
	Text,
	FlatList,
	TextInput,
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
						Teams
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
			<View style={{ backgroundColor: "white", height: normalize(1200) }}>
				<TextInput
					keyboardType="default"
					style={{
						margin: 10,
						padding: 16,
						fontSize: 16,
						marginTop: normalize(28),
						borderWidth: 1,
						borderColor: Colors.notiTextColor,
					}}
					placeholder="Search Teams"
					placeholderTextColor={Colors.notiTextColor}
					value={name}
					onChangeText={(text) => setName(text)}
				/>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginHorizontal: 12,
						marginTop: 12,
					}}
				>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "400",
						}}
					>
						Around you
					</Text>
				</View>
				<TouchableOpacity
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginTop: 12,
						marginHorizontal: 12,
					}}
					onPress={() => props.navigation.navigate("TeamProfile")}
				>
					<Image
						source={require("../../../assets/images/flag.png")}
						style={{ borderRadius: 200 }}
					/>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "700",
							marginLeft: 12,
						}}
					>
						Boston Bruins
					</Text>
					<TouchableOpacity
						style={{
							alignItems: "center",
							alignSelf: "center",
							backgroundColor: Colors.prim1,
							marginHorizontal: 20,
							borderRadius: 5,
							padding: 4,
							width: "30%",
							marginLeft: normalize(100),
						}}
						onPress={() => props.navigation.navigate("TeamProfile")}
					>
						<Text
							style={{
								fontFamily: "Nunito",
								fontSize: 20,
								color: Colors.white,
							}}
						>
							JOIN
						</Text>
					</TouchableOpacity>
					<Text
						style={{
							fontSize: 12,
							fontWeight: "700",
							marginLeft: normalize(150),
						}}
					>
						2.5 <Text style={{ color: "#8F959D", fontWeight: "500" }}>MI</Text>
					</Text>
				</TouchableOpacity>
			</View>
			<Ionicons
				name="ios-search-outline"
				color="gray"
				size={25}
				style={{
					position: "absolute",
					right: 40,
					top: normalize(100),
				}}
			/>

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
