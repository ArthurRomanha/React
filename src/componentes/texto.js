import { processFontFamily } from "expo-font";
import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({children, style}){
    let estiloAplicado = estilos.texto;
    if (style?.fontWeight === 'bold'){
        estiloAplicado = estilos.textoNegrito;
    }
    return <Text style={[style , estiloAplicado]}>{children}</Text>
}
const estilos = StyleSheet.create({
    texto:{
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    textoNegrito:{
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
})