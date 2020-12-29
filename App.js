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
      style: styles.vai
    }
    this.contador = this.contador.bind(this)
    this.zerar = this.zerar.bind(this)
  }

  contador(){
    this.setState({style: styles.pausar})
    this.setState({comecar: 'Pausar'})
    setInterval(() =>{   
          let time = this.state.tempo + 0.1
          if(time>59.9){
            time = 0
            minutos++
            this.setState({minutos:`${minutos}m `})
          }    
          this.setState({tempo: time})
          this.setState({contando: true}) 
      },100)
  }

  zerar(){
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
        <StatusBar style="auto" />
      </View>
    );
  }

}


