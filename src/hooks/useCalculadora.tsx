import { useRef, useState } from "react"

// Enumeración en TypeScript
enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    // Número superior de la calculadora
    const [numeroAnterior, setNumeroAnterior] = useState('0')
    // Número inferior de la calculadora
    const [numero, setNumero] = useState('0')
    const ultimaOperacion = useRef<Operadores>()
    // Resetear número de calculadora
    const limpiar = () => {
        setNumeroAnterior('0')
        setNumero('0')
    }
    // Construir el número a usar
    const armarNumero = (numeroTexto: string) => {
        // Verificar si existe un punto decimal
        if (numero.includes('.') && numeroTexto === '.') return
        // Si número incluye 0 o con -0
        if (numero.startsWith('0') || numero.startsWith('-0')) {
            // Si es el primer punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto)
                // Verificar si es otro cero y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto)
                // Evaluar si es un número diferente de 0 y no tiene un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)
                // Evitar el 0000.0
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero)
            }
        } else {
            setNumero(numero + numeroTexto)
        }

    }
    // Cambiar el signo del número
    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero)
        }
    }
    //Botón de borrar último número introducido
    const btnBorrar = () => {
        let negativo = ''
        let numeroTemp = numero

        if (numero.includes('-')) {
            negativo = '-'
            numeroTemp = numero.substring(1)
        }

        // En caso de que el número tenga una longitud mayor de 1, por ejemplo, 45
        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0, -1))
            // En caso de que el número tenga una longitud de 1, por ejemplo, 8
        } else {
            setNumero('0')
        }
    }
    // Cambiar número por anterior
    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1))
        } else {
            setNumeroAnterior(numero)
        }
        setNumero('0')
    }
    // Dividir
    const btnDividir = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.dividir

    }
    // Multiplicar
    const btnMultiplicar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.multiplicar

    }
    // Sumar
    const btnSumar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.sumar

    }
    // Restar
    const btnRestar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.restar

    }
    //Calcular el resultado
    const calcular = () => {
        const num1 = Number(numero)
        const num2 = Number(numeroAnterior)
        switch (ultimaOperacion.current) {
            case Operadores.restar:
                setNumero(`${num2 - num1}`)
                break;
            case Operadores.sumar:
                setNumero(`${num1 + num2}`)
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1}`)
                break;
            default: break;
        }
        setNumeroAnterior('0')
    }

    return {
        numeroAnterior, numero,
        limpiar, armarNumero, positivoNegativo,
        btnBorrar, btnDividir, btnMultiplicar,
        btnSumar, btnRestar, calcular
    }
}
