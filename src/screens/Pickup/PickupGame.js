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
	ImageBackground,
} from "react-native";
import Colors from "../../utils/colors";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import jwt_decode from "jwt-decode";

import ScrollBottomSheet from "react-native-scroll-bottom-sheet";

import {
	GOLDCOINSIMPLE,
	PICKUP,
	SCREEN_WIDTH,
	SCREEN_HEIGHT,
	PICKUP_BG,
	PICKUP_COIN,
	PROFILE2,
	COINBG,
	MASTERCARD,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HomeHeader from "../../components/HomeHeader";
import { ScrollView } from "react-native-gesture-handler";

const PickupGame = (props) => {
	const [show, setShow] = useState(false);
	const [name, setName] = useState("");
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
						Pickup Game
					</Text>
				</View>

				<View>
					<TouchableOpacity onPress={() => props.navigation.goBack()}>
						<Ionicons
							name="ios-ellipsis-vertical-outline"
							color="black"
							size={20}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView>
				<View style={{ marginHorizontal: 8, marginTop: 12 }}>
					<Image source={require("../../../assets/images/profile-temp.png")} />
				</View>
				<View
					style={{
						backgroundColor: Colors.redPrim,
						flexDirection: "row",
						alignItems: "center",
						paddingVertical: 18,
						paddingHorizontal: 20,
						justifyContent: "space-between",
					}}
				>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Image source={require("../../../assets/icons/hockeyRink.png")} />
						<Text
							style={{
								color: "white",
								fontWeight: "700",
								fontSize: 14,
								paddingLeft: 12,
							}}
						>
							Rink Royce
						</Text>
					</View>

					<View>
						<Image source={require("../../../assets/icons/greenbell.png")} />
					</View>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						paddingHorizontal: 24,
						justifyContent: "space-between",
						backgroundColor: "white",
						paddingVertical: 40,
					}}
				>
					<View>
						<Image source={require("../../../assets/icons/p1.png")} />
						<Text>Dark</Text>
					</View>
					<Text style={{ color: Colors.prim1, fontWeight: "700" }}>
						04:00 PM
					</Text>
					<View>
						<Image source={require("../../../assets/icons/p2.png")} />
						<Text>Light</Text>
					</View>
				</View>
				<View
					style={{
						backgroundColor: "white",
					}}
				>
					<Progress.Bar
						style={{ alignSelf: "center", marginTop: 12 }}
						progress={0.8}
						width={SCREEN_WIDTH / 1.05}
						height={10}
						color={Colors.switchColor}
					/>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							marginHorizontal: 12,
							marginTop: 12,
						}}
					>
						<Text style={{ color: Colors.prim1 }}>4 spots left</Text>
						<Text>
							<Text style={{ fontWeight: "700" }}>16/20 </Text>
							Players
						</Text>
					</View>
					<Progress.Bar
						style={{ alignSelf: "center", marginTop: 12 }}
						progress={0.8}
						width={SCREEN_WIDTH / 1.05}
						height={10}
						color={Colors.switchColor}
					/>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							marginHorizontal: 12,
							marginTop: 12,
						}}
					>
						<Text style={{ color: Colors.prim1 }}>1 spots left</Text>
						<Text>
							<Text style={{ fontWeight: "700" }}>2/3 </Text>
							Goalies
						</Text>
					</View>
					<Progress.Bar
						style={{ alignSelf: "center", marginTop: 12 }}
						progress={0.8}
						width={SCREEN_WIDTH / 1.05}
						height={10}
						color={Colors.switchColor}
					/>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							marginHorizontal: 12,
							marginTop: 12,
						}}
					>
						<Text style={{ color: Colors.prim1 }}>1 spots left</Text>
						<Text>
							<Text style={{ fontWeight: "700" }}>2/3 </Text>
							Referees
						</Text>
					</View>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							marginHorizontal: 12,
							marginTop: 12,
						}}
					>
						<Text>
							Goalie Fund <Text style={{ fontWeight: "700" }}>$15 </Text>
						</Text>
						<Text style={{ color: Colors.prim1 }}>
							Entry fee ·<Text style={{ fontWeight: "700" }}> $100</Text>
						</Text>
					</View>
				</View>
				<View style={{ marginHorizontal: 20, marginTop: 36 }}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<Text
							style={{
								fontSize: 16,
								fontWeight: "700",
							}}
						>
							Rosters
						</Text>
						<View style={{ flexDirection: "row" }}>
							<Text
								style={{
									fontSize: 12,
									fontWeight: "500",
									color: Colors.textColorDullHome,
									marginHorizontal: 12,
								}}
							>
								Team 1
							</Text>
							<Text
								style={{
									fontSize: 12,
									fontWeight: "500",
									color: Colors.textColorDullHome,
									marginHorizontal: 12,
								}}
							>
								Team 2
							</Text>
						</View>
					</View>
					<View
						style={{
							height: 2,
							width: "100%",
							marginTop: 12,
							backgroundColor: "#E9EDF1",
						}}
					/>
					<FlatList
						data={["adsa", "dsa", "dsa", "dsa", "dsa", "dsa", "dsa", "dsa"]}
						style={{ marginTop: 12 }}
						showsVerticalScrollIndicator={false}
						keyExtractor={(item, index) => item.id}
						renderItem={() => (
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginTop: 12,
								}}
							>
								<Image source={PROFILE2} style={{ borderRadius: 200 }} />
								<Text
									style={{
										fontSize: 16,
										fontWeight: "700",
										marginLeft: 12,
									}}
								>
									Aaron Smith
								</Text>
								<Text
									style={{
										fontSize: 10,
										fontWeight: "500",
										marginLeft: normalize(152),
										color: "#8F959D",
									}}
								>
									R WING
								</Text>
							</View>
						)}
					/>
				</View>
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
						onPress={() => setShow(true)}
					>
						<Text
							style={{
								fontFamily: "Nunito",
								fontSize: 20,
							}}
						>
							INVITE A FRIEND
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
						onPress={() => props.navigation.navigate("JoinGame")}
					>
						<Text
							style={{
								fontFamily: "Nunito",
								fontSize: 20,
								color: Colors.white,
							}}
						>
							JOIN GAME · $100
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
			{show && (
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
										height: normalize(60),
										borderTopLeftRadius: 30,
									}}
								>
									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
											paddingTop: 12,
										}}
									>
										<TouchableOpacity onPress={() => setShow(!show)}>
											<Ionicons
												name="ios-arrow-back-outline"
												color="white"
												size={25}
												style={{ paddingLeft: 12, paddingRight: 12 }}
											/>
										</TouchableOpacity>

										<Text
											style={{
												color: Colors.white,
												fontSize: 16,
												fontWeight: "700",
											}}
										>
											Invite Friends
										</Text>
									</View>
								</ImageBackground>
								<View
									style={{ backgroundColor: "white", height: normalize(1200) }}
								>
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
										placeholder="Search Friends"
										placeholderTextColor={Colors.notiTextColor}
										value={name}
										onChangeText={(text) => setName(text)}
									/>
									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginTop: 12,
											marginHorizontal: 12,
										}}
									>
										<Image source={PROFILE2} style={{ borderRadius: 200 }} />
										<View>
											<Text
												style={{
													fontSize: 16,
													fontWeight: "700",
													marginLeft: 12,
												}}
											>
												Aaron Smith
											</Text>
											<Text
												style={{
													fontSize: 14,
													marginLeft: 12,
													color: Colors.notiTextColor,
												}}
											>
												5437755537
											</Text>
										</View>
									</View>
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
										onPress={() => props.navigation.navigate("SuccessInvite")}
									>
										<Text
											style={{
												fontFamily: "Nunito",
												fontSize: 20,
												color: Colors.white,
											}}
										>
											INVITE TO THE GAME
										</Text>
									</TouchableOpacity>
									<Ionicons
										name="ios-search-outline"
										color="gray"
										size={25}
										style={{
											position: "absolute",
											right: 40,
											top: normalize(40),
										}}
									/>
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
export default PickupGame;
