import React from 'react';
import { Text, View } from 'react-native';
import { Boton } from '../components/Boton';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
    // Lógica de la calculadora en el Hooks/useCalculadora.tsx
    const { numeroAnterior, numero,
        limpiar, armarNumero, positivoNegativo,
        btnBorrar, btnDividir, btnMultiplicar,
        btnSumar, btnRestar, calcular
    } = useCalculadora();
    return (
        <View style={styles.calculadoContainer}>
            {
                (numeroAnterior !== '0') &&
                (<Text style={styles.resultadoPeque}>{numeroAnterior}</Text>)
            }
            <Text style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit>{numero}</Text>
            {/* Botones */}
            <View style={styles.fila}>
                {/* Botón
                Código de colores backgroundColor:
                - #2D2D2D Gris oscuro
                - #9B9B9B Gris claro
                - #FF9427 Naranja
                 */}
                <Boton texto='C' color='#9B9B9B' accion={limpiar} />
                <Boton texto='+/-' color='#9B9B9B' accion={positivoNegativo} />
                <Boton texto='del' color='#9B9B9B' accion={btnBorrar} />
                <Boton texto='÷' color='#FF9427' accion={btnDividir} />
            </View>
            <View style={styles.fila}>
                <Boton texto='7' accion={armarNumero} />
                <Boton texto='8' accion={armarNumero} />
                <Boton texto='9' accion={armarNumero} />
                <Boton texto='×' color='#FF9427' accion={btnMultiplicar} />
            </View>
            <View style={styles.fila}>
                <Boton texto='4' accion={armarNumero} />
                <Boton texto='5' accion={armarNumero} />
                <Boton texto='6' accion={armarNumero} />
                <Boton texto='−' color='#FF9427' accion={btnRestar} />
            </View>
            <View style={styles.fila}>
                <Boton texto='1' accion={armarNumero} />
                <Boton texto='2' accion={armarNumero} />
                <Boton texto='3' accion={armarNumero} />
                <Boton texto='+' color='#FF9427' accion={btnSumar} />
            </View>
            <View style={styles.fila}>
                <Boton texto='0' ancho={true} accion={armarNumero} />
                <Boton texto='.' accion={armarNumero} />
                <Boton texto='=' color='#FF9427' accion={calcular} />
            </View>
        </View>
    )
}
