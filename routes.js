import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "./src/utils/colors";
import DrawerComponent from "./src/components/Drawer";
import Splash from "./src/screens/Splash";
import MainScreen from "./src/screens/MainScreen";
import Welcome from "./src/screens/Onboarding/Welcome";

import ForgotPassword from "./src/screens/Authentication/ForgotPassword";
import VerifyCode from "./src/screens/Authentication/VerifyCode";
import ResetPassword from "./src/screens/Authentication/ResetPassword";
import PasswordUpdated from "./src/screens/Authentication/PasswordUpdated";
import UserRole from "./src/screens/Authentication/UserRole";

import Home from "./src/screens/Home/Home";
import Profile from "./src/screens/Home/Profile";
import AppSettings from "./src/screens/Home/AppSettings";
import Notifications from "./src/screens/Home/Notifications";
import Payments from "./src/screens/Home/Payments";
import PaymentModes from "./src/screens/Home/PaymentModes";
import PurchasedPucks from "./src/screens/Home/PurchasedPucks";
import ChangePassword from "./src/screens/Home/ChangePassword";
import Forgot from "./src/screens/Home/Forgot";
import NewPass from "./src/screens/Home/NewPass";
import About from "./src/screens/Home/About";
import PaymentSuccessful from "./src/screens/Home/PaymentSuccessful";
import PaymentHistory from "./src/screens/Home/PaymentHistory";
import Stats from "./src/screens/Home/Stats";
import Legal from "./src/screens/Home/Legal";
import General from "./src/screens/Home/General";
import Experience from "./src/screens/Home/Experience";
import Position from "./src/screens/Home/Position";
import RoleTypes from "./src/screens/Home/RoleTypes";
import Skills from "./src/screens/Home/Skills";
import History from "./src/screens/Home/History";
import PuckDetails from "./src/screens/Home/PuckDetails";

import Pickup from "./src/screens/Pickup/Pickup";
import SelectDate from "./src/screens/Pickup/SelectDate";
import SelectRink from "./src/screens/Pickup/SelectRink";
import PickupGame from "./src/screens/Pickup/PickupGame";
import SuccessInvite from "./src/screens/Pickup/SuccessInvite";
import JoinGame from "./src/screens/Pickup/JoinGame";
import UpdateSkills from "./src/screens/Pickup/UpdateSkills";
import Success from "./src/screens/Pickup/Success";
import Paying from "./src/screens/Pickup/Paying";
import PlacingYou from "./src/screens/Pickup/PlacingYou";
import PaymentPay from "./src/screens/Pickup/PaymentPay";

import League from "./src/screens/League/League";
import Subins from "./src/screens/League/Subins";
import Teams from "./src/screens/League/Teams";
import TeamProfile from "./src/screens/League/TeamProfile";
import Game from "./src/screens/Pickup/Game";
import RequestSent from "./src/screens/Pickup/RequestSent";
import Join2 from "./src/screens/Pickup/Join2";
import Join3 from "./src/screens/League/Join3";
import TeamJoinRequest from "./src/screens/League/TeamJoinRequest";
import LeagueManager from "./src/screens/League/LeagueManager";
import CreateLeague from "./src/screens/League/CreateLeague";
import DateRange from "./src/screens/League/DateRange";
import ScoreKeeper from "./src/screens/League/ScoreKeeper";
import Score from "./src/screens/League/Score";
import Coach from "./src/screens/League/Coach";
import Messages from "./src/screens/Home/Messages";
import Chat from "./src/screens/Home/Chat";

import Tournament from "./src/screens/Tournament/Tournament";

