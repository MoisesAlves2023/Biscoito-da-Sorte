import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

export default function meuappCli() {
  const [img, setImg] = useState(require('./src/biscoito.png'))
  const [frase, setFrase] = useState('')

  let frases = [
    'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
    'Imagine uma nova história para sua vida e acredite nela',
    'A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor',
    'Ser feliz sem motivo é a mais autêntica forma de felicidade',
    'Não existe um caminho para a felicidade.A felicidade é o caminho',
    'Não espere por uma crise para descobrir o que é importante em sua vida',
    'Acredite em si e chegará um dia em que os outros não terão outra escolha senão acreditar com você.',
  ]

  function quebrarBiscoito() {
    let numeroAleatorio = Math.floor(Math.random()* frases.length)

    setFrase('" ' + frases[numeroAleatorio] + ' " ')
    setImg(require('./src/biscoitoAberto.png'))

  }

  function reiniciarBiscoito(){
    setFrase('')
    setImg(require('./src/biscoito.png'))

  }


  return (
    <View style={styles.container}>

      <Image
        style={styles.img}
        source={img}
      />

      <Text style={styles.frase}>{frase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebrarBiscoito}>
        <View style={styles.areaBtn}>
          <Text style={styles.textBotao}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { borderColor: 'black', margin: 10, }]} onPress={reiniciarBiscoito}>
        <View style={styles.areaBtn}>
          <Text style={[styles.textBotao, { color: 'black' }]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  img: {
    width: 230,
    height: 230,

  },
  frase: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#dd7b22',
    textAlign: 'center',
    fontStyle: 'italic',
    margin: 30
  },
  botao: {
    width: 230,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#dd7b22',
  },
  areaBtn: {
    flex: 1,
    justifyContent: 'center',

  },
  textBotao: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22',

  }
})