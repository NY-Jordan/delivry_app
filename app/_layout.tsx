import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { NativeBaseProvider } from 'native-base';
import { Text } from 'react-native';
import { CormorantGaramond_400Regular, CormorantGaramond_500Medium_Italic, CormorantGaramond_600SemiBold } from '../node_modules/@expo-google-fonts/cormorant-garamond/index';
import { ZillaSlab_400Regular, ZillaSlab_500Medium, ZillaSlab_600SemiBold } from '../node_modules/@expo-google-fonts/zilla-slab/index';
import { Alegreya_400Regular } from '../node_modules/@expo-google-fonts/alegreya/index';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  const [loaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    CormorantGaramond_400Regular,
    CormorantGaramond_600SemiBold,
    CormorantGaramond_500Medium_Italic,
    ZillaSlab_400Regular,
    ZillaSlab_600SemiBold,
    Alegreya_400Regular
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NativeBaseProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{
          headerShown : false
        }}  />
        <StatusBar style="auto" />
    </ThemeProvider>
    </NativeBaseProvider>
  );
}
