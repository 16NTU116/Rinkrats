import React, { useState, useEffect, useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
	View,
	StyleSheet,
	StatusBar,
	Image,
	TouchableOpacity,
	SafeAreaView,
	FlatList,
	Text,
	ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput, Button } from "react-native-paper";
import { Colors, Styles, axios, Constants } from "../../utils/index";
import {
	FAQ_VECTOR,
	SCREEN_HEIGHT,
	SCREEN_WIDTH,
	UNKNOWNIMAGE,
} from "../../utils/Constants";
import { observer } from "mobx-react-lite";
import { UserStoreContext } from "../../store/UserStoreContext";
import InputText from "../../components/InputText";
import OnboardingSmallText from "../../components/OnboardingSmallText";
import FAQCard from "../../components/FaqCard";
import OnboardingBigText from "../../components/OnboardingBigText";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImagePicker from "react-native-image-crop-picker";
import { white } from "react-native-paper/lib/typescript/styles/colors";

const termsAndConditions = observer((props) => {
	const [message, setMessage] = useState(null);
	const [uri, setUri] = useState(null);

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					alignItems: "center",
					flexDirection: "row",
					justifyContent: "space-between",
					marginTop: 10,
					marginHorizontal: 30,
				}}
			>
				<TouchableOpacity
					onPress={() => {
						props.navigation.goBack();
					}}
					style={{
						backgroundColor: "lightgrey",
						borderRadius: 30,
						padding: 10,
					}}
				>
					<Ionicons name="ios-chevron-back" size={24} color={Colors.prim1} />
				</TouchableOpacity>
			</View>

			<View style={{ marginHorizontal: 20 }}>
				<Image
					source={FAQ_VECTOR}
					style={{
						width: 250,
						height: 200,
						alignSelf: "center",
					}}
				/>
				<View
					style={{
						marginTop: 4,
					}}
				>
					<OnboardingSmallText text={"Frequently Asked Questions"} />
				</View>
			</View>
			<ScrollView>
				<View>
					<FlatList
						data={["adsa", "dsa", "dsa", "dsa", "dsa", "dsa", "dsa", "dsa"]}
						keyExtractor={(item, index) => item.id}
						showsVerticalScrollIndicator={false}
						renderItem={() => <FAQCard />}
					/>
				</View>
			</ScrollView>
			<TouchableOpacity
				style={{
					alignItems: "center",
					alignSelf: "center",
					backgroundColor: Colors.prim1,
					marginHorizontal: 20,
					marginTop: 10,
					borderRadius: 100,
					width: SCREEN_WIDTH * 0.9,
					padding: 16,
				}}
				onPress={() => props.navigation.navigate("Home")}
			>
				<Text
					style={{
						fontFamily: "Nunito",
						fontSize: 20,
						color: Colors.white,
						fontWeight: "bold",
					}}
				>
					Select
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
});

export default termsAndConditions;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.primary,
		backgroundColor: "white",
	},
	bottom: {
		marginTop: StatusBar.currentHeight,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
	},
});
