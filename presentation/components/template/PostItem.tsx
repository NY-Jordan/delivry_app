import { View, Text, Image, Pressable, useWindowDimensions } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function PostItem() {
  const layout = useWindowDimensions();
  const HEIGHT_BOX = layout.width * 0.6;
  return (
    <View style={{ height : HEIGHT_BOX }} className='w-full  rounded'>
      <Image className='w-full  pt-6 h-2/3 rounded-xl' resizeMode='cover' source={{  uri : 'https://www.senpages.com/app/uploads/fast-food-960x640-1.jpg'}} />
      
      <View className='w-full flex flex-row justify-between items-center absolute top-5 px-3'>
        <View className='bg-gray-400 rounded-full p-1'><MaterialCommunityIcons size={30} name='heart-outline' /></View>
        <View className='bg-white w-fit text-gray-400 py-2 px-2 rounded-xl flex items-center flex-row'>
          <Pressable> <MaterialCommunityIcons size={20} name='thumb-up-outline' className='mr-6' color={'#2563eb'}  /></Pressable>
          <Text style={{ fontFamily : 'Poppins_400Regular' }} className='text-xl text-green-500 font-semibold mr-2'>95%</Text>
          <Text className='text-md' style={{ fontFamily : 'ZillaSlab_400Regular' }}>sur 250 reviews</Text>
        </View>
      </View>
      
      <View className='mt-3'>
        <Text className='text-2xl' style={{ fontFamily : 'Poppins_500Medium' }}>Le fourquet</Text>
        <View className='flex flex-row justify-start w-1/2 items-center' >
          <Text className='text-green-600 text-xl' style={{ fontFamily : 'ZillaSlab_600SemiBold' }}>500 FCFA</Text>
          <Text className='mx-3'>~</Text>
          <Text className='text-2xl' style={{ fontFamily : 'Alegreya_400Regular' }}>30-40 min</Text>
        </View>
      </View>
      
    </View>
  )
}