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
	DOLLAR,
	SCREEN_WIDTH,
	COINBG,
	GOLDCOIN,
} from "../../utils/Constants";

// import { UserStoreContext } from "../store/UserStoreContext";
import HorizontalLine from "../../components/HorizontalLine";

const PaymentHistory = (props) => {
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
					marginHorizontal: 12,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
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
						Payment History
					</Text>
				</View>
				<View
					style={{
						marginTop: 15,
						marginHorizontal: 8,
					}}
				>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
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
									padding: 10,
								}}
							>
								ALL
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								backgroundColor: "rgba(241, 243, 245, 1)",
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
									padding: 10,
								}}
							>
								PAID
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								backgroundColor: "rgba(241, 243, 245, 1)",
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
									padding: 10,
								}}
							>
								RECEIVED
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								backgroundColor: "rgba(241, 243, 245, 1)",
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
									padding: 10,
								}}
							>
								REFUND
							</Text>
						</TouchableOpacity>
					</View>
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
									PAID
								</Text>
							</View>
						</View>
						<Text style={{ fontSize: 16, fontWeight: "700", marginTop: 6 }}>
							Rink Royce
						</Text>
						<Text
							style={{
								fontSize: 14,
								fontWeight: "700",
								marginTop: 11,
								color: Colors.prim1,
								marginBottom: 12,
							}}
						>
							$20{" "}
							<Text
								style={{
									color: Colors.notiTextColor,
									fontWeight: "500",
									fontSize: 12,
								}}
							>
								- HSBC Bank ●●●● ●●●● ●●●● 0099{" "}
							</Text>
						</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenbackground,
	},
});
export default PaymentHistory;
