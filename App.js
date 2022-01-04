import React, { Component } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from './routes'
import { Provider as PaperProvider } from "react-native-paper";

import Ionicons from "react-native-vector-icons/Ionicons";



export default class MainApp extends Component {
	componentDidMount = () => {
		Ionicons.loadFont();
	}
	render() {
		return (
			<NavigationContainer>
				<PaperProvider>
					<Navigator />
				</PaperProvider>
			</NavigationContainer>
		);
	}
}
