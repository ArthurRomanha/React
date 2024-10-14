import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View, Button } from 'react-native';

import Texto from '../../componentes/texto';

import topo from '../../../../assets/topo.png';
import logo from '../../../../assets/logo.png'

export default function Cesta() {
  return <>
    <Image source={topo} style={estilos.topo} />
    <Texto style={estilos.titulo}>Detalhes da Cesta</Texto>

    <View style={estilos.cesta}>
      <Text style={estilos.subtitulo}>Conteúdo da Cesta</Text>
      <View style={estilos.fazenda}>
        <Image source={logo} style={estilos.imagemFazenda}></Image>
        <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
      </View>
      <Texto style={estilos.description}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a sua cozinha 
      </Texto>
      <Texto style={estilos.preco}>R$40,00</Texto>
      <Button title="Comprar" style={estilos.button}/>
    </View>
  </>
}
const widthScreen = Dimensions.get('screen').width;
const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 578 / 768 * widthScreen,
  },
  titulo: {
    width: '100%',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
    position: 'absolute',
    textAlign: 'center'
  },
  cesta:{
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  subtitulo:{
    fontWeight: 'bold',
    color: "black",
    fontSize: 30,
  },
  fazenda:{
    flexDirection:'row',
    paddingVertical:8,
  },
  imagemFazenda:{
    width: 32,
    height: 32,
  },
  nomeFazenda:{
    fontSize: 18,
    lineHeight: 46,
    marginLeft: 12,
  },
  description:{
    color: "#A3A3A3",
    fontSize: 20,
  },
  preco:{
    color: "#0f0",
    fontSize: 30,
    fontWeight:"bold",
    lineHeight:46,
  },
  button:{
    borderRadius:5,
    backgroundColor:"#0f0",
  }
});