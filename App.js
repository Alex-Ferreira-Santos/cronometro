import { StatusBar } from 'expo-status-bar';
import React, { Component }from 'react';
import { render } from 'react-dom';
import {Text, View, TouchableOpacity } from 'react-native';
import styles from './src/styles/index'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      tempo: 0.0,
      minutos: '',
      zerar: 'Zerar',
      comecar: 'Vai!',
      style: styles.vai,
      registro: [],
      styleData: styles.invisivel,
    }
    this.contador = this.contador.bind(this)
    this.zerar = this.zerar.bind(this)
    this.tempoTotal = `${this.state.minutos} ${this.state.tempo}s`
    this.ultimoMinuto = 0
  }
  


  contador(){
    if(this.state.comecar === 'Pausar'){
      this.parar
      this.setState({style: styles.vai})
      this.setState({comecar: 'Vai!'})
      clearInterval(contagem)
      alert('Passou por aqui')
      return

    }else{
      this.setState({style: styles.pausar})
      this.setState({comecar: 'Pausar'})
      this.setState({zerar: 'Salvar e zerar'})
    }
    const contagem = setInterval(()=>{
      let time = this.state.tempo + 0.1
      if(time>59.9){
        time = 0
        this.ultimoMinuto++
        this.setState({minutos:`${this.ultimoMinuto}m `})
      }    
      this.setState({tempo: time})
      this.setState({contando: true}) 
    },100)
  }

  zerar(){
    if(this.state.zerar === 'Salvar e zerar'){
      this.setState({styleData: styles.data})
      this.state.registro.push(this.tempoTotal)
    }
    this.setState({contador: false})
    this.setState({minutos:''})
    this.setState({tempo: 0})
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Sports Center</Text>
        <Text style={styles.time}>{this.state.minutos}{this.state.tempo.toFixed(1)}s</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={this.state.style} onPress={this.contador}>
            <Text style={styles.text}>{this.state.comecar}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.zerar} onPress={this.zerar}>
            <Text style={styles.text}>{this.state.zerar}</Text>
          </TouchableOpacity>
        </View>
        <View style={this.state.styleData}>
          <View style={styles.dados}>
            <Text style={styles.text}>Nº de Registro</Text>
            <Text style={styles.text}>{this.state.registro.length}</Text>
          </View>
          <View style={styles.dados}>
            <Text style={styles.text}>Tempo</Text>
            <Text style={styles.text}>
              {this.state.minutos}{this.state.tempo.toFixed(1)}s
            </Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }

}


