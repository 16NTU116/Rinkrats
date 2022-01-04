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

const SelectDate = (props) => {
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
					Select a date
				</Text>
			</View>
			<Calendar
				current={"2021-11-01"}
				minDate={"2021-11-10"}
				maxDate={"2021-11-30"}
				onDayPress={(day) => {
					console.log("selected day", day);
				}}
				onDayLongPress={(day) => {
					console.log("selected day", day);
				}}
				monthFormat={"MM"}
				onMonthChange={(month) => {
					console.log("month changed", month);
				}}
				hideArrows={false}
				hideExtraDays={false}
				disableMonthChange={false}
				firstDay={1}
				hideDayNames={true}
				showWeekNumbers={true}
				onPressArrowLeft={(subtractMonth) => subtractMonth()}
				onPressArrowRight={(addMonth) => addMonth()}
				disableArrowLeft={false}
				disableArrowRight={false}
				disableAllTouchEventsForDisabledDays={false}
				renderHeader={(date) => {
					<Text style={{ color: "black" }}>HEADER{date}</Text>;
				}}
				enableSwipeMonths={true}
				style={{ marginTop: 12 }}
			/>
			<View
				style={{
					backgroundColor: "white",
					paddingTop: 10,
					zIndex: 2,
					position: "absolute",
					left: 0,
					right: 0,
					bottom: 20,
				}}
			>
				<TouchableOpacity
					style={{
						alignItems: "center",
						alignSelf: "center",
						backgroundColor: Colors.prim1,
						marginHorizontal: 20,
						borderRadius: 5,
						padding: 16,
						width: "90%",
						marginBottom: 11,
					}}
					onPress={() => props.navigation.navigate("SelectRink")}
				>
					<Text
						style={{
							fontFamily: "Nunito",
							fontSize: 20,
							color: Colors.white,
						}}
					>
						NEXT · SELECT RINK
					</Text>
				</TouchableOpacity>
			</View>
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
export default SelectDate;
