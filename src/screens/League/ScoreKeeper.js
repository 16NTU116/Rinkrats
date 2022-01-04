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
	SCREEN_HEIGHT,
	IMAGEBACK,
	PROFILE,
	SCHBG,
	OPENBG,
	PROFILE2,
	COINBG,
	PUCKS,
} from "../../utils/Constants";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";

// import { UserStoreContext } from "../store/UserStoreContext";
import HomeHeader from "../../components/HomeHeader";
import HorizontalLine from "../../components/HorizontalLine";

const League = (props) => {
	const [name, setName] = useState(null);
	const [password, setPassword] = useState(null);
	const [show, setShow] = useState(false);
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
							backgroundColor: "rgba(255, 105, 105, 0.3)",
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

						paddingVertical: 22,
						paddingHorizontal: 32,
					}}
					onPress={() => setShow(true)}
				>
					<Ionicons
						name="refresh-outline"
						color={Colors.notiTextColor}
						size={16}
					/>
					<Text style={{ fontSize: 12, fontWeight: "700", paddingTop: 5 }}>
						Requests
					</Text>
				</TouchableOpacity>
			</View>

			<View style={{ backgroundColor: "white", paddingTop: 30 }}>
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
					<TouchableOpacity
						style={{
							alignItems: "center",
							alignSelf: "center",
							backgroundColor: Colors.prim1,
							marginHorizontal: 20,
							borderRadius: 5,
							padding: 8,
							width: "30%",
							marginLeft: normalize(40),
						}}
						onPress={() => props.navigation.navigate("Score")}
					>
						<Text
							style={{
								fontFamily: "Nunito",
								fontSize: 16,
								color: Colors.white,
							}}
						>
							SCORE
						</Text>
					</TouchableOpacity>
				</View>
			</View>
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
							<View style={{ zIndex: 2 }}>
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
											Game requests
										</Text>
									</View>
								</ImageBackground>
								<View
									style={{
										backgroundColor: "white",
										height: normalize(2000),
										paddingTop: 30,
									}}
								>
									<View
										style={{
											marginHorizontal: 12,
											flexDirection: "row",
											alignItems: "center",
										}}
									>
										<Image
											source={require("../../../assets/icons/reqIcon.png")}
										/>
										<View style={{ marginLeft: 12 }}>
											<Text>
												<Text style={{ fontWeight: "600" }}>B.Bruin</Text> vs{" "}
												<Text style={{ fontWeight: "600" }}>Canadiens</Text>
											</Text>
											<Text>
												in{" "}
												<Text
													style={{ fontWeight: "600", color: Colors.prim1 }}
												>
													B.Bruin
												</Text>{" "}
												at{" "}
												<Text
													style={{ fontWeight: "600", color: Colors.prim2 }}
												>
													Canadiens
												</Text>
											</Text>
										</View>
										<View
											style={{
												flexDirection: "row",
												alignItems: "center",
												marginLeft: normalize(24),
											}}
										>
											<TouchableOpacity
												style={{ backgroundColor: Colors.prim2, padding: 16 }}
												onPress={() => setShow(false)}
											>
												<Ionicons
													name={"ios-checkmark-outline"}
													size={24}
													color={"white"}
												/>
											</TouchableOpacity>
											<TouchableOpacity
												style={{ borderWidth: 1, padding: 16, marginLeft: 12 }}
												onPress={() => setShow(false)}
											>
												<Ionicons
													name={"ios-close-outline"}
													size={24}
													color={"black"}
												/>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
						)}
					/>
				</View>
			)}
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
