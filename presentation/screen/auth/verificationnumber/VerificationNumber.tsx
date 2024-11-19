import { View, Text, ImageBackground, Image, Pressable, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native';
import { ChevronLeft, Phone } from 'lucide-react-native';
import { Box, Divider, Input, VStack } from 'native-base';
import { useNavigation, useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Backbtn from '@/presentation/components/base/Backbtn';
import { StyleSheet } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export default function VerificationNumber() {
    const navigator = useNavigation();
    const handlePress = () => {
        console.info("Pressed!");
      };

      const [value, setValue] = useState('');
      const ref = useBlurOnFulfill({value, cellCount: 4});
      const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      });
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
           <VStack mx={7}  h={'100%'} mt={'10%'}  space={7}  >
            <Box>
              <Text className='text-3xl mb-4 text-center font-semibold ' style={{ fontFamily : 'Poppins_400Regular' }}>Verifier votre numero de telephone</Text>
              <Text className='text-lg text-center font-semibold text-gray-400' style={{ fontFamily : 'Poppins_400Regular' }}>un code de verification a ete envoyer a votre numero de tcelephone via SMS</Text>
            </Box>
            <Box>
              <CodeField
                  ref={ref}
                  {...props}
                  // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                  value={value}
                  onChangeText={setValue}
                  cellCount={4}
                  rootStyle={styles.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  testID="my-code-input"
                  renderCell={({index, symbol, isFocused}) => (
                    <Text
                      key={index}
                      className='h-20 w-20 text-center text-2xl pt-4 bg-gray-200 rounded'
                      onLayout={getCellOnLayoutHandler(index)}>
                      {symbol || (isFocused ? <Cursor/> : null)}
                    </Text>
                  )}
                />
            </Box>
            <Pressable 
                onPress={() => { navigator.navigate('Home') }}
                className='bg-green-600 py-4 my-2 rounded-lg flex flex-row justify-center  items-center focus:bg-green-700'>
                    <Text className='text-white text-lg text-cente ml-4 '  style={{ fontFamily : 'Poppins_400Regular' }}>Se connecter</Text>
                </Pressable> 
           </VStack>
        </SafeAreaView>
    </ImageBackground>
        
  )
}


const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 10},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});