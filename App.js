import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingPage from "./src/screens/LoadingScreen/LoadingPage";
import HomePage from "./src/screens/HomeScreen/HomePage";
import LoginPage from "./src/screens/LoginScreen/LoginPage";
import RegisterPage from "./src/screens/RegisterScreen/RegisterPage";
import CrimeReportPage from "./src/screens/CrimeReportScreen/CrimeReportPage";
import ReportSubmittedPage from "./src/screens/ReportSubmittedScreen/ReportSubmittedPage";
import SOSSupportPage from "./src/screens/SOSSupportScreen/SOSSupportPage";
import CommunityForumPage from "./src/screens/CommunityForumScreen/CommunityForumPage";
import HighRishPage from "./src/screens/HighRiskScreen/HighRishPage";
import SafetyAlarmScreen from  "./src/screens/SafetyAlarmScreen/SafetyAlarmPage";



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingPage">

        <Stack.Screen
          name="LoadingPage"
          component={LoadingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterPage"
          component={RegisterPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CrimeReportPage"
          component={CrimeReportPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReportSubmittedPage"
          component={ReportSubmittedPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SOSSupportPage"
          component={SOSSupportPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CommunityForumPage "
          component={CommunityForumPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HighRishPage"
          component={HighRishPage}
          options={{ headerShown: false }}
        />
       <Stack.Screen
          name="SafetyAlarmScreen"
          component={SafetyAlarmScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
