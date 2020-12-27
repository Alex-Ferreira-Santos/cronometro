import { StatusBar } from 'expo-status-bar';
import React, { Component }from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      tempo: '0.0s',
      zerar: 'Zerar',
      comecar: 'Vai!',
      contando: true,
    }
    this.contador = this.contador.bind(this)
  }

  contador = () => {

    while(this.state.contando){
      alert('oi')
      break
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Logo</Text>
        <Text style={styles.time}>{this.state.tempo}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.vai} onPress={this.contador}>
            <Text style={styles.textVai}>{this.state.comecar}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.zerar}>
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
