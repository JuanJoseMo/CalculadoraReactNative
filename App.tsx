import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        // Para poner la barra de color negro en Android.
        backgroundColor='black'
        // Para poner los iconos de la barra de notificación en IOS en blanco.
        barStyle='light-content'
      />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App;