import {
  HOME_ACTIVE,
  LEAGUE_INACTIVE,
  PICKUP_INACTIVE,
  TROPHY_INACTIVE,
} from "./src/utils/Constants";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={{
        headerShown: false,
      }}
    />
    {/* <Stack.Screen
      name="Messages"
      component={Messages}
      options={{ headerShown: false }}
    /> */}
    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="MainScreen"
      component={MainScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="VerifyCode"
      component={VerifyCode}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ResetPassword"
      component={ResetPassword}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="PasswordUpdated"
      component={PasswordUpdated}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="UserRole"
      component={UserRole}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Home"
      component={DrawerStack}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const HomeTabs = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        inactiveTintColor: "black",
        indicatorStyle: {
          width: "100%",
          left: "16%",
          height: 30,
          backgroundColor: "white",
        },
        activeTintColor: Colors.prim1,
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: "white",
          borderBottomColor: Colors.prim1,
        },
      }}
    >
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({ route }) => ({
          tabBarLabel: "Home",
          // tabBarVisible: route.state.index > 0 ? false : true,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={HOME_ACTIVE} />
            ) : (
              <Ionicons name="ios-home-outline" size={20} color="gray" />
            ),
        })}
      />
      <BottomTab.Screen
        name="LeagueStack"
        component={LeagueStack}
        options={({ route }) => ({
          tabBarLabel: "League",
          // tabBarVisible: route.state.index > 0 ? false : true,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={LEAGUE_INACTIVE} />
            ) : (
              <Image source={LEAGUE_INACTIVE} />
            ),
        })}
      />
      <BottomTab.Screen
        name="PickupStack"
        component={PickUpStack}
        options={({ route }) => ({
          tabBarLabel: "Pickup",
          // tabBarVisible: route.state.index > 0 ? false : true,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={PICKUP_INACTIVE} />
            ) : (
              <Image source={PICKUP_INACTIVE} />
            ),
        })}
      />
      <BottomTab.Screen
        name="TournamentStack"
        component={TournamentStack}
        options={({ route }) => ({
          tabBarLabel: "Tournament",
          // tabBarVisible: route.state.index > 0 ? false : true,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={TROPHY_INACTIVE} />
            ) : (
              <Image source={TROPHY_INACTIVE} />
            ),
        })}
      />
    </BottomTab.Navigator>
  );
};

const HomeStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PuckDetails"
        component={PuckDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentHistory"
        component={PaymentHistory}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentModes"
        component={PaymentModes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PurchasedPucks"
        component={PurchasedPucks}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentSuccessful"
        component={PaymentSuccessful}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppSettings"
        component={AppSettings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payments"
        component={Payments}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Forgot"
        component={Forgot}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPass"
        component={NewPass}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Legal"
        component={Legal}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="General"
        component={General}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RoleTypes"
        component={RoleTypes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Skills"
        component={Skills}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Experience"
        component={Experience}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Position"
        component={Position}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Stats"
        component={Stats}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const PickUpStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pickup"
        component={Pickup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectDate"
        component={SelectDate}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectRink"
        component={SelectRink}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PickupGame"
        component={PickupGame}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuccessInvite"
        component={SuccessInvite}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="JoinGame"
        component={JoinGame}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UpdateSkills"
        component={UpdateSkills}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Paying"
        component={Paying}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlacingYou"
        component={PlacingYou}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentPay"
        component={PaymentPay}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const LeagueStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="League"
        component={League}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Subins"
        component={Subins}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Game"
        component={Game}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Join2"
        component={Join2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RequestSent"
        component={RequestSent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Teams"
        component={Teams}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TeamProfile"
        component={TeamProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Join3"
        component={Join3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TeamJoinRequest"
        component={TeamJoinRequest}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LeagueManager"
        component={LeagueManager}
        component={LeagueManager}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateLeague"
        component={CreateLeague}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DateRange"
        component={DateRange}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScoreKeeper"
        component={ScoreKeeper}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Coach"
        component={Coach}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Score"
        component={Score}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TournamentStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tournament"
        component={Tournament}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const OnboardingStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="MainScreen"
      component={MainScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const DrawerStack = ({ navigation, route }) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="right"
      drawerContent={(props) => <DrawerComponent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeTabs} />
    </Drawer.Navigator>
  );
};

const TestStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SignupInfo"
      component={PuckDetails}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      Home: HomeStack,
    },
    {
      initialRouteName: "Auth",
    }
  )
);
