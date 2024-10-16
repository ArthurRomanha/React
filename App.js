import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/Cesta/Componentes/index';

export default function App() { 
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  if (!fonteCarregada) {
    <View/>
  }
  return (
    <SafeAreaView >
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}