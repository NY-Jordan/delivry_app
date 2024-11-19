import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router';

export default function Backbtn() {
    const [isPressed, setIsPressed] = useState(false);
    const navigator = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigator.goBack()}  activeOpacity={1} className={`p-4 flex flex-row items-center  rounded-full w-36 ${
        isPressed ? 'bg-green-200' : 'bg-white'
      }`}
      onPressIn={() => setIsPressed(true)} // Lorsque le bouton est pressé
      onPressOut={() => setIsPressed(false)} // Lorsque le bouton est relâché
    >
              <MaterialCommunityIcons name='chevron-left' color={'green'} size={35} />
              <Text className='text-2xl text-green-600'>Back</Text>
           </TouchableOpacity>
  )
}