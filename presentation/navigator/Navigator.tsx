import {  SafeAreaView } from 'react-native'
import "@/global.css";
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import Landing from '@/presentation/screen/Landing';
import './../../global.css'
import PhoneNumber from '@/presentation/screen/auth/phonenumber/PhoneNumber';
import VerificationNumber from '../screen/auth/verificationnumber/VerificationNumber';
import Home from '../screen/Home/Home';


enableScreens();
const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator initialRouteName='Landing'>
            <Stack.Screen name="Landing" component={Landing} options={{ headerShown : false }} />
            <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={{ headerShown : false }} />
            <Stack.Screen name="VerificationNumber" component={VerificationNumber} options={{ headerShown : false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown : false }} />
        </Stack.Navigator>
      </SafeAreaView>
  );
}