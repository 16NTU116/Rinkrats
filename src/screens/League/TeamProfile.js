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
import { IMAGEBACK, PROFILE, PROFILE2 } from "../../utils/Constants";

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
						Team Profile
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
				source={IMAGEBACK}
				resizeMode="cover"
				style={{ width: "100%", height: normalize(344) }}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Image source={PROFILE} />
					<View>
						<Text style={{ color: "white", fontSize: 10, fontWeight: "400" }}>
							Total Players · 32
						</Text>
						<Text
							style={{
								color: "white",
								fontSize: 20,
								fontWeight: "700",
								marginVertical: 12,
							}}
						>
							Boston Bruins
						</Text>
						<TouchableOpacity
							style={{
								backgroundColor: "rgba(255, 255, 255, 0.15)",
								alignItems: "center",
								paddingVertical: 4,
								paddingHorizontal: 10,
								borderRadius: 15,
							}}
						>
							<Text style={{ color: "white", fontSize: 10, fontWeight: "500" }}>
								home rink · Rink Royce
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={{
						height: 1,
						width: "100%",
						backgroundColor: "rgba(255, 255, 255, 0.15)",
					}}
				/>
				<View>
					<View
						style={{
							marginHorizontal: 12,
							marginTop: 16,
							alignItems: "center",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<Text
							style={{
								color: "white",
								fontSize: 10,
								paddingLeft: 8,
								backgroundColor: "rgba(255, 255, 255, 0.2) 0%)",
								paddingVertical: 12,
								width: normalize(140),
							}}
						>
							Captain
						</Text>
						<Text style={{ fontWeight: "600", color: "white", paddingLeft: 4 }}>
							Brandon Carlo
						</Text>
					</View>
					<View
						style={{
							marginHorizontal: 12,
							marginTop: 8,
							alignItems: "center",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<Text
							style={{
								color: "white",
								fontSize: 10,
								paddingLeft: 8,
								backgroundColor: "rgba(255, 255, 255, 0.2) 0%)",
								paddingVertical: 12,
								width: normalize(140),
							}}
						>
							Games Won
						</Text>

						<Text style={{ fontWeight: "600", color: "white", paddingLeft: 4 }}>
							39
						</Text>
					</View>
					<View
						style={{
							marginHorizontal: 12,
							marginTop: 8,
							alignItems: "center",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<Text
							style={{
								color: "white",
								fontSize: 10,
								paddingLeft: 8,
								backgroundColor: "rgba(255, 255, 255, 0.2) 0%)",
								paddingVertical: 12,
								width: normalize(140),
							}}
						>
							Upcoming games
						</Text>

						<Text style={{ fontWeight: "600", color: "white", paddingLeft: 4 }}>
							4 · View schedule
						</Text>
					</View>
					<View
						style={{
							height: 1,
							marginTop: 12,
							width: "100%",
							backgroundColor: "rgba(255, 255, 255, 0.15)",
						}}
					/>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
							paddingTop: 12,
						}}
					>
						<Text style={{ fontWeight: "600", color: Colors.notiTextColor }}>
							ROSTER
						</Text>

						<Text
							style={{
								fontWeight: "600",
								color: Colors.notiTextColor,
								paddingLeft: 24,
							}}
						>
							SCHEDULE
						</Text>
					</View>
				</View>
			</ImageBackground>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginTop: 12,
					marginHorizontal: 12,
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
						marginLeft: normalize(160),
						color: "#8F959D",
					}}
				>
					R WING
				</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginTop: 12,
					marginHorizontal: 12,
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
						marginLeft: normalize(160),
						color: "#8F959D",
					}}
				>
					R WING
				</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginTop: 12,
					marginHorizontal: 12,
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
						marginLeft: normalize(160),
						color: "#8F959D",
					}}
				>
					R WING
				</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginTop: 12,
					marginHorizontal: 12,
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
						marginLeft: normalize(160),
						color: "#8F959D",
					}}
				>
					R WING
				</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginTop: 12,
					marginHorizontal: 12,
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
						marginLeft: normalize(160),
						color: "#8F959D",
					}}
				>
					R WING
				</Text>
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
				onPress={() => props.navigation.navigate("Join3")}
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
