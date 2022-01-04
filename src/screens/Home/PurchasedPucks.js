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
import { TextInput } from "react-native-paper";
import normalize from "react-native-normalize";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import jwt_decode from "jwt-decode";
import {
	SCREEN_HEIGHT,
	GOLDCOINSIMPLE,
	COINBG,
	MASTERCARD,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HomeHeader from "../../components/HomeHeader";

const PurchasedPucks = (props) => {
	const [show, setShow] = useState(false);
	useEffect(async () => {
		console.log("new hello");
	});

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginHorizontal: 12,
					paddingBottom: 14,
				}}
			>
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
					Purchase Gold Pucks
				</Text>
			</View>
			<View
				style={{
					backgroundColor: Colors.screenbackground,
					height: SCREEN_HEIGHT,
				}}
			>
				<View
					style={{
						marginHorizontal: 7,
						backgroundColor: "white",
						marginTop: 17,
						paddingVertical: 16,
						paddingHorizontal: 13,
					}}
				>
					<FlatList
						data={[
							"adsa",
							"dsa",
							"dsa",
							"dsa",
							"dsa",
							"dsa",
							"dsa",
							"dsa",
							"dsa",
							"dsa",
						]}
						showsVerticalScrollIndicator={false}
						keyExtractor={(item, index) => item.id}
						renderItem={() => (
							<TouchableOpacity
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 16,
									borderColor: Colors.borderColor,
									borderWidth: 1,
									borderRadius: 4,
									paddingVertical: 16,
									paddingHorizontal: 12,
								}}
								onPress={() => setShow(true)}
							>
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}
								>
									<Image source={GOLDCOINSIMPLE} />
									<Text
										style={{
											fontSize: 12,
											fontWeight: "700",
											paddingLeft: 11,
										}}
									>
										100 pucks
									</Text>
								</View>

								<Text
									style={{
										fontSize: 12,
										fontWeight: "700",
										color: "red",
									}}
								>
									$5.29
								</Text>
							</TouchableOpacity>
						)}
					/>
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
											Select card
										</Text>
									</View>
								</ImageBackground>
								<View
									style={{ backgroundColor: "white", height: normalize(1200) }}
								>
									<TouchableOpacity
										style={{
											flexDirection: "row",
											alignItems: "center",
											borderWidth: 1,
											borderColor: Colors.borderColor,
											borderRadius: 4,
											justifyContent: "space-between",
											marginHorizontal: 13,
											paddingHorizontal: 13,
											paddingVertical: 12,
											marginVertical: 16,
										}}
										onPress={() =>
											props.navigation.navigate("PaymentSuccessful")
										}
									>
										<View>
											<Text style={{ fontSize: 14, fontWeight: "700" }}>
												Credit Card ·{" "}
												<Text
													style={{
														fontWeight: "400",
														color: Colors.notiTextColor,
													}}
												>
													HSBC Bank
												</Text>
											</Text>
											<View
												style={{
													flexDirection: "row",
													paddingTop: 14,
													alignItems: "center",
												}}
											>
												<Image source={MASTERCARD} />
												<Text
													style={{
														fontSize: 12,
														fontWeight: "400",
														color: Colors.notiTextColor,
													}}
												>
													●●●● ●●●● ●●●● 4324
												</Text>
											</View>
										</View>
										<View>
											<Text
												style={{
													fontSize: 12,
													fontWeight: "400",
													color: Colors.notiTextColor,
													paddingLeft: 12,
													paddingBottom: 16,
												}}
											>
												1/24
											</Text>
										</View>
									</TouchableOpacity>
									<Text
										style={{
											color: Colors.notiTextColor,
											fontWeight: "500",
											fontSize: 14,

											alignSelf: "center",
										}}
									>
										Buying{" "}
										<Text
											style={{
												fontSize: 14,
												fontWeight: "700",
											}}
										>
											150{" "}
										</Text>{" "}
										gold pucks for{" "}
										<Text
											style={{
												fontSize: 14,
												fontWeight: "700",
												color: Colors.prim1,
											}}
										>
											$6.05
										</Text>
									</Text>
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
		backgroundColor: "white",
	},
});
export default PurchasedPucks;
