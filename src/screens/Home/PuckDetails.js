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
	PUCKS,
	SCREEN_WIDTH,
	SCREEN_HEIGHT,
	COINBG,
	GOLDCOIN,
	DARKCOIN,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HomeHeader from "../../components/HomeHeader";
import HorizontalLine from "../../components/HorizontalLine";

const PuckDetails = (props) => {
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
						Gold Pucks Balance
					</Text>
				</View>
				<TouchableOpacity onPress={() => setShowPuck(true)}>
					<Image source={DARKCOIN} />
				</TouchableOpacity>
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
					<Image source={PUCKS} style={{ marginTop: 44 }} />
					<Text
						style={{
							color: "white",
							fontWeight: "700",
							fontSize: 20,
							marginTop: 10,
						}}
					>
						158
					</Text>
					<Text style={{ color: Colors.notiTextColor }}>
						Your gold pucks balance
					</Text>
				</View>
			</ImageBackground>
			<View
				style={{
					marginTop: 15,
					paddingHorizontal: 11,
					marginHorizontal: 8,
					backgroundColor: "white",
				}}
			>
				<Text
					style={{
						paddingTop: 16,
						color: Colors.notiTextColor,
						fontWeight: "500",
					}}
				>
					BALANCE HISTORY
				</Text>
				<View style={{ marginTop: normalize(26) }}>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<Text style={{ fontWeight: "400" }}>5th April 2020</Text>
						<View style={{ backgroundColor: "#E5FAFB", borderRadius: 100 }}>
							<Text
								style={{
									color: Colors.switchColor,
									paddingHorizontal: 10,
									paddingVertical: 4,
								}}
							>
								SUCCESS
							</Text>
						</View>
					</View>
					<Text style={{ fontSize: 16, fontWeight: "700" }}>Rink Royce</Text>
					<Text
						style={{
							fontSize: 14,
							fontWeight: "700",
							marginTop: 11,
							color: Colors.prim1,
							marginBottom: 12,
						}}
					>
						20 pucks
					</Text>
				</View>
				<HorizontalLine />
				<View style={{ marginTop: normalize(26) }}>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<Text style={{ fontWeight: "400" }}>5th April 2020</Text>
						<View style={{ backgroundColor: "#E5FAFB", borderRadius: 100 }}>
							<Text
								style={{
									color: Colors.switchColor,
									paddingHorizontal: 10,
									paddingVertical: 4,
								}}
							>
								SUCCESS
							</Text>
						</View>
					</View>
					<Text style={{ fontSize: 16, fontWeight: "700" }}>Rink Royce</Text>
					<Text
						style={{
							fontSize: 14,
							fontWeight: "700",
							marginTop: 11,
							color: Colors.prim1,
							marginBottom: 12,
						}}
					>
						20 pucks
					</Text>
				</View>
			</View>
			{showPuck && (
				<View
					style={{
						position: "absolute",
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						backgroundColor: "rgba(0,0,0,0.8)",
					}}
				>
					<ScrollBottomSheet
						componentType="FlatList"
						snapPoints={[SCREEN_HEIGHT / 3, "80%", SCREEN_HEIGHT * 0.4]}
						initialSnapIndex={2}
						renderHandle={() => (
							<View
								style={{
									alignItems: "center",
									paddingVertical: 10,
									borderTopLeftRadius: 20,
									borderTopRightRadius: 20,
								}}
							>
								<View
									style={{
										width: 60,
										height: 8,
										backgroundColor: "white",
										borderRadius: 4,
									}}
								/>
							</View>
						)}
						data={Array.from({ length: 1 }).map((_, i) => String(i))}
						keyExtractor={(i) => i}
						renderItem={({ item }) => (
							<View>
								<ImageBackground
									source={COINBG}
									resizeMode="cover"
									style={{
										width: "100%",
										height: normalize(188),
										borderTopLeftRadius: 30,
									}}
								>
									<TouchableOpacity onPress={() => setShowPuck(!showPuck)}>
										<Ionicons
											name="ios-arrow-back-outline"
											color="white"
											size={25}
											style={{ paddingTop: 12, paddingLeft: 12 }}
										/>
									</TouchableOpacity>
									<View
										style={{
											alignItems: "center",
										}}
									>
										<Image source={PUCKS} style={{ marginTop: 24 }} />
										<Text
											style={{
												color: "white",
												fontWeight: "700",
												fontSize: 20,
												marginTop: 10,
											}}
										>
											158
										</Text>
										<Text style={{ color: Colors.notiTextColor }}>
											Your gold pucks balance
										</Text>
									</View>
								</ImageBackground>
								<View style={{ backgroundColor: "white" }}>
									<TouchableOpacity
										style={{
											alignItems: "center",
											alignSelf: "center",
											borderWidth: 1,
											borderColor: "#D7DCE2",
											width: "90%",
											marginHorizontal: 20,
											borderRadius: 5,
											marginTop: 16,
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
											BALANCE HISTORY
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{
											alignItems: "center",
											alignSelf: "center",
											backgroundColor: Colors.prim1,
											marginHorizontal: 20,
											borderRadius: 5,
											marginTop: 30,
											padding: 16,
											width: "90%",
											marginBottom: 120,
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
											PURCHASE
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						)}
					/>
				</View>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenbackground,
	},
});
export default PuckDetails;
