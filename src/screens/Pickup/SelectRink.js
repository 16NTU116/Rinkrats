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
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import jwt_decode from "jwt-decode";
import {
	GOLDCOINSIMPLE,
	PICKUP,
	SCREEN_WIDTH,
	PICKUP_BG,
	PICKUP_COIN,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HomeHeader from "../../components/HomeHeader";

const SelectRink = (props) => {
	const [name, setName] = useState(null);
	const [password, setPassword] = useState(null);
	const [signup, setSignup] = useState(true);
	useEffect(async () => {
		console.log("new hello");
	});

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					paddingHorizontal: 12,
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
						Select a rink
					</Text>
				</View>

				<View>
					<TouchableOpacity onPress={() => props.navigation.goBack()}>
						<Ionicons name="ios-funnel-outline" color="black" size={20} />
					</TouchableOpacity>
				</View>
			</View>
			<FlatList
				data={["adsa", "dsa"]}
				style={{ marginTop: 24 }}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item, index) => item.id}
				renderItem={() => (
					<TouchableOpacity
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 16,
							borderRadius: 4,
							paddingVertical: 8,
							paddingHorizontal: 12,
						}}
						onPress={() => props.navigation.navigate("PickupGame")}
					>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<Image source={require("../../../assets/images/temp.png")} />
						</View>
					</TouchableOpacity>
				)}
			/>

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
export default SelectRink;
