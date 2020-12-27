import { StatusBar } from 'expo-status-bar';
import React, { Component }from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      tempo: 0.0,
      minutos: '',
      zerar: 'Zerar',
      comecar: 'Vai!',
    }
    this.contador = this.contador.bind(this)
    this.zerar = this.zerar.bind(this)
  }

  contador(){
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
        <Text style={styles.logo}>Logo</Text>
        <Text style={styles.time}>{this.state.minutos}{this.state.tempo.toFixed(1)}s</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.vai} onPress={this.contador}>
            <Text style={styles.textVai}>{this.state.comecar}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.zerar} onPress={this.zerar}>
            <Text style={styles.textZerar}>{this.state.zerar}</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial'
  },
  logo:{
    position: 'absolute',
    backgroundColor: 'lightblue',
    fontSize: 40,
    padding: 30,
    top: 100,
  },
  time:{
    fontSize: 30,

  },
  buttons:{
    width: '95%',
    top: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  vai:{
    backgroundColor: 'pink',
    width: 150,
    height: 50,
    justifyContent: 'center',
    borderRadius: 15,
  },
  textVai:{
    textAlign: 'center',
    fontSize: 20,
  },
  zerar:{
    backgroundColor: 'green',
    width: 150,
    height: 50,
    justifyContent: 'center',
    borderRadius: 15,
  },
  textZerar:{
    textAlign: 'center',
    fontSize: 20,
  }
});
