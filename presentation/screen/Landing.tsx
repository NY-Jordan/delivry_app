import { View, Text, ImageBackground, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';
import { Phone } from 'lucide-react-native';
import { Box, Divider } from 'native-base';
import { useNavigation, useRouter } from 'expo-router';


export default function Landing() {
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
        source={require('./../../assets/images/background_home.jpg')}>
            
        <Image  resizeMode='contain' className='absolute' style={{  width : '50%', height : '50%', bottom : '50%', left : '30%'  }} source={require('./../../assets/images/logo.png')} />
        <SafeAreaView className=' h-[50%] rounded-t-3xl bg-white py-4 px-10 '>
            <View className='flex justify-center w-full  mt-6'>
                <Text className='text-center text-3xl font-semibold' style={{ fontFamily : 'Poppins_500Medium' }}>Se Connecter</Text>
            </View>
            <View className='mt-4 '>
                <Pressable 
                onPress={() => { navigator.navigate('PhoneNumber') }}
                className='bg-green-600 py-4 my-2 rounded-lg flex flex-row justify-center   items-center focus:bg-green-700'
                
                >
                    <Text className='text-white text-lg text-cente ml-4'  style={{ fontFamily : 'Poppins_400Regular' }}>Numero de telephone</Text>
                </Pressable> 

                <Pressable
                className='bg-sky-700 py-4 my-2 rounded-lg flex flex-row justify-center   items-center focus:bg-green-700'
                onPress={() => console.info('click')}
                >
                    <Image className='h-8 w-8' source={require('./../../assets/images/facebook-176-svgrepo-com.png')} />
                </Pressable>

                <Pressable
                className='bg-red-700 py-4 my-2 rounded-lg flex flex-row justify-center   items-center focus:bg-green-700'
                onPress={() => console.info('click')}
                >
                    <Image className='h-8 w-8' source={require('./../../assets/images/google-svgrepo-com.png')} />
                </Pressable>

            </View>
            <Box w={'full'} mt={4} display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Divider w={'47%'} orientation='horizontal' ></Divider>
                <Text className='mx-2'>Ou</Text>
                <Divider w={'47%'} orientation='horizontal' ></Divider>

            </Box>


            <View className='w-full mt-4'>
                <Text className='text-xl text-green-600 text-center' style={{ fontFamily : 'Poppins_400Regular' }}>Continuer sans Compte</Text>
            </View>

            <View className='w-full mt-6'>
                <Text className='text-md text-gray-500 text-center' style={{ fontFamily : 'Poppins_400Regular' }}>En creant un compte, vous  acceptez nos conditions d'utilisations et notre politique de confidentialite</Text>
            </View>
            
        </SafeAreaView>
    </ImageBackground>
        
  )
}