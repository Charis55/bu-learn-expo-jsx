
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Splash from '../screens/Splash.jsx';
import Onboarding from '../screens/Onboarding.jsx';

import Login from '../screens/Auth/Login.jsx';
import Register from '../screens/Auth/Register.jsx';

import Dashboard from '../screens/Pages/Home/Dashboard.jsx';
import Upload from '../screens/Pages/Home/Upload.jsx';

import ConversionResult from '../screens/Learn/ConversionResult.jsx';
import Quiz from '../screens/Learn/Quiz.jsx';
import Story from '../screens/Learn/Story.jsx';
import Audio from '../screens/Learn/Audio.jsx';

import Library from '../screens/Library.jsx';
import Leaderboard from '../screens/Leaderboard.jsx';

import Feed from '../screens/Community/Feed.jsx';
import Chat from '../screens/Community/Chat.jsx';
import PlayWithFriends from '../screens/Community/PlayWithFriends.jsx';
import Challenges from '../screens/Community/Challenges.jsx';

import Profile from '../screens/Profile/Profile.jsx';
import Settings from '../screens/Profile/Settings.jsx';

import PremiumUpgrade from '../screens/PremiumUpgrade.jsx';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const LearnStack = createStackNavigator();
const CommunityStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthFlow(){
  return(
    <AuthStack.Navigator screenOptions={{headerShown:false}}>
      <AuthStack.Screen name="Onboarding" component={Onboarding}/>
      <AuthStack.Screen name="Login" component={Login}/>
      <AuthStack.Screen name="Register" component={Register}/>
    </AuthStack.Navigator>
  );
}

function HomeFlow(){
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Dashboard" component={Dashboard}/>
      <HomeStack.Screen name="Upload" component={Upload}/>
      <HomeStack.Screen name="Library" component={Library}/>
      <HomeStack.Screen name="Leaderboard" component={Leaderboard}/>
    </HomeStack.Navigator>
  );
}

function LearnFlow(){
  return(
    <LearnStack.Navigator>
      <LearnStack.Screen name="LibraryLearn" component={Library}/>
      <LearnStack.Screen name="ConversionResult" component={ConversionResult}/>
      <LearnStack.Screen name="Quiz" component={Quiz}/>
      <LearnStack.Screen name="Story" component={Story}/>
      <LearnStack.Screen name="Audio" component={Audio}/>
    </LearnStack.Navigator>
  );
}

function CommunityFlow(){
  return(
    <CommunityStack.Navigator>
      <CommunityStack.Screen name="Feed" component={Feed}/>
      <CommunityStack.Screen name="Chat" component={Chat}/>
      <CommunityStack.Screen name="PlayWithFriends" component={PlayWithFriends}/>
      <CommunityStack.Screen name="Challenges" component={Challenges}/>
    </CommunityStack.Navigator>
  );
}

function ProfileFlow(){
  return(
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile}/>
      <ProfileStack.Screen name="Settings" component={Settings}/>
      <ProfileStack.Screen name="PremiumUpgrade" component={PremiumUpgrade}/>
    </ProfileStack.Navigator>
  );
}

function Tabs(){
  return(
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={HomeFlow}/>
      <Tab.Screen name="Learn" component={LearnFlow}/>
      <Tab.Screen name="Community" component={CommunityFlow}/>
      <Tab.Screen name="Profile" component={ProfileFlow}/>
    </Tab.Navigator>
  );
}

export default function AppNavigator(){
  return(
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown:false}}>
        <RootStack.Screen name="Splash" component={Splash}/>
        <RootStack.Screen name="Auth" component={AuthFlow}/>
        <RootStack.Screen name="Main" component={Tabs}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
