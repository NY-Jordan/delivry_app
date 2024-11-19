import { View, Text, ImageBackground, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';
import { ChevronLeft, Phone } from 'lucide-react-native';
import { Box, Divider, Input, VStack } from 'native-base';
import { useNavigation, useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Backbtn from '@/presentation/components/base/Backbtn';


export default function PhoneNumber() {
    const navigator = useNavigation();
    const handlePress = () => {
        console.info("Pressed!");
      };
  return (
   
    <ImageBackground   
        blurRadius={5}
        resizeMode='cover'
        className='flex justify-end'    
        style={{ flex : 1, height : '100%'  }}
        source={require('./../../../../assets/images/background_home.jpg')}>
            
        <Image  resizeMode='contain' className='absolute' style={{  width : '50%', height : '50%', bottom : '50%', left : '30%'  }} source={require('./../../../../assets/images/logo.png')} />
        <SafeAreaView className=' h-[50%] rounded-t-3xl bg-white py-4 px-4 '>
           <Backbtn />
           <VStack mx={7}  h={'100%'} mt={'14%'}  space={8}  >
            <Text className='text-3xl text-center font-semibold ' style={{ fontFamily : 'Poppins_400Regular' }}>Connection Via numero de telephone</Text>
            <Box>
              <Input  InputLeftElement={<MaterialCommunityIcons name='phone-outline' size={34} className='mr-10' /> }
              variant="underlined" color={'gray.600'} borderColor={'gray.500'} style={{ fontSize : 20, fontFamily : 'Poppins_400Regular', textAlign : 'center' }} placeholder="Numero de telephone" />
              <Text className='text-start mt-3 text-gray-600 text-2xl'>Ex : 6xxxxxxxx</Text>
            </Box>
            <Pressable 
                onPress={() => { navigator.navigate('VerificationNumber') }}
                className='bg-green-600 py-4 my-2 rounded-lg flex flex-row justify-center  items-center focus:bg-green-700'
                
                >
                    <Text className='text-white text-lg text-cente ml-4'  style={{ fontFamily : 'Poppins_400Regular' }}>Continuer</Text>
                </Pressable> 
           </VStack>
        </SafeAreaView>
    </ImageBackground>
        
  )
}