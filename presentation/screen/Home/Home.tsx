import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { Box, HStack, Pressable, ScrollView } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { UserRound } from 'lucide-react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { categories } from '@/assets/data/data'
import PostItem from '@/presentation/components/template/PostItem'

export default function Home() {
  return (
    <ScrollView backgroundColor={'gray.100'} px={3} pt={4} flex={1} showsHorizontalScrollIndicator={false}>

      <View className='   h-[6%]'  >
        <HStack h={'full'} alignItems={'center'} justifyContent={'space-between'} >
          <Box> 
            <MaterialCommunityIcons name='account-circle-outline'  size={40} />
          </Box>
          <Image  resizeMode='contain' style={{  width : '50%', height : '50%'  }} source={require('./../../../assets/images/logo2.png')} />
          <Pressable>
            <Box bgColor={'green.500'} p={2} rounded={'full'}><MaterialCommunityIcons color={'white'} name='cart-variant' size={25} /></Box>
          </Pressable>
        </HStack>
      </View>

      <View className='mx-0  p-0'>

          <View className='mt-5 flex flex-row w-full  justify-between'>
            <Pressable className='w-[49%] '  >
                <Image className='h-32 w-full rounded-xl' source={{
                  uri : 'https://media.admiddleeast.com/photos/66a8cd5c062b8b3a02f9430c/16:9/w_2560%2Cc_limit/abu-dhabi-broadway-interior-seating.jpeg'
                }} />
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.6)']}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius : 10,
                    height: '50%',
                  }}
                />
                <Text className='absolute text-white text-xl left-[48%] top-[70%]' style={{ fontFamily : 'Poppins_400Regular' }}>Restaurants</Text>
            </Pressable>

            <Pressable className='w-[49%]'  >
                <Image className='h-32 w-full rounded-xl' source={{
                  uri : 'https://www.foodandwine.com/thmb/8rtGtUmtC0KiJCDxAUXP_cfwgM8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GTM-Best-US-Bars-Katana-Kitten-FT-BLOG0423-fa9f2ba9925c47abb4afb0abd25d915a.jpg'
                }} />
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.6)']}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius : 10,
                    height: '50%',
                  }}
                />
                <Text className='absolute text-white text-xl left-[78%] top-[70%]' style={{ fontFamily : 'Poppins_400Regular' }}>Bars</Text>
            </Pressable>
          </View>
          <View className='mt-2 flex flex-row w-full justify-between'>

            <View className='w-[49%]  flex flex-row '>
              
              <Pressable className='w-[50%] mx-1'  >
                <Image className='h-32 w-full rounded-xl' source={{
                    uri : 'https://info-luxe.com/wp-content/uploads/2024/01/1705796036_patisserie-de-luxe-les-creations-qui-font-rever-les-gourmands-1-1024x701.jpg'
                  }} />
                  <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.6)']}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius : 10,
                    height: '50%',
                  }}
                />
                 <Text className='absolute text-white text-lg left-[12%] top-[70%]' style={{ fontFamily : 'Poppins_500Medium' }}>Patisseries</Text>

              </Pressable>
              <Pressable className='w-[50%] '  >
                  <Image className='h-32 w-full rounded-xl' source={{
                    uri : 'https://www.le-caucase.com/wp-content/uploads/2024/04/1712185435_la-street-food-coreenne-plus-quune-tendance-une-culture.jpg'
                  }} />
                  <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.6)']}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius : 10,
                    height: '50%',
                  }}
                />
                  <Text className='absolute text-white text-lg left-[7%] top-[70%]' style={{ fontFamily : 'Poppins_500Medium' }}>Street-Food</Text>
              </Pressable>
            </View>

            <View className='w-[49%]  flex flex-row'>
              <Pressable className='w-[50%] mx-1'  >
                  <Image className='h-32 w-full rounded-xl' source={{
                    uri : 'https://img.freepik.com/photos-gratuite/burger-boeuf-grille-frites-fromage-tomate-ia-generative_188544-8466.jpg?semt=ais_hybrid'
                  }} />
                  <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.6)']}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius : 10,
                    height: '50%',
                  }}
                />
                  <Text className='absolute text-white text-lg left-[7%] top-[70%]' style={{ fontFamily : 'Poppins_500Medium' }}>Fast Food</Text>
              </Pressable>
              <Pressable className='w-[50%] '  >
                  <Image className='h-32 w-full rounded-xl' source={{
                    uri : 'https://www.presentation-cv-simple.com/wp-content/uploads/2017/10/Pr%C3%A9sentation-CV-de-Second-de-Cuisine.jpg'
                  }} />
                  <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.6)']}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    borderRadius : 10,
                    right: 0,
                    height: '50%',
                  }}
                />
                  <Text className='absolute text-white text-lg left-[7%] top-[70%]' style={{ fontFamily : 'Poppins_500Medium' }}>Freelance</Text>
              </Pressable>
            </View>
          </View>

      </View>

      <View className='my-10' >
            <Text className='text-3xl font-semibold' style={{ fontFamily : 'Poppins_400Regular' }} >Pres de chez vous</Text>
            <Text className='text-gray-400' style={{ fontFamily : 'Poppins_400Regular' }}>Notre recommandations de lieux proche de chez vous</Text>
      </View>


      <View>
        <ScrollView horizontal className='w-fit  ' showsHorizontalScrollIndicator={false}>
          {
            categories.map((category, key) => {
              return <Pressable key={key} className='w-fit bg-white rounded-lg py-1 px-3 flex flex-row items-center mr-3'><Image className='w-10 h-10' source={{ uri : category.image }} /><Text className='text-lg ml-2'>{category.name}</Text></Pressable>
            })
          }
        </ScrollView>
      </View>

      <View className=' h-full mt-[7%] overflow-x-hidden'>
         <PostItem />
         <PostItem />
      </View>

    </ScrollView>
  )
}